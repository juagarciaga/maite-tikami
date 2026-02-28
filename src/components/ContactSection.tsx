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
                      <p className="text-[#3D3832]">Av. Grécia, 180 - Vila Prado</p>
                      <p className="text-[#8B7968]">São Carlos - SP, 13574-140</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-4">
                    <Phone className="w-6 h-6 text-[#A89484] flex-shrink-0" />
                    <p className="text-[#3D3832]">(16) 9 9438-4039</p>
                  </div>
                  <div className="flex items-center gap-4">
                    <Mail className="w-6 h-6 text-[#A89484] flex-shrink-0" />
                    <p className="text-[#3D3832]">odontologia.tikami@gmail.com</p>
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
                      <p className="text-[#3D3832]">Segunda a Sexta: 8h - 18h</p>
                      <p className="text-[#3D3832]">Sábado: 9h - 13h</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md h-[500px]">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3698.361474790782!2d-47.8992345244691!3d-22.035763907323776!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94b8779df2b1fc2d%3A0xb7bb26468fb1e56b!2sDra%20Mait%C3%AA%20Tikami%20-%20Odontologia!5e0!3m2!1sen!2sbr!4v1772315783107!5m2!1sen!2sbr"
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