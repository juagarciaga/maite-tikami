"use client";

import { Card, Typography } from "antd";

const { Title, Paragraph, Text } = Typography;

export default function AboutSection() {
  return (
    <section
      id="sobre"
      className="py-20 bg-[#e9ddd0] bg-[url('/images/consultorio.png')] bg-cover bg-center bg-fixed"
    >
      <div className="backdrop-brightness-[0.9] bg-[#e9ddd0]/85 py-10">
        <div className="max-w-4xl mx-auto px-4">
          <Card className="rounded-3xl shadow-xl bg-white/90">
            <div className="text-center mb-6">
              <Text className="tracking-[0.3em] uppercase text-xs text-[#c09c78]">
                Sobre a clínica
              </Text>
              <Title
                level={2}
                className="mt-3 mb-4 !text-3xl md:!text-4xl"
                style={{ color: "#4A3728" }}
              >
                Aqui, cada detalhe é pensado para você
              </Title>
            </div>
            <Paragraph
              className="text-base md:!text-lg mb-4 text-center"
              style={{ color: "#5C4A3D" }}
            >
              Com ampla experiência em Odontologia Estética e Implantologia,
              a Dra. Maitê Tikami une técnica, sensibilidade e tecnologia
              para criar tratamentos que valorizam a saúde e a beleza do seu
              sorriso.
            </Paragraph>
            <Paragraph
              className="text-base md:!text-lg text-center"
              style={{ color: "#5C4A3D" }}
            >
              A clínica foi planejada para ser um ambiente calmo e
              acolhedor, onde você é recebido com atenção desde o primeiro
              contato. Cada plano de tratamento é personalizado, respeitando
              a sua história, necessidades e expectativas.
            </Paragraph>
          </Card>
        </div>
      </div>
    </section>
  );
}
