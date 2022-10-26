// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next';
import axios from "axios";


const handler = async (
  req: NextApiRequest,
  res: NextApiResponse
) => {
  const {data} = await axios.get(`https://api.github.com/users/${req.query.username}`);
  return res.status(200).json(data);
};

export default handler;