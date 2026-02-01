import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-grow">
        {/* Hero Section */}
        <section className="bg-gradient-to-r from-blue-50 to-blue-100 py-20">
          <div className="container mx-auto px-4 text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-gray-800 mb-4">
              Maitê Tikami
            </h1>
            <h2 className="text-2xl md:text-3xl text-gray-700 mb-6">
              Odontologia Estética e Implantes
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Sua saúde e seu sorriso são a minha missão
            </p>
          </div>
        </section>

        {/* Services Section */}
        <section id="services" className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-800 mb-12">
              Serviços
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow">
                <h3 className="text-2xl font-semibold text-gray-800 mb-3">
                  Odontologia Estética
                </h3>
                <p className="text-gray-600">
                  Transforme seu sorriso com procedimentos estéticos avançados e personalizados.
                </p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow">
                <h3 className="text-2xl font-semibold text-gray-800 mb-3">
                  Implantes Dentários
                </h3>
                <p className="text-gray-600">
                  Recupere a função e estética dos seus dentes com implantes de última geração.
                </p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow">
                <h3 className="text-2xl font-semibold text-gray-800 mb-3">
                  Atendimento Personalizado
                </h3>
                <p className="text-gray-600">
                  Cuidado individualizado focado no seu bem-estar e satisfação.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* About Section */}
        <section id="about" className="py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-6">
                Sobre
              </h2>
              <p className="text-lg text-gray-600 mb-4">
                Com anos de experiência em odontologia estética e implantes, 
                Maitê Tikami oferece tratamentos de excelência com tecnologia 
                de ponta e atendimento humanizado.
              </p>
              <p className="text-lg text-gray-600">
                Nossa missão é proporcionar não apenas saúde bucal, mas também 
                autoestima e qualidade de vida através de um sorriso bonito e saudável.
              </p>
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section id="contact" className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-6">
                Contato
              </h2>
              <p className="text-lg text-gray-600 mb-8">
                Entre em contato para agendar sua consulta e transformar seu sorriso.
              </p>
              <div className="bg-blue-50 p-8 rounded-lg">
                <p className="text-xl text-gray-700 mb-2">
                  📧 Entre em contato para mais informações
                </p>
                <p className="text-lg text-gray-600">
                  Segunda a Sexta: 9h - 18h
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
