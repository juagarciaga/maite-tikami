export default function Header() {
  return (
    <header className="bg-white shadow-md">
      <nav className="container mx-auto px-4 py-4">
        <div className="flex justify-between items-center">
          <div className="text-2xl font-bold text-blue-600">
            Maitê Tikami
          </div>
          <div className="hidden md:flex space-x-6">
            <a href="#services" className="text-gray-700 hover:text-blue-600 transition">
              Serviços
            </a>
            <a href="#about" className="text-gray-700 hover:text-blue-600 transition">
              Sobre
            </a>
            <a href="#contact" className="text-gray-700 hover:text-blue-600 transition">
              Contato
            </a>
          </div>
        </div>
      </nav>
    </header>
  );
}
