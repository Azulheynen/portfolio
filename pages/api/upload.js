var bodyParser = require('body-parser')

export default function UploadRoute(req, res) {
  const { file } = bodyParser.json()

  res.status(200).json({ message: "image upload successfully" });
}
