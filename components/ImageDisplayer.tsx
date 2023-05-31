import { GetServerSideProps, NextPage } from "next";
import { useState } from "react";
import axios from "axios";
import fs from "fs/promises";
import path from "path";
import Link from "next/link";
import { useRef } from "react";

interface Props {
  dirs: string[];
}

interface ImageProps {
  dirs: string[];
}

const ImageDisplayer: NextPage<Props> = ({ dirs }) => {
  const [uploading, setUploading] = useState(false);
  const [selectedImage, setSelectedImage] = useState("");
  const [selectedFile, setSelectedFile] = useState<File>();
  const imageInputRef = useRef(null);

  const handleUpload = async () => {
    setUploading(true);
    try {
      if (!selectedFile) return;
      const formData = new FormData();
      formData.append("image", selectedFile);
      const { data } = await axios.post("./api/images", formData);
      console.log(data);
    } catch (error: any) {
      console.log(error.response?.data);
    }
    imageInputRef.current.value = "";
    setUploading(false);
    setSelectedImage("");
  };

  return (
    <div className="relative items-stretch  grid grid-cols-3 gap-1  place-items-center max-w-4xl mx-auto p-20 space-y-6 place-content-center">
      <label
        for="dropzone-file"
        className="col-start-1 col-span-3 items-center self-center w-full border-2 border-gray-300 border-dashed rounded-lg cursor-pointer bg-gray-50 dark:hover:bg-bray-800 dark:bg-gray-700 hover:bg-gray-100 dark:border-gray-600 dark:hover:border-gray-500 dark:hover:bg-gray-600"
      >
        <div className="flex-col flex  p-10 top-3">
          <svg
            aria-hidden="true"
            className="w-10 h-10 mb-3 text-gray-400 self-center "
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12"
            ></path>
          </svg>
          <p className="mb-2 text-sm text-gray-500 dark:text-gray-400 self-center">
            {selectedImage ? (
              <img src={selectedImage} alt="" />
            ) : (
              <span className="font-semibold">Click to upload</span>
            )}
            or drag and drop
          </p>
          <p className="text-xs text-gray-500 dark:text-gray-400 self-center">
            SVG, PNG, JPG or GIF (MAX. 800x400px)
          </p>
        </div>
        <input
          id="dropzone-file"
          name="file"
          type="file"
          hidden
          ref={imageInputRef}
          onChange={({ target }) => {
            if (target.files) {
              const file = target.files[0];
              setSelectedImage(URL.createObjectURL(file));
              setSelectedFile(file);
            }
          }}
        />
      </label>
      <button
        onClick={handleUpload}
        disabled={uploading}
        style={{ opacity: uploading ? ".5" : "1" }}
        className="bg-red-600 p-3 w-32 text-center col-start-2 col-span-1 place-self-center rounded text-white"
      >
        {uploading ? "Uploading.." : "Upload"}
      </button>
      <div className="mt-20 flex flex-col space-y-3">
        {dirs?.map((item) => (
          <Link key={item} href={"../public/images" + item}>
            <a className="text-blue-500 hover:underline">{item}</a>
          </Link>
        ))}
      </div>
    </div>
  );
};
export default ImageDisplayer;
