export default function Events() {
  const year = new Date().getFullYear();

  return (
    <main>
      <header>
        <h1 className="text-3xl font-bold text-center p-4">Events</h1>
        <p className="p-4 text-center mx-auto">
          We love engaging with the community and join anumber of events
          throughout the Space Coast. Here you can find some of the events we
          plan to be a part of in {year}.
        </p>
      </header>

      {/* List of events and perhaps a map API if it isnt too costly to do. */}
    </main>
  );
}
