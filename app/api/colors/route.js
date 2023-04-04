import fs from 'fs'
import path from 'path'

export async function GET(req) {
  const jsonFile = path.join(process.cwd(), 'data/colors.json') // get the path to the json file
  const json = fs.readFileSync(jsonFile, 'utf8') // read the json file
  
  return Response.json(JSON.parse(json)) // return the json file as a response
}