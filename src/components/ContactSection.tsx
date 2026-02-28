import { MapPin, Phone, Mail, Clock, Instagram } from "lucide-react";

export function ContactSection() {
  return (
    <section id="contato" className="py-20 bg-gradient-to-br from-[#F8F4F0] to-[#F5F0EB]">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl md:text-5xl text-center mb-12 text-[#3D3832]">
            Contacto e Localização
          </h2>
          <div className="grid md:grid-cols-2 gap-12">
            <div className="space-y-8">
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-2xl mb-6 text-[#A89484]">Entre em Contato</h3>
                <div className="space-y-4">
                  <div className="flex items-start gap-4">
                    <MapPin className="w-6 h-6 text-[#A89484] mt-1 flex-shrink-0" />
                    <div>
                      <p className="text-[#3D3832]">Rua Exemplo, 123</p>
                      <p className="text-[#8B7968]">São Paulo, SP - CEP 01234-567</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-4">
                    <Phone className="w-6 h-6 text-[#A89484] flex-shrink-0" />
                    <p className="text-[#3D3832]">(11) 99999-9999</p>
                  </div>
                  <div className="flex items-center gap-4">
                    <Mail className="w-6 h-6 text-[#A89484] flex-shrink-0" />
                    <p className="text-[#3D3832]">contato@maitetikami.com.br</p>
                  </div>
                  <div className="flex items-center gap-4">
                    <Instagram className="w-6 h-6 text-[#A89484] flex-shrink-0" />
                    <a
                      href="https://instagram.com/dra.maitetikami"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-[#3D3832] hover:text-[#A89484] transition-colors"
                    >
                      @dra.maitetikami
                    </a>
                  </div>
                </div>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-2xl mb-4 text-[#A89484]">Horário de Atendimento</h3>
                <div className="space-y-3">
                  <div className="flex items-center gap-4">
                    <Clock className="w-5 h-5 text-[#A89484] flex-shrink-0" />
                    <div>
                      <p className="text-[#3D3832]">Segunda a Sexta: 9h - 18h</p>
                      <p className="text-[#3D3832]">Sábado: 9h - 13h</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md h-[500px]">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3657.1974739188134!2d-46.65437568502199!3d-23.561414984682366!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94ce59c8da0aa315%3A0xd59f9431f2c9776a!2sAv.%20Paulista%2C%20S%C3%A3o%20Paulo%20-%20SP!5e0!3m2!1spt-BR!2sbr!4v1234567890"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="rounded-lg"
              ></iframe>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}