// // Next.js API route support: https://nextjs.org/docs/api-routes/introduction
//
// export default function handler(req, res) {
//   res.status(200).json({ name: 'John Doe' })
// }

export const config = {
  runtime: 'edge',
}

export default async function (req) {
  return Response.json({ name: 'John Doe' })
}
