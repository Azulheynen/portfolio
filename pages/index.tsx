import Head from "next/head";
import Link from "next/link";
import { Tab } from "@headlessui/react";
import Masonry from "react-masonry-css"
import classNames from "classnames";
import Image from "next/image";


import platiuno from '../public/platiuno.jpg'
import platidos from '../public/platidos.png'
import platitres from '../public/platitres.png'
import platicuatro from '../public/platicuatro.png'
import honguito from '../public/honguito.png'
import honguitouno from '../public/honguitouno.png'
import honguitodos from '../public/honguitodos.png'


const tabs = [
  {
    key:'all',
    display: 'All'
  },
  {
    key:'digital',
    display:'Digital'
  },

  {
    key:'more',
    display:'More' 
  },
]

const images = [

]


export default function Home() {
  return (
    <div className=" h-full bg-[url('/fotodos.avif')] bg-cover overflow-auto">
      <Head>
        <title>my portfolio </title>
        <meta></meta>
        <link></link>
      </Head>
      <header className="bg-stone-900 fixed top-0 w-full z-10 flex justify-between items-center h-[70px] px-10">
       
        <span className="uppercase text-lg font-medium">Portfolio</span>
        <Link
          href="#"
          className="rounded-3xl bg-white text-stone-700 px-3 py-2 hover:bg-opacity-90"
        >
          <button>Get in touch</button>
        </Link>
      </header>

      <main className="pt-[110px]">
        <div className="flex flex-col items-center h-full">
          <Tab.Group >
            <Tab.List className="flex items center gap-24 font-thin ">

            {tabs.map(tab => (
                <Tab key={tab.key} className="p-2">
                {({ selected }) => (
                  <span className={ classNames("uppercase text-lg ", selected ? 'text-white' : 'text-stone-600')}>
                    {tab.display}
                  </span>
                )}
              </Tab>

            ))}
            </Tab.List>
            <Tab.Panels  className=" h-full  max-w-[900px] w-full p-2 sm:p-4 my-6">
              <Tab.Panel >
                <Masonry breakpointCols={2}  className="flex gap-4" columnClassName="">
                  
                <Image  src={platiuno} alt= "placeholder" className="my-4" />
                <Image  src={platidos} alt= "placeholder" className="my-4" />
                <Image  src={platitres} alt= "placeholder" className="my-4" />
                <Image  src={platicuatro} alt= "placeholder" className="my-4" />
                <Image  src={honguito} alt= "placeholder" className="my-4" />
                <Image  src={honguitouno} alt= "placeholder" className="my-4" />
                <Image  src={honguitodos} alt= "placeholder" className="my-4" />

                </Masonry>
              </Tab.Panel>
              <Tab.Panel>Digital</Tab.Panel>
              <Tab.Panel>More </Tab.Panel>
            </Tab.Panels>
          </Tab.Group>
        </div>
      </main>
      <footer className="h-[90px] flex justicy-center items-center uppercase text-lg font-medium ">
        <p>IA images generated Portfolio</p>
      </footer>
    </div>
  );
}
