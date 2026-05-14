export interface BlogListItem {
  id: string;
  title: string;
  slug: string;
  date: string;
  excerpt: string;
  cover: string | null;
}

export interface BlogPost extends BlogListItem {
  content: string;
}
