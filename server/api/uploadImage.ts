import express from 'express';
import multer from 'multer';
import { NextApiRequest, NextApiResponse } from 'next';


const router = express.Router();

const upload = multer({
  dest: 'public/images', // Specify the destination directory to store the uploaded images
  limits: {
    fileSize: 2 * 1024 * 1024, // Set the maximum file size limit (here, 2MB)
  },
});

router.post('/upload', upload.single('image'), (req, res) => {
  // Handle the uploaded image here
  res.status(200).json({ message: 'Image uploaded successfully!' });
});
 export default router

// export default upload.single('image')(req: NextApiRequest, res: NextApiResponse) => {
//   // Handle the image upload
// };

