import Head from "next/head";
import Link from "next/link";
import { Tab } from "@headlessui/react";
import Masonry from "react-masonry-css";
import classNames from "classnames";
import Image from "next/image";
import bgImage from "../public/background.jpeg";
import platiuno from "../public/platiuno.jpg";
import platidos from "../public/platidos.png";
import platitres from "../public/platitres.png";
import platicuatro from "../public/platicuatro.png";
import honguito from "../public/honguito.png";
import honguitouno from "../public/honguitouno.png";
import honguitodos from "../public/honguitodos.png";
import platicinco from "../public/platicinco.png";
import platiseis from "../public/platiseis.png";
import platisiete from "../public/platisiete.png";
import platiocho from "../public/platiocho.png";
import platinueve from "../public/platinueve.png";
import platidiez from "../public/platidiez.png";
import honguitotres from "../public/honguitotres.png";
import honguitocuatro from "../public/honguitocuatro.png";
import honguitocinco from "../public/honguitocinco.png";
import honguitoseis from "../public/honguitoseis.png";
import honguitosiete from "../public/honguitosiete.png";
import LightGalleryComponent from "lightgallery/react";
import "lightgallery/css/lightgallery.css";
import "lightgallery/css/lg-zoom.css";
import "lightgallery/css/lg-thumbnail.css";
import lgThumbnail from "lightgallery/plugins/thumbnail";
import lgZoom from "lightgallery/plugins/zoom";
import { useRef } from "react";
import type { LightGallery } from "lightgallery/lightgallery";
import { HeartIcon } from '@heroicons/react/24/solid'




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

const images = [
  platidiez,
  honguitotres,
  honguitocuatro,
  honguitocinco,
  platiuno,
  platidos,
  platinueve,
  platitres,
  platicuatro,
  honguito,
  honguitouno,
  honguitodos,
  platicinco,
  platiseis,
  platisiete,
  platiocho,

  honguitoseis,
  honguitosiete,
];

export default function Home() {
  const lightboxRef = useRef<LightGallery | null>(null);

  return (
    <div className=" h-full overflow-auto  ">
      <Head>
        <title>my portfolio </title>
        <meta></meta>
        <link></link>
      </Head>

      <Image
        className="fixed left-0 top-0 z-0 bg-cover w-full"
        src={bgImage}
        alt="placeholder"
        placeholder="blur"
      />

      <div className="fixed left-0 top-0 w-full h-full z-10  from-stone-800 bg-gradient-to-t  from-stone-960 bg-gradient-to-b"></div>

      <header className="fixed top-0 w-full z-30 flex justify-between items-center h-[70px] px-10">
        <span className="uppercase text-lg font-medium hover:tracking-wide">Portfolio</span>
        <Link
          href="#"
          className=" overflow-hidden text-sm font-medium rounded-3xl group bg-gradient-to-br from-purple-90 to-indigo-950 group-hover:from-purple-900 group-hover:to-blue-900 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-blue-900 dark:focus:ring-blue-900"
        >
          
          <button className=" px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-purple-900 group-hover:bg-opacity-0" >
          <HeartIcon className="h-6 w-20 text-white-500 items-center " />
             </button>
        </Link>
      </header>

      <main className="relative pt-[110px] z-20">
        <div className="flex flex-col items-center h-full">
          <Tab.Group >
            <Tab.List className="flex items center gap-24 shadow-3xl text-white  from-blue-900 via-fuchsia-950 to-indigo-950 focus:ring-4 focus:outline-none focus:ring-purple-300 dark:focus:ring-purple-800  shadow-indigo-200/50 dark:shadow-xl dark:shadow-purple-200/80 font-medium rounded-lg text-sm px-6 py-2.5 text-center mr-2 mb-2 ">
              {tabs.map((tab) => (
                <Tab id="tab" key={tab.key} className="p-2 relative before:content-[''] before:absolute before:block before:w-full before:h-[2px] 
                before:bottom-0 before:left-0 before:bg-black
                before:hover:scale-x-100 before:scale-x-0 before:origin-top-left
                before:transition before:ease-in-out before:duration-300 transition ease-in-out delay-150  hover:tracking-[6px]  hover:transition-all hover:-translate-y-1 hover:scale-110 hover:bg-transparent duration-200 
                
                ">
                  {({ selected }) => (
                    <span
                      className={classNames(
                        "uppercase text-lg ",
                        selected ? "text-white" : "text-stone-500"
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
                <Masonry
                  breakpointCols={2}
                  className="flex gap-4"
                  columnClassName=""
                >
                  {images.map((image, idx) => (
                    <Image
                      key={image.src}
                      src={image}
                      alt="placeholder"
                      className="my-9 hover:opacity-80 cursor-pointer" 
                      placeholder="blur"
                      onClick={() => {
                        lightboxRef.current?.openGallery(idx)
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
                  dynamicEl={ images.map((image) => ({
                    src: image.src,
                    thumb:image.src
                  }))}

                ></LightGalleryComponent>
              </Tab.Panel>
              <Tab.Panel>Digital</Tab.Panel>
              <Tab.Panel>More </Tab.Panel>
            </Tab.Panels>
          </Tab.Group>
        </div>
      </main>
      <footer className=" relative h-[80px] flex justicy-center items-center uppercase text-lg font-medium z-20">
        <p>IA images generated Portfolio</p>
      </footer>
    </div>
  );
}
