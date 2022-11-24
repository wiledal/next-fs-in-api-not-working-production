import fs from "fs/promises";
// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";
import path from "path";

type Data = {
  name: string;
};

const somePath = path.join(process.cwd(), "/data/some-file.json");

const handler = async (req: NextApiRequest, res: NextApiResponse<Data>) => {
  const r = await fs.readFile(somePath, "utf8").then((p) => JSON.parse(p));

  res.status(200).json(r);
};

export default handler;
