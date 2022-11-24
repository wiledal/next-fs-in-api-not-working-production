import fs from "fs/promises";
// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";
import path from "path";

type Data = {
  name: string;
};

const somePath = path.join(process.cwd(), "/data/suprapower-regular.woff");

const handler = async (req: NextApiRequest, res: NextApiResponse<Data>) => {
  const r = await await fs.readFile(somePath, null);

  res.status(200).end(r);
};

export default handler;
