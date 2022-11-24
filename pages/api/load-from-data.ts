import fs from "fs/promises";
// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";
import path from "path";

type Data = {
  name: string;
};

/* prettier-ignore */
const somePath = path.join(
  process.cwd(), 
  "/data/some-file.json"
);

const handler = async (req: NextApiRequest, res: NextApiResponse<Data>) => {
  const r = await fs.readFile(somePath, "utf8");

  res.status(200).end(r);
};

export default handler;
