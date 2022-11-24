import fs from "fs/promises";
// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";

type Data = {
  name: string;
};

const handler = async (req: NextApiRequest, res: NextApiResponse<Data>) => {
  const r = await fs
    .readFile(process.cwd() + "/public/some-file.json", "utf8")
    .then((p) => JSON.parse(p));

  res.status(200).json(r);
};

export default handler;
