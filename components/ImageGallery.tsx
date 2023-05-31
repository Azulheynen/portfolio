import { Tab } from "@headlessui/react";
import Masonry from "react-masonry-css";
import classNames from "classnames";
import LightGalleryComponent from "lightgallery/react";
import "lightgallery/css/lightgallery.css";
import "lightgallery/css/lg-zoom.css";
import "lightgallery/css/lg-thumbnail.css";
import lgThumbnail from "lightgallery/plugins/thumbnail";
import lgZoom from "lightgallery/plugins/zoom";
import type { LightGallery } from "lightgallery/lightgallery";
import { useRef } from "react";
import Image from "next/image";
import { GetServerSideProps } from "next";
import fs from "fs"
import path from "path";


interface Props {
  dir: string[]
}

const images = require.context("../public/images", true);
const imageList = images.keys().map((image) => images(image));

const tabs = [
  {
    key: "all",
    display: "All",
  },
  {
    key: "digital",
    display: "Digital",
  },

  {
    key: "more",
    display: "More",
  },
];

export default function ImageGallery() {
  const lightboxRef = useRef<LightGallery | null>(null);

  return (
    <Tab.Group>
      <Tab.List className="flex items center gap-24 shadow-3xl text-white  from-blue-900 via-fuchsia-950 to-indigo-950 focus:ring-4 focus:outline-none focus:ring-purple-400 dark:focus:ring-purple-800  shadow-indigo-200/50 dark:shadow-xl dark:shadow-purple-200/80 font-medium rounded-lg text-lg px-6 py-2.5 text-center mr-2 mb-2 ">
        {tabs.map((tab) => (
          <Tab
            id="tab"
            key={tab.key}
            className="p-2 relative before:content-[''] before:absolute before:block before:w-full before:h-[1px] 
    before:bottom-0 before:left-0 before:bg-white 
    before:hover:scale-x-100 before:scale-x-0 before:origin-top-left
    before:transition before:ease-in-out before:duration-300 transition ease-in-out delay-150  hover:tracking-[6px]  hover:transition-all hover:-translate-y-1 hover:scale-110 hover:bg-transparent duration-200 
    
    "
          >
            {({ selected }) => (
              <span
                className={classNames(
                  "uppercase text-lg ",
                  selected ? "text-white" : "text-stone-900"
                )}
              >
                {tab.display}
              </span>
            )}
          </Tab>
        ))}
      </Tab.List>
      <Tab.Panels className=" h-full  max-w-[900px] w-full p-2 sm:p-4 my-6 ">
        <Tab.Panel>
          <Masonry breakpointCols={2} className="flex gap-4 z-40" columnClassName="" >
            {imageList.map((image, idx) => (
              <Image
                key={idx}
                src={image.default}
                alt={`image-${idx}`}
                className="my-9 hover:opacity-80 cursor-pointer"
                placeholder="blur"
                onClick={() => {
                  lightboxRef.current?.openGallery(idx);
                }}
              />
            ))}
          </Masonry>

          <LightGalleryComponent
            onInit={(ref) => {
              if (ref) {
                lightboxRef.current = ref.instance;
              }
            }}
            speed={500}
            plugins={[lgThumbnail, lgZoom]}
            dynamic
            dynamicEl={imageList.map((image) => ({
              src: image.default.src,
              thumb: image.default.src,
            }))}
          ></LightGalleryComponent>
        </Tab.Panel>{" "}
        <Tab.Panel>Digital</Tab.Panel>
        <Tab.Panel>More </Tab.Panel>
      </Tab.Panels>
    </Tab.Group>
  );
}

