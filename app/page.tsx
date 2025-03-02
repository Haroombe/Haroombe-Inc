import Image from "next/image";
import { Button } from "@/components/ui/button"
import Link from "next/link";
import { ModeToggle } from "@/components/ui/dark-mode-toggle"
export default function Home() {
  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <header>
        <ModeToggle></ModeToggle>
      </header>
      <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start">

       
      </main>
      <footer className="row-start-3 flex gap-6 flex-wrap items-center justify-center">
  
       
      </footer>
    </div>
  );
}
