export default function Footer() {
  return (
    <footer className="bg-[#4A3728] text-white py-12">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="md:col-span-2">
            <div className="flex items-center gap-3 mb-4">
              <span className="text-[#C4A98A] text-2xl font-light tracking-widest">M</span>
              <div className="h-8 w-px bg-[#8B6F5C]"></div>
              <span className="text-white text-xl tracking-wide" style={{ fontFamily: "'Cormorant Garamond', serif" }}>
                Maitê Tikami
              </span>
            </div>
            <p className="text-[#C4A98A] mb-4">
              Odontologia Estética e Implantes
            </p>
            <p className="text-gray-400 text-sm leading-relaxed max-w-md">
              Transformando sorrisos com excelência, tecnologia e cuidado personalizado.
              Sua saúde e seu sorriso são a minha missão.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg mb-4 text-white" style={{ fontFamily: "'Cormorant Garamond', serif" }}>
              Links Rápidos
            </h3>
            <ul className="space-y-2">
              <li><a href="#sobre" className="text-gray-400 hover:text-[#C4A98A] transition text-sm">Sobre</a></li>
              <li><a href="#servicos" className="text-gray-400 hover:text-[#C4A98A] transition text-sm">Serviços</a></li>
              <li><a href="#depoimentos" className="text-gray-400 hover:text-[#C4A98A] transition text-sm">Depoimentos</a></li>
              <li><a href="#contato" className="text-gray-400 hover:text-[#C4A98A] transition text-sm">Contato</a></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-lg mb-4 text-white" style={{ fontFamily: "'Cormorant Garamond', serif" }}>
              Horário de Atendimento
            </h3>
            <ul className="space-y-2 text-gray-400 text-sm">
              <li>Segunda a Sexta: 9h - 18h</li>
              <li>Sábado: Mediante agendamento</li>
            </ul>
            <div className="flex gap-4 mt-6">
              <a href="#" className="w-10 h-10 bg-[#5C4A3D] rounded-full flex items-center justify-center hover:bg-[#C4A98A] transition">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                </svg>
              </a>
              <a href="#" className="w-10 h-10 bg-[#5C4A3D] rounded-full flex items-center justify-center hover:bg-[#C4A98A] transition">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" />
                </svg>
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-[#5C4A3D] mt-10 pt-8 text-center text-gray-500 text-sm">
          <p>&copy; {new Date().getFullYear()} Maitê Tikami - Odontologia Estética e Implantes. Todos os direitos reservados.</p>
        </div>
      </div>
    </footer>
  );
}
