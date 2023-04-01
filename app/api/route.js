import { NextResponse } from "next/server";
import { getPostsMetadata } from "@/lib/postMetadata";

export function getMetadata(req, res) {
  if( req.method === "GET" ) {
    const metadata = getPostsMetadata();
    return NextResponse.json(metadata);
  }

  return NextResponse.error(405, "Method not allowed");
}