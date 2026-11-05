function Hero() {
  return (
    <section
      id="home"
      className="bg-cover bg-center px-5 py-32 text-center text-white"
      style={{
        backgroundImage:
          "linear-gradient(rgba(0,0,0,0.5), rgba(0,0,0,0.5)), url('/hero.jpg')",
      }}
    >
      <h1 className="mb-3 text-5xl font-bold">Welcome to Bhoj Bari</h1>
      <p className="mb-6 text-lg">Ghorer moto swadu, deshi khabar ekhane.</p>
      <button className="rounded-md bg-orange-500 px-6 py-2 font-semibold hover:bg-orange-600">
        Reserve a Table
      </button>
    </section>
  );
}

export default Hero;