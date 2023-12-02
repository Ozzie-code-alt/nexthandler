import { connectionMongo} from "@/utils/server";
import FormModel from "@/models/form"



export async function GET(req : Request)
{
await connectionMongo()
const body = new FormModel(req)
console.log(body)
return new Response(JSON.stringify({works: "It works this is a json file if req 200"}))
}