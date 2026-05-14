import type { InstagramPost } from "@/types/instagram";
import { NextResponse } from "next/server";

let cache: { data: InstagramPost[]; ts: number } | null = null;
const TTL = 60 * 60 * 1000;

export async function GET() {
  if (cache && Date.now() - cache.ts < TTL) {
    return NextResponse.json(cache.data, {
      headers: { "Cache-Control": "public, s-maxage=3600, stale-while-revalidate=86400" },
    });
  }

  const token = process.env.INSTAGRAM_ACCESS_TOKEN;
  if (!token) {
    return NextResponse.json([], { status: 200 });
  }

  try {
    const url = `https://graph.instagram.com/me/media?fields=id,caption,media_url,permalink,thumbnail_url,media_type,timestamp&limit=6&access_token=${token}`;
    const res = await fetch(url, { next: { revalidate: 3600 } });
    if (!res.ok) return NextResponse.json([], { status: 200 });

    const json = await res.json() as { data: InstagramPost[] };
    const posts = json.data ?? [];
    cache = { data: posts, ts: Date.now() };

    return NextResponse.json(posts, {
      headers: { "Cache-Control": "public, s-maxage=3600, stale-while-revalidate=86400" },
    });
  } catch {
    return NextResponse.json([], { status: 200 });
  }
}
