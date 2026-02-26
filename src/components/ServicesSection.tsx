/* eslint-disable @next/next/no-img-element */
"use client";

import { Card, Col, Row, Typography } from "antd";

const { Title, Paragraph, Text } = Typography;

export default function ServicesSection() {
  return (
    <section id="servicos" className="py-20 bg-[#f8f1ea]">
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center mb-10">
          <Text className="tracking-[0.3em] uppercase text-xs text-[#c09c78]">
            Tratamentos
          </Text>
          <Title
            level={2}
            className="mt-3 mb-2 !text-3xl md:!text-4xl"
            style={{ color: "#4A3728" }}
          >
            Nossos serviços
          </Title>
          <div className="w-16 h-[3px] bg-[#c09c78] mx-auto rounded-full" />
        </div>

        <Row gutter={[24, 24]} justify="center">
          <Col xs={24} md={8}>
            <Card
              hoverable
              className="rounded-3xl overflow-hidden shadow-md hover:shadow-xl transition-all bg-white"
              cover={
                <img
                  src="/images/oro1.png"
                  alt="Odontologia estética"
                  className="h-52 w-full object-cover"
                />
              }
            >
              <Title level={4} style={{ color: "#4A3728" }} className="mb-2">
                Odontologia estética
              </Title>
              <Paragraph className="!mb-0" style={{ color: "#5C4A3D" }}>
                Clareamento, facetas e design de sorriso pensados para realçar
                a sua beleza natural com resultados delicados e harmônicos.
              </Paragraph>
            </Card>
          </Col>

          <Col xs={24} md={8}>
            <Card
              hoverable
              className="rounded-3xl overflow-hidden shadow-md hover:shadow-xl transition-all bg-white"
              cover={
                <img
                  src="/images/oro2.png"
                  alt="Implantes dentários"
                  className="h-52 w-full object-cover"
                />
              }
            >
              <Title level={4} style={{ color: "#4A3728" }} className="mb-2">
                Implantes dentários
              </Title>
              <Paragraph className="!mb-0" style={{ color: "#5C4A3D" }}>
                Soluções modernas para repor dentes com segurança e conforto,
                devolvendo função mastigatória e confiança ao sorrir.
              </Paragraph>
            </Card>
          </Col>

          <Col xs={24} md={8}>
            <Card
              hoverable
              className="rounded-3xl overflow-hidden shadow-md hover:shadow-xl transition-all bg-white"
              cover={
                <img
                  src="/images/oro3.png"
                  alt="Atendimento humanizado"
                  className="h-52 w-full object-cover"
                />
              }
            >
              <Title level={4} style={{ color: "#4A3728" }} className="mb-2">
                Atendimento humanizado
              </Title>
              <Paragraph className="!mb-0" style={{ color: "#5C4A3D" }}>
                Um cuidado próximo, escuta atenta e ambiente acolhedor para
                que cada visita seja leve e tranquila.
              </Paragraph>
            </Card>
          </Col>
        </Row>
      </div>
    </section>
  );
}
