export type InstagramPost = {
  id: string;
  caption?: string;
  label?: string;
  shortcode?: string;
  embedUrl?: string;
  mediaUrl?: string;
  thumbnailUrl?: string;
  permalink?: string;
};

const fallbackPosts: InstagramPost[] = [
  {
    id: "DYR1gQuDmcF",
    shortcode: "DYR1gQuDmcF",
    label: "post 1",
    permalink: "https://www.instagram.com/p/DYR1gQuDmcF/",
    embedUrl: "https://www.instagram.com/p/DYR1gQuDmcF/embed/",
    mediaUrl: "/images/escolta-lider/instagram/post-1.webp",
    thumbnailUrl: "/images/escolta-lider/instagram/post-1.webp",
  },
  {
    id: "DYAV2yHETiy",
    shortcode: "DYAV2yHETiy",
    label: "post 2",
    permalink: "https://www.instagram.com/p/DYAV2yHETiy/",
    embedUrl: "https://www.instagram.com/p/DYAV2yHETiy/embed/",
    mediaUrl: "/images/escolta-lider/instagram/post-2.webp",
    thumbnailUrl: "/images/escolta-lider/instagram/post-2.webp",
  },
  {
    id: "DXuScENEUqY",
    shortcode: "DXuScENEUqY",
    label: "post 3",
    permalink: "https://www.instagram.com/p/DXuScENEUqY/",
    embedUrl: "https://www.instagram.com/p/DXuScENEUqY/embed/",
    mediaUrl: "/images/escolta-lider/instagram/post-3.webp",
    thumbnailUrl: "/images/escolta-lider/instagram/post-3.webp",
  },
  {
    id: "DXo2K_cDlKD",
    shortcode: "DXo2K_cDlKD",
    label: "post 4",
    permalink: "https://www.instagram.com/p/DXo2K_cDlKD/",
    embedUrl: "https://www.instagram.com/p/DXo2K_cDlKD/embed/",
    mediaUrl: "/images/escolta-lider/instagram/post-4.webp",
    thumbnailUrl: "/images/escolta-lider/instagram/post-4.webp",
  },
];

type InstagramGraphResponse = {
  data?: Array<{
    id: string;
    caption?: string;
    media_url?: string;
    thumbnail_url?: string;
    permalink?: string;
  }>;
};

type InstagramPublicProfileResponse = {
  data?: {
    user?: {
      edge_owner_to_timeline_media?: {
        edges?: Array<{
          node?: {
            id?: string;
            shortcode?: string;
            display_url?: string;
            thumbnail_src?: string;
            edge_media_to_caption?: {
              edges?: Array<{
                node?: {
                  text?: string;
                };
              }>;
            };
          };
        }>;
      };
    };
  };
};

function toPostFromShortcode(
  shortcode: string,
  index: number,
  data?: Partial<InstagramPost>,
): InstagramPost {
  return {
    id: data?.id ?? shortcode,
    shortcode,
    label: data?.label ?? `post ${index + 1}`,
    caption: data?.caption,
    mediaUrl: data?.mediaUrl,
    thumbnailUrl: data?.thumbnailUrl,
    permalink: `https://www.instagram.com/p/${shortcode}/`,
    embedUrl: `https://www.instagram.com/p/${shortcode}/embed/`,
  };
}

async function getPublicProfilePosts(limit: number): Promise<InstagramPost[]> {
  const username = process.env.INSTAGRAM_USERNAME ?? "escolta_lider";
  const url = new URL(
    "https://www.instagram.com/api/v1/users/web_profile_info/",
  );
  url.searchParams.set("username", username);

  const response = await fetch(url, {
    headers: {
      "user-agent":
        "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/125.0 Safari/537.36",
      "x-ig-app-id": "936619743392459",
    },
    next: { revalidate: 1800 },
  });

  if (!response.ok) {
    return [];
  }

  const payload = (await response.json()) as InstagramPublicProfileResponse;
  const edges = payload.data?.user?.edge_owner_to_timeline_media?.edges ?? [];

  return edges
    .map((edge, index) => {
      const node = edge.node;

      if (!node?.shortcode) {
        return null;
      }

      return toPostFromShortcode(node.shortcode, index, {
        id: node.id,
        caption: node.edge_media_to_caption?.edges?.[0]?.node?.text,
        mediaUrl: node.display_url,
        thumbnailUrl: node.thumbnail_src,
      });
    })
    .filter((post): post is InstagramPost => Boolean(post))
    .slice(0, limit);
}

export async function getInstagramPosts(limit = 4): Promise<InstagramPost[]> {
  const accountId = process.env.INSTAGRAM_BUSINESS_ACCOUNT_ID;
  const accessToken = process.env.INSTAGRAM_ACCESS_TOKEN;
  const version = process.env.INSTAGRAM_GRAPH_API_VERSION ?? "v20.0";

  if (!accountId || !accessToken) {
    try {
      const publicPosts = await getPublicProfilePosts(limit);

      if (publicPosts.length) {
        return publicPosts;
      }
    } catch {
      return fallbackPosts.slice(0, limit);
    }

    return fallbackPosts.slice(0, limit);
  }

  const fields = [
    "id",
    "caption",
    "media_url",
    "thumbnail_url",
    "permalink",
  ].join(",");
  const url = new URL(
    `https://graph.facebook.com/${version}/${accountId}/media`,
  );
  url.searchParams.set("fields", fields);
  url.searchParams.set("limit", String(limit));
  url.searchParams.set("access_token", accessToken);

  try {
    const response = await fetch(url, { next: { revalidate: 1800 } });

    if (!response.ok) {
      return fallbackPosts.slice(0, limit);
    }

    const payload = (await response.json()) as InstagramGraphResponse;
    const posts = payload.data?.map((post, index) => ({
      id: post.id,
      caption: post.caption,
      label: `post ${index + 1}`,
      mediaUrl: post.media_url,
      thumbnailUrl: post.thumbnail_url,
      permalink: post.permalink,
      embedUrl: post.permalink
        ? `${post.permalink.replace(/\/?$/, "/")}embed/`
        : undefined,
    }));

    return posts?.length ? posts : fallbackPosts.slice(0, limit);
  } catch {
    return fallbackPosts.slice(0, limit);
  }
}
