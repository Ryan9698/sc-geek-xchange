import Image from "next/image";
import Header from "@/components/layout/Header";
import Hero from "@/components/sections/Hero";

export default function Home() {
  return (
    <section className="">
      <main>
        <header className="text-end"></header>
        {/* <Header /> */}
        <Hero />
      </main>
    </section>
  );
}
