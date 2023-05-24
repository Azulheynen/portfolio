import multer, { diskStorage } from "multer";
import path from "path";
import { fileURLToPath } from "url";
import { NextApiRequest, NextApiResponse } from 'next';
import next-connect from 'next-connect';
import PostImage from "./ImageUploader"
import UploadRoute from "./api/upload"



const apiRoute = nextConnect({UploadRoute});



type NextApiRequestWithFoo = NextApiRequest & {
  foo: (bar: string) => void;

};


const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)


const storage = multer.diskStorage({
  // destination: (req, file, callback) => {
  //   const filePath = path.resolve(__dirname,"../public/images")
  //   callback(null, filePath)
  // },
  destination: "/public/images",
  filename: (req, file, callback) => {
    const uniqueSuffix = Date.now() + "-" + Math.round(Math.random() * 1e9);
    callback(
      null,
      file.fieldname +
        "-" +
        uniqueSuffix +
        "." +
        file.originalname.split(".").pop()
    );
  },
});

//upload function
export const uploadImage = multer({ storage: storage });

apiRoute.use(uploadImage.single('file'));

apiRoute.post((req, res) => {

  const { originalname, filename, path } = req.file;

  res.status(200).json({ message: 'Image uploaded successfully!', filename });
});

    

 