/* eslint-disable @next/next/no-img-element */
"use client";

import { Button, Col, Row, Typography } from "antd";

const { Title, Paragraph } = Typography;

export default function HeroSection() {
  return (
    <section className="hero-section">
      <div className="max-w-6xl mx-auto px-4">
        <Row gutter={[48, 32]} align="middle">
          <Col xs={24} md={14}>
            <div className="text-center md:text-left">
              <Title
                level={1}
                className="mb-4 !text-[2.4rem] md:!text-[3.2rem] lg:!text-[3.6rem] !leading-tight !font-light"
                style={{
                  color: "#4A3728",
                  fontFamily: "'Cormorant Garamond', serif",
                  fontStyle: "italic"
                }}
              >
                Sua saúde e seu sorriso
                <br />
                <span className="text-[#8B6F5C]">são a minha missão</span>
              </Title>
              <Paragraph
                className="max-w-xl mx-auto md:mx-0 mb-8 !text-base md:!text-lg"
                style={{ color: "#5C4A3D" }}
              >
                Transforme seu sorriso com excelência em odontologia
                estética e implantes. Cuidado personalizado, ambiente
                acolhedor e tecnologia de ponta para você se sentir seguro
                em cada etapa do tratamento.
              </Paragraph>
              <div className="flex flex-col sm:flex-row gap-3 justify-center md:justify-start">
                <Button
                  type="primary"
                  size="large"
                  href="#contato"
                  className="!rounded-full !px-10 !h-12 !text-xs !tracking-[0.25em] !uppercase shadow-md hover:shadow-lg"
                  style={{
                    background: "#4A3728",
                    borderColor: "#4A3728"
                  }}
                >
                  Agendar consulta
                </Button>
              </div>
            </div>
          </Col>

          <Col xs={24} md={10}>
            <div className="flex justify-center md:justify-end">
              <div className="relative rounded-[2.5rem] overflow-hidden shadow-2xl border border-[#e6d4c3] bg-[#f8f1ea]/60 backdrop-blur-sm">
                <img
                  src="/images/hero2.png"
                  alt="Dra. Maitê Tikami - Dentista"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </Col>
        </Row>
      </div>
    </section>
  );
}
