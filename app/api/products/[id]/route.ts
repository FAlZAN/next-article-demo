import { data } from "../../data";

export async function GET(
  request: Request,
  { params }: { params: { id: string } }
) {
  const item = data.filter((product) => params.id === product.id);
  if (item.length < 1) {
    return new Response("product not found");
  }
  return Response.json(item);
}
