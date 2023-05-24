import { useState } from "react";

const PostImage = () => {
  const [file, setFile] = useState<File | null>(null);
  const [post, setPost] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    const data = new FormData();
    console.log(e.target.files);
    const imagedata = e.target.files?.[0];
    data.append("image", imagedata);
    const result = await fetch("/api/upload", { method: "POST", body: data });
    console.log({ result });
  };

  return (
    <form method="post" encType="multipart/form-data" onSubmit={handleSubmit}>
      <input
        type="file"
        accept="file"
        name="file"
        formEncType="multipart/form-data"
        onChange={(e) => setFile(e.target.files?.[0] || null)}
      />
      <button type="submit" onClick={handleSubmit}>
        Upload
      </button>
    </form>
  );
};

export default PostImage;

export const config = {
  api: { bodyParser: false },
};
