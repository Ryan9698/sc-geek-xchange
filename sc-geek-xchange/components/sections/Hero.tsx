// components/sections/Hero.tsx
export default function Hero() {
  return (
    <section className="py-24 ">
      <div className="mx-auto max-w-4xl grid gap-12 md:grid-cols-2 items-center text-center md:text-left">
        {/* Left */}
        <h1 className="font-heading leading-tight">
          <span className="block text-4xl sm:text-5xl md:text-6xl">Space</span>
          <span className="block text-4xl sm:text-5xl md:text-6xl md:ml-12">
            Coast
          </span>
          <span className="block text-4xl sm:text-5xl md:text-6xl md:ml-24 text-accent">
            Geek
          </span>
          <span className="block text-4xl md:text-6xl md:ml-32 text-accent">
            XChange
          </span>
        </h1>
        {/* Right */}
        <div className="text-center">
          <p className="font-heading text-2xl text-accent mb-4">
            Buy · Sell · Trade
          </p>
          <p className="text-lg text-muted">
            Comics, figures, and fandom treasures for true geeks.
          </p>
        </div>
      </div>
    </section>
  );
}
