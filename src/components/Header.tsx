import Image from "next/image";

export function Header() {
  return (
    <header className="fixed top-0 left-0 right-0 bg-white shadow-md z-50">
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        <div className="flex items-center">
          <Image
            src="/images/logo1.png"
            alt="Dra. Maitê Tikami"
            width={400}
            height={100}
            className="w-full h-[100px] object-contain rounded-lg"
          />
        </div>
        <nav className="hidden md:flex gap-8">
          <a href="#inicio" className="text-[#8B7968] hover:text-[#A89484] transition-colors">
            Início
          </a>
          <a href="#quem-somos" className="text-[#8B7968] hover:text-[#A89484] transition-colors">
            Quem Somos
          </a>
          <a href="#servicos" className="text-[#8B7968] hover:text-[#A89484] transition-colors">
            Serviços
          </a>
          <a href="#contato" className="text-[#8B7968] hover:text-[#A89484] transition-colors">
            Contato
          </a>
        </nav>
      </div>
    </header>
  );
}