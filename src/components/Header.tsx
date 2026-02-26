import "./Header.css";

export default function Header() {
  return (
    <header className="header">
      <nav className="container mx-auto px-6 py-4">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <div className="flex items-center gap-3">
            <img src="/images/logo.jpeg" alt="Maitê Tikami Logo" className="h-10 w-auto" width={100} height={100} />
            <div className="h-8 w-px bg-[#C4A98A]"></div>
            <div>
              <span className="text-[#C4A98A] text-xl tracking-wide logo-text">
                Maitê Tikami
              </span>
            </div>
          </div>

          {/* Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <a href="#sobre" className="text-[#4A3728] hover:text-[#8B6F5C] transition text-sm tracking-wide uppercase">
              Sobre
            </a>
            <a href="#servicos" className="text-[#4A3728] hover:text-[#8B6F5C] transition text-sm tracking-wide uppercase">
              Serviços
            </a>
            <a href="#tratamentos" className="text-[#4A3728] hover:text-[#8B6F5C] transition text-sm tracking-wide uppercase">
              Tratamentos
            </a>
            <a href="#depoimentos" className="text-[#4A3728] hover:text-[#8B6F5C] transition text-sm tracking-wide uppercase">
              Depoimentos
            </a>
            <a href="#contato" className="text-[#4A3728] hover:text-[#8B6F5C] transition text-sm tracking-wide uppercase">
              Contato
            </a>
          </div>

          {/* Right side info */}
          <div className="hidden lg:flex items-center text-right">
            <span className="text-[#8B6F5C] text-xs tracking-wider uppercase">
              Odontologia Estética e<br />Implantes | Dentista
            </span>
          </div>
        </div>
      </nav>
    </header>
  );
}
