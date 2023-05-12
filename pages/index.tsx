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

      <div className="fixed left-0 top-0 w-full h-full z-10 from-stone-800 bg-gradient-to-t"></div>

      <header className="fixed top-0 w-full z-30 flex justify-between items-center h-[70px] px-10">
        <span className="uppercase text-lg font-medium">Portfolio</span>
        <Link
          href="#"
          className="rounded-3xl bg-white text-stone-700 px-3 py-2 hover:bg-opacity-90"
        >
          <button>Get in touch</button>
        </Link>
      </header>

      <main className="relative pt-[110px] z-20">
        <div className="flex flex-col items-center h-full">
          <Tab.Group>
            <Tab.List className="flex items center gap-24 font-thin ">
              {tabs.map((tab) => (
                <Tab key={tab.key} className="p-2">
                  {({ selected }) => (
                    <span
                      className={classNames(
                        "uppercase text-lg ",
                        selected ? "text-white" : "text-stone-600"
                      )}
                    >
                      {tab.display}
                    </span>
                  )}
                </Tab>
              ))}
            </Tab.List>
            <Tab.Panels className=" h-full  max-w-[900px] w-full p-2 sm:p-4 my-6">
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
                      className="my-9"
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
                  dynamicEl={[
                    {
                      src: "/platidiez.png",
                      thumb: "/platidiez.png",
                    },
                    {
                      src: "/platinueve.png",
                      thumb: "/platinueve.png",
                    },
                    {
                      src: "/platiocho.png",
                      thumb: "/platiocho.png",
                    },
                    {
                      src: "/platisiete.png",
                      thumb: "/platisiete.png",
                    },
                    {
                      src: "/platiseis.png",
                      thumb: "/platiseis.png",
                    },
                    {
                      src: "/platicinco.png",
                      thumb: "/platicinco.png"
                    },
                    {
                      src: "/platicuatro.png",
                      thumb: "/platicuatro.png",
                    },
                    {
                      src: "/platitres.png",
                      thumb: "/platitres.png",
                    },
                    {
                      src: "/platidos.png",
                      thumb: "/platidos.png",
                    },
                    {
                      src: "/platiuno.png",
                      thumb: "/platiuno.png",
                    },  
                    {
                      src: "/honguito.png",
                      thumb: "/honguito.png",
                    }, 
                    {
                      src: "/honguitouno.png",
                      thumb: "/honguitouno.png",
                    },
                    {
                      src: "/honguitodos.png",
                      thumb: "/honguitodos.png",
                    },
                    {
                      src: "/honguitotres.png",
                      thumb: "/honguitotres.png",
                    },
                    {
                      src: "/honguitocuatro.png",
                      thumb: "/honguitocuatro.png",
                    },
                    {
                      src: "/honguitocinco.png",
                      thumb: "/honguitocinco.png",
                    },
                    {
                      src: "/honguitoseis.png",
                      thumb: "/honguitoseis.png",
                    },
                    {
                      src: "/honguitosiete.png",
                      thumb: "/honguitosiete.png",
                    },
                  ]}

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
