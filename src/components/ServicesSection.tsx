import { Smile, Sparkles, Stethoscope, UserCheck, Zap, Shield } from "lucide-react";

const services = [
  {
    icon: Smile,
    title: "Odontologia Estética",
    description: "Transforme seu sorriso com procedimentos estéticos modernos e eficazes."
  },
  {
    icon: Sparkles,
    title: "Clareamento Dental",
    description: "Recupere o branco natural dos seus dentes com técnicas seguras e comprovadas."
  },
  {
    icon: Stethoscope,
    title: "Implantes Dentários",
    description: "Soluções permanentes para substituição de dentes com tecnologia avançada."
  },
  {
    icon: UserCheck,
    title: "Ortodontia",
    description: "Aparelhos ortodônticos personalizados para alinhar seu sorriso."
  },
  {
    icon: Zap,
    title: "Harmonização Orofacial",
    description: "União entre odontologia e estética facial para um sorriso e rosto em harmonia."
  },
  {
    icon: Shield,
    title: "Prevenção",
    description: "Acompanhamento regular para manter a saúde e beleza do seu sorriso."
  }
];

export function ServicesSection() {
  return (
    <section id="servicos" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl md:text-5xl text-center mb-4 text-[#3D3832]">
            Nossos Serviços
          </h2>
          <p className="text-center text-[#8B7968] text-lg mb-16 max-w-2xl mx-auto">
            Oferecemos uma ampla gama de serviços odontológicos com tecnologia de ponta
            e atendimento personalizado
          </p>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div
                key={index}
                className="bg-gradient-to-br from-[#F8F4F0] to-[#F5F0EB] p-8 rounded-xl shadow-md hover:shadow-xl transition-shadow"
              >
                <service.icon className="w-12 h-12 text-[#A89484] mb-4" />
                <h3 className="text-xl mb-3 text-[#3D3832]">
                  {service.title}
                </h3>
                <p className="text-[#8B7968] leading-relaxed">
                  {service.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}