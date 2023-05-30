import { NextApiHandler, NextApiRequest } from "next";
import formidable from "formidable";
import path from "path";
import fs from "fs/promises";

export const config = {
  api: {
    bodyParser: false,
  },
};

const readFile = (
  req: NextApiRequest,
  dir: string,
  saveLocally?: boolean,
): Promise<{ fields: formidable.Fields; files: formidable.Files }> => {
  const options: formidable.Options = {};
  if (saveLocally) {
    console.log("-----SAVELOCALLY----")
    options.uploadDir = dir
    options.filename = (name, ext, path, form) => {
      return Date.now().toString() + "_" + path.originalFilename;
    };
  }
  options.maxFileSize = 4000 * 1024 * 1024;
  const form = formidable(options);
  return new Promise((resolve, reject) => {
    form.parse(req, (err, fields, files) => {
      if (err) reject(err);
      resolve({ fields, files });
    });
  });
};

const handler: NextApiHandler = async (req, res) => {
  console.log(' Calling upload image handler ')
  const dir = path.join(process.cwd(), "/public/images")
  try {
    console.log('Reading directory -> ', dir)
    await fs.readdir(dir);
  } catch (error) {
    console.log('Dir not found, creating...')
    await fs.mkdir(dir);
  }
  console.log('Reading file to upload')
  await readFile(req, dir, true);
  res.status(200).json({ name: "hello file uploader"})
};

export default handler;