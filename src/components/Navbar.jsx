function Navbar() {
  return (
    <nav className="flex items-center justify-between bg-green-800 px-10 py-4 text-white">
      <div className="flex items-center gap-3 text-2xl font-bold">
        <img src="/logo.svg" alt="Bhoj Bari" className="h-10 w-10 rounded-full object-cover" />
        <span>Bhoj Bari</span>
      </div>
      <ul className="flex gap-6">
        <li><a href="#home" className="hover:text-orange-400">Home</a></li>
        <li><a href="#menu" className="hover:text-orange-400">Menu</a></li>
        <li><a href="#contact" className="hover:text-orange-400">Contact</a></li>
      </ul>
    </nav>
  );
}

export default Navbar;