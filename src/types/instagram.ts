export interface InstagramPost {
  id: string;
  caption?: string;
  media_url: string;
  permalink: string;
  thumbnail_url?: string;
  media_type: "IMAGE" | "VIDEO" | "CAROUSEL_ALBUM";
  timestamp: string;
}
