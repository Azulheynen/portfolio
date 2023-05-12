import Head from "next/head";
import Link from "next/link";
import { Tab } from "@headlessui/react";
import Masonry from "react-masonry-css"



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

export default function Home() {
  return (
    <div className=" h-full bg-[url('/fotodos.avif')] bg-cover overflow-auto">
      <Head>
        <title>my portfolio </title>
        <meta></meta>
        <link></link>
      </Head>
      <header className="bg-stone-900 fixed top-0 w-full z-10 flex justify-between items-center h-[70px] px-6">
       
        <div >Portfolio</div>
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
            <Tab.List className="flex items center gap-24">

            {tabs.map(tab => (
                <Tab key={tab.key} className="p-2">
                {({ selected }) => (
                  <span className={selected ? 'text-white' : 'text-stone-600'}>
                    {tab.display}
                  </span>
                )}
              </Tab>

            ))}
            </Tab.List>
            <Tab.Panels  className=" h-full  max-w-[900px] w-full p-2 sm:p-4 my-6">
              <Tab.Panel >
                <Masonry breakpointCols={2}  className="flex gap-5" columnClassName="">
                  <img src="/platiuno.jpg" alt="plati-1" className="my-4" />
                  <img src="/platidos.png" alt="plati-2"  className="my-4"/>
                  <img src="/platitres.png" alt="plati-3"  className="my-4"/>
                  <img src="/platicuatro.png" alt="plati-4" className="my-4" />
                  <img src="/honguito.png" alt="honguito" className="my-4" />
                  <img src="/honguitouno.png" alt="honguito-uno" className="my-4" />
                  <img src="/honguitodos.png" alt="honguito-dos" className="my-4" />
                
                </Masonry>
              </Tab.Panel>
              <Tab.Panel>Digital</Tab.Panel>
              <Tab.Panel>More </Tab.Panel>
            </Tab.Panels>
          </Tab.Group>
        </div>
      </main>
      <footer className="h-[60px] flex justicy-center items-center">
        <p>IA images generated Portfolio</p>
      </footer>
    </div>
  );
}
