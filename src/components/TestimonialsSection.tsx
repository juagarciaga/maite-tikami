"use client";

import { Card, Carousel, Col, Rate, Row, Typography } from "antd";

const { Title, Paragraph, Text } = Typography;

export default function TestimonialsSection() {
  return (
    <section id="depoimentos" className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-4">
        <Row gutter={[32, 32]} align="middle">
          <Col xs={24} md={12}>
            <div className="text-left">
              <Text className="tracking-[0.3em] uppercase text-xs text-[#c09c78]">
                Depoimentos
              </Text>
              <Title
                level={2}
                className="mt-3 mb-4 !text-3xl md:!text-4xl"
                style={{ color: "#4A3728" }}
              >
                O que nossos pacientes dizem
              </Title>
              <Paragraph
                style={{ color: "#5C4A3D" }}
                className="text-base md:!text-lg"
              >
                Histórias reais de pacientes que confiaram seu sorriso à
                nossa equipe.
              </Paragraph>
            </div>
          </Col>
          <Col xs={24} md={12}>
            <Carousel autoplay dots className="rounded-3xl">
              <div>
                <Card className="rounded-3xl shadow-lg bg-[#f8f1ea]">
                  <Paragraph
                    className="mb-4 text-sm md:text-base"
                    style={{ color: "#5C4A3D" }}
                  >
                    "Fui muito bem acolhida desde a primeira consulta. A
                    Dra. Maitê explicou tudo com calma e hoje tenho um
                    sorriso que amo mostrar."
                  </Paragraph>
                  <Rate disabled defaultValue={5} className="mb-2" />
                  <Text strong style={{ color: "#4A3728" }}>
                    Ana Paula
                  </Text>
                </Card>
              </div>
              <div>
                <Card className="rounded-3xl shadow-lg bg-[#f8f1ea]">
                  <Paragraph
                    className="mb-4 text-sm md:text-base"
                    style={{ color: "#5C4A3D" }}
                  >
                    "O ambiente é lindo, aconchegante e a equipe extremamente
                    atenciosa. Me senti segura em todas as etapas do
                    tratamento."
                  </Paragraph>
                  <Rate disabled defaultValue={5} className="mb-2" />
                  <Text strong style={{ color: "#4A3728" }}>
                    Ricardo M.
                  </Text>
                </Card>
              </div>
            </Carousel>
          </Col>
        </Row>
      </div>
    </section>
  );
}
