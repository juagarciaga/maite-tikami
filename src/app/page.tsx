import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ImageCarousel from "@/components/ImageCarousel";

export default function Home() {
  const carouselImages = [
    {
      src: "https://images.unsplash.com/photo-1606811841689-23db3c56a3f0?w=1200&h=400&fit=crop",
      alt: "Clínica odontológica moderna",
      title: "Clínica Moderna"
    },
    {
      src: "https://images.unsplash.com/photo-1631217315210-f00a1dd20f9f?w=1200&h=400&fit=crop",
      alt: "Consulta odontológica com equipamentos avançados",
      title: "Tecnologia de Ponta"
    },
    {
      src: "https://images.unsplash.com/photo-1576091160550-112173f7f869?w=1200&h=400&fit=crop",
      alt: "Tratamento de implantes dentários",
      title: "Implantes Dentários"
    },
    {
      src: "https://images.unsplash.com/photo-1683014090968-b6f0c0b65be0?w=1200&h=400&fit=crop",
      alt: "Resultado de tratamento estético dental",
      title: "Sorrisos Transformados"
    }
  ];

  return (
    <div className="min-h-screen flex flex-col bg-white">
      <Header />

      <main className="flex-grow">
        {/* Hero Section */}
        <section className="bg-gradient-to-r from-[#E8DDD4] via-[#D4C4B5] to-[#C4A98A] py-16 md:py-24">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-2">
              {/* Left Content */}
              <div className="text-center lg:text-left">
                <h1 className="text-4xl md:text-5xl lg:text-6xl text-[#4A3728] mb-6 leading-tight italic font-light">
                  Sua saúde e seu sorriso<br />
                  <span className="text-[#8B6F5C]">são a minha missão</span>
                </h1>
                <p className="text-lg md:text-xl max-w-2xl mb-8 text-[#5C4A3D] leading-relaxed">
                  Transforme seu sorriso com excelência em odontologia estética e implantes. Cuidado personalizado e tecnologia de ponta para você.
                </p>
                <button className="bg-[#4A3728] text-white px-10 py-4 text-sm tracking-widest uppercase rounded-full hover:bg-[#5C4A3D] transition-all duration-300 shadow-lg hover:shadow-xl">
                  Agende Agora
                </button>
              </div>

              {/* Right Image */}
              <div className="flex justify-center lg:justify-end">
                <img
                  src="/images/hero2.png"
                  alt="Dra. Maitê Tikami - Dentista"
                  className="max-w-full h-auto object-contain"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Services Section */}
        <section id="services" className="py-24 bg-white">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
                Nossos Serviços
              </h2>
              <div className="w-16 h-1 bg-blue-500 mx-auto rounded-full"></div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="group bg-gradient-to-br from-blue-50 to-cyan-50 p-8 rounded-2xl shadow-md hover:shadow-2xl transition-all duration-300 border border-blue-100 hover:border-blue-300">
                <div className="text-5xl mb-6 text-blue-500">✨</div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">
                  Odontologia Estética
                </h3>
                <p className="text-gray-700 leading-relaxed">
                  Clareamento, facetas, restaurações estéticas e design de sorriso. Transformamos seu sorriso com procedimentos modernos e personalizados.
                </p>
              </div>
              <div className="group bg-gradient-to-br from-blue-50 to-cyan-50 p-8 rounded-2xl shadow-md hover:shadow-2xl transition-all duration-300 border border-blue-100 hover:border-blue-300">
                <div className="text-5xl mb-6 text-blue-500">🦷</div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">
                  Implantes Dentários
                </h3>
                <p className="text-gray-700 leading-relaxed">
                  Tecnologia de ponta em implantologia. Recupere a função mastigatória e estética com implantes de qualidade internacional.
                </p>
              </div>
              <div className="group bg-gradient-to-br from-blue-50 to-cyan-50 p-8 rounded-2xl shadow-md hover:shadow-2xl transition-all duration-300 border border-blue-100 hover:border-blue-300">
                <div className="text-5xl mb-6 text-blue-500">💙</div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">
                  Cuidado Personalizado
                </h3>
                <p className="text-gray-700 leading-relaxed">
                  Avaliação completa, plano de tratamento customizado e atendimento humanizado focado no seu conforto e bem-estar.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* About Section */}
        <section id="about" className="py-24 bg-gradient-to-br from-gray-50 to-blue-50">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <div className="text-center mb-12">
                <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
                  Sobre a Dra. Maitê
                </h2>
                <div className="w-16 h-1 bg-blue-500 mx-auto rounded-full"></div>
              </div>
              <div className="bg-white p-10 rounded-2xl shadow-lg border border-blue-100">
                <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                  Com vasta experiência em Odontologia Estética e Implantologia, a Dra. Maitê Tikami dedica-se a proporcionar tratamentos de excelência, combinando técnica refinada com tecnologia de ponta e um toque humanizado em cada atendimento.
                </p>
                <p className="text-lg text-gray-700 leading-relaxed">
                  Nossa missão é transformar sorrisos e vidas, oferecendo não apenas saúde bucal de qualidade, mas também confiança, autoestima e qualidade de vida. Cada paciente é único, e cada tratamento é planejado considerando suas necessidades e desejos específicos.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section id="contact" className="py-24 bg-white">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto">
              <div className="text-center mb-12">
                <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
                  Contato
                </h2>
                <div className="w-16 h-1 bg-blue-500 mx-auto rounded-full"></div>
              </div>
              <p className="text-lg text-gray-600 mb-12 text-center">
                Agende sua consulta e comece sua jornada para um sorriso mais belo e saudável.
              </p>
              <div className="bg-gradient-to-br from-blue-500 to-cyan-500 text-white p-12 rounded-2xl shadow-xl">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
                  <div className="text-center">
                    <p className="text-2xl font-bold mb-2">📞 Telefone</p>
                    <p className="text-blue-100 text-lg">Entre em contato para horários</p>
                  </div>
                  <div className="text-center">
                    <p className="text-2xl font-bold mb-2">📧 Email</p>
                    <p className="text-blue-100 text-lg">Informações disponíveis</p>
                  </div>
                </div>
                <div className="border-t border-blue-400 pt-8">
                  <p className="text-center text-lg font-semibold">
                    Horário de Funcionamento
                  </p>
                  <p className="text-center text-blue-100 text-lg mt-2">
                    Segunda a Sexta: 9h - 18h
                  </p>
                  <p className="text-center text-blue-100 text-lg">
                    Sábado: Agendamento disponível
                  </p>
                </div>
              </div>
              <div className="mt-12 text-center">
                <button className="bg-blue-600 text-white px-10 py-4 rounded-full font-bold text-lg hover:bg-blue-700 transition-all duration-300 shadow-lg hover:shadow-xl">
                  Agendar Agora
                </button>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
