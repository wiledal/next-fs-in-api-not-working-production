import fs from "fs/promises";
// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";
import path from "path";

type Data = {
  name: string;
};

const handler = async (req: NextApiRequest, res: NextApiResponse<Data>) => {
  const r = await fs
    .readFile(path.join(process.cwd(), "/data/Some-file.json"), "utf8")
    .then((p) => JSON.parse(p));

  res.status(200).json(r);
};

export default handler;
