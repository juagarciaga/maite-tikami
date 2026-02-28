import { handleClickToWhatsApp } from "./WhatsAppButton";

export function HeroSection() {
  return (
    <section id="inicio" className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-[#F8F4F0] to-[#F5F0EB] pt-20">
      <div className="container mx-auto px-4 py-20">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl md:text-6xl mb-6 text-[#3D3832]">
            Odontologia com planejamento, tecnologia e planejamento individualizado para você
          </h1>
          <p className="text-lg md:text-xl text-[#8B7968] mb-8">
            Cuidamos do seu sorriso com excelência e dedicação
          </p>
          <button
            type="button"
            onClick={handleClickToWhatsApp}
            className="inline-flex items-center justify-center rounded-full bg-[#A89484] px-8 py-4 text-lg font-medium text-white shadow-lg transition-colors duration-300 hover:bg-[#8B7968] focus:outline-none focus:ring-2 focus:ring-[#A89484] focus:ring-offset-2 active:bg-[#7a6b5d]"
          >
            Agende sua consulta
          </button>
        </div>
      </div>
    </section>
  );
}