
import Image from "next/image";

export function AboutSection() {
    return (
        <section id="quem-somos" className="py-20 bg-gradient-to-br from-[#F8F4F0] to-[#F5F0EB]">
            <div className="container mx-auto px-4">
                <div className="max-w-6xl mx-auto">
                    <h2 className="text-4xl md:text-5xl text-center mb-12 text-[#3D3832]">
                        Quem Somos
                    </h2>
                    <div className="grid md:grid-cols-2 gap-12 items-center">
                        <div>
                            <Image
                                src="/images/dr-maite-1.png"
                                alt="Dra. Maitê Tikami"
                                width={600}
                                height={500}
                                className="w-full h-[500px] object-contain rounded-lg"
                            />
                        </div>
                        <div className="space-y-6">
                            <h3 className="text-2xl md:text-3xl text-[#A89484]">
                                Dra. Maitê Tikami
                            </h3>
                            <p className="text-lg text-[#4A4540] leading-relaxed">
                                Com anos de experiência em odontologia, a Dra. Maitê Tikami dedica-se a oferecer
                                o melhor tratamento odontológico, combinando conhecimento técnico, tecnologia de
                                ponta e um atendimento humanizado e personalizado.
                            </p>
                            <p className="text-lg text-[#4A4540] leading-relaxed">
                                Nossa clínica foi criada com o objetivo de proporcionar uma experiência única aos
                                nossos pacientes, priorizando o conforto, a segurança e resultados excepcionais
                                em cada procedimento.
                            </p>
                            <p>
                                Aqui no consultório, estou comprometida em fornecer tratamentos odontológicos de alta qualidade para toda a família. Desde limpezas e check-ups regulares até procedimentos mais complexos como cirurgias de implantes e reabilitações tudo isso para cuidar de você e da sua saúde bucal. Formada pela UNICAMP e especialista pela SÃO LEOPOLDO MANDIC
                            </p>
                            <div className="grid grid-cols-2 gap-6 mt-8">
                                <div className="bg-white p-6 rounded-lg shadow-md">
                                    <div className="text-3xl text-[#A89484] mb-2">1000+</div>
                                    <div className="text-[#8B7968]">Pacientes Atendidos</div>
                                </div>
                                <div className="bg-white p-6 rounded-lg shadow-md">
                                    <div className="text-3xl text-[#A89484] mb-2">9+</div>
                                    <div className="text-[#8B7968]">Anos de Experiência</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}