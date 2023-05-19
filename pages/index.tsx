import Head from "next/head";
import Link from "next/link";
import bgImage from "../public/images/background.jpeg";
import Image from "next/image";
import { HeartIcon } from '@heroicons/react/24/solid'
import ImageGallery from "@/components/ImageGallery";


export default function Home() {
 
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

      <div className="fixed left-0 top-0 w-full h-full z-10  from-stone-800 bg-gradient-to-t  from-stone-960 "></div>

      <header className="fixed top-0 w-full z-30 flex justify-between items-center h-[70px] px-10">
        <span className="uppercase text-lg font-medium hover:tracking-wide">Portfolio</span>
        <Link
          href="#"
          className="relative inline-flex items-center justify-center p-0.5 mb-2 mr-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-pink-900 to-purple-400 group-hover:from-pink-300 group-hover:to-pink-300 dark:text-white dark:hover:text-purple-800 focus:ring-4 focus:outline-none focus:ring-pink-800 dark:focus:ring-lime-800 shadow-lg shadow-purple-300/50 "
        >
          
          <button className=" px-5 py-2.5 transition-all ease-in duration-75  group-hover:bg-opacity-0 shadow-lg shadow-purple-500/50 " >
          <HeartIcon className="h-6 w-20 text-white-500 items-center " />
             </button>
        </Link>
      </header>

      <main className="relative pt-[110px] z-20">
        <div className="flex flex-col items-center h-full">
         
         <ImageGallery />
        
        </div>
      </main>
      <footer className=" relative h-[80px] flex justicy-center items-center uppercase text-lg font-medium z-20">
        <p>IA images generated Portfolio</p>
      </footer>
    </div>
  );
}
