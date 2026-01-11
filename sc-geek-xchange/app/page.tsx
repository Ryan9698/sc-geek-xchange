import Image from "next/image";
import Header from "@/components/layout/Header";
import Hero from "@/components/sections/Hero";

export default function Home() {
  return (
    <section className="">
      <main>
        <header>
          <h1 className="text-3xl font-bold text-center p-4">
            Welcome to the Space Coast Geek XChange!
          </h1>
          <p className="p-4 text-center mx-auto">
            We are a local business that offers pop culture collectibles for
            both the budding enthusiast and serious collectors. We offer
            memorabilia from somme of the most influential and iconic
            franchises. Whether you are looking for a Darth Vader lightsaber or
            a niche model; we have you covered.
          </p>
        </header>
        <Header />
        <Hero />
      </main>
    </section>
  );
}
