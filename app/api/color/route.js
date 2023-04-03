import fs from 'fs'

export async function GET(req) {
  const json = fs.readFileSync('data/color.json', 'utf8')
  console.log(json)
  return Response.json(json)
}