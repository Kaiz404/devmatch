'use client';
import Image from "next/image";
import CreateWalletModal from "./components/wallet";
import { PetraWallet } from "petra-plugin-wallet-adapter";
import { AptosWalletAdapterProvider } from "@aptos-labs/wallet-adapter-react";
import App from "./components/App";
import ProjectCard from "./components/ProjectCard";
import SocialLinks from "./components/SocialLinks";

export default function Home() {
  const wallets = [new PetraWallet()];
  const handleSubmit = () => {}
  const closeModal = () => {}

  return (
    <main className="flex min-h-screen flex-col items-center justify-between bg-white">
        {/* <p className="fixed left-0 top-0 flex w-full justify-center border-b border-gray-500 bg-gradient-to-b pb-6 pt-8 backdrop-blur-2xl dark:border-neutral-800 dark:bg-zinc-800/30 dark:from-inherit lg:static lg:w-auto  lg:rounded-xl lg:border lg:bg-gray-200 lg:p-4 lg:dark:bg-zinc-800/30">
          Get started by editing&nbsp;
          <code className="font-mono font-bold">app/page.tsx</code>
        </p>
        <CreateWalletModal onSubmit={handleSubmit} onClose={closeModal} /> */}
        <AptosWalletAdapterProvider plugins={wallets} autoConnect={true}>
          <App />
        </AptosWalletAdapterProvider>

        {/* <div className="bg-white w-full h-auto border-stone-500">
          <div className="bg-blue-300 w-full flex-col justify-center">
            <div>
              <div className="text-center my-4 flex">
                <div className="">
                  <Image 
                    src="/acousm120.png" width={128} height={128}  alt="test" 
                    className="h-32 w-32 rounded-full border-4 border-white m-auto my-4"/>
                </div>
                    
                <div className="py-2">
                    <h3 className="font-bold text-2xl mb-1">Kai Zhe</h3>
                    <div className="font-italic inline-flex items-center">
                        @Kaiz404
                    </div>
                </div>
              </div>
            </div>
            <div className="mt-2 pb-5 w-1/5 flex justify-center">
              <SocialLinks />
            </div>
          </div>
        </div>
        <div className="grid bg-blue-600 w-full grid-cols-3 space-evenly">
          <ProjectCard />
          <ProjectCard />
          <ProjectCard />
          <ProjectCard />
          <ProjectCard />
          <ProjectCard />
          <ProjectCard />
          <ProjectCard />
          <ProjectCard />
          <ProjectCard />
          <ProjectCard />
          <ProjectCard />
          <ProjectCard />
          <ProjectCard />
          <ProjectCard />
        </div> */}
    </main>
  );
}