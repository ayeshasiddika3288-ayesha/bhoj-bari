function Card({ image, title, price }) {
  return (
    <div className="rounded-xl bg-white p-6 text-center shadow-md transition hover:-translate-y-2">
      <img
        src={image}
        alt={title}
        className="mb-3 h-40 w-full rounded-lg object-cover"
      />
      <h3 className="text-xl font-semibold">{title}</h3>
      <p className="my-2 text-gray-600">৳ {price}</p>
      <button className="rounded-md bg-orange-500 px-5 py-2 text-white hover:bg-orange-600">
        Add to Cart
      </button>
    </div>
  );
}

export default Card;