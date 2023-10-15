import type { NextApiRequest, NextApiResponse } from "next";

type ResponseData = {
  message: string;
};

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<ResponseData>
) {
  const cloudinary = require("cloudinary");

  // Return "https" URLs by setting secure: true
  cloudinary.config({
    secure: true,
  });

  const result = await cloudinary.v2.api.resources({
    type: "upload",
    prefix: "Akostek/banner/banner-item",
  });

  res.status(200).json({ message: JSON.stringify(result) });
}
