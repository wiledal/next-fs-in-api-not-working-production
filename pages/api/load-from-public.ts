import fs from "fs/promises";
import path from "path";
// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";

type Data = {
  name: string;
};

const r = fs
  .readFile(path.join(process.cwd(), `/public/some-File.json`), "utf8")
  .then((p) => JSON.parse(p));

const handler = async (req: NextApiRequest, res: NextApiResponse<Data>) => {
  res.status(200).json(await r);
};

export default handler;
