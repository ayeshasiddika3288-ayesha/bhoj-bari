import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Card from "./components/Card";
import Footer from "./components/Footer";

const foods = [
  { id: 1, image: "/biryani.jpg", title: "Kacchi Biryani", price: 350 },
  { id: 2, image: "/ilish.jpg", title: "Ilish Bhapa", price: 450 },
  { id: 3, image: "/khichuri.jpg", title: "Khichuri", price: 200 },
  { id: 4, image: "/samosa.jpg", title: "Samosa", price: 30 },
  { id: 5, image: "/mishti-doi.jpg", title: "Mishti Doi", price: 80 },
  { id: 6, image: "/cha.jpg", title: "Cha", price: 20 },
];

function App() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      <Hero />
      <section id="menu" className="px-10 py-16 text-center">
        <h2 className="text-3xl font-bold">Our Menu</h2>
        <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {foods.map((food) => (
            <Card
              key={food.id}
              image={food.image}
              title={food.title}
              price={food.price}
            />
          ))}
        </div>
      </section>
      <Footer />
    </div>
  );
}

export default App;