import { getPostsMetadata } from "@/lib/postMetadata";

export async function GET(req, res) {
  const metadata = getPostsMetadata();
  const reponse = Response.json(metadata);

  return reponse
}