"use client";

import { Button, Card, Col, Row, Typography } from "antd";

const { Title, Paragraph, Text } = Typography;

export default function ContactSection() {
  return (
    <section id="contato" className="py-20 bg-[#f8f1ea]">
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center mb-10">
          <Text className="tracking-[0.3em] uppercase text-xs text-[#c09c78]">
            Contato
          </Text>
          <Title
            level={2}
            className="mt-3 mb-4 !text-3xl md:!text-4xl"
            style={{ color: "#4A3728" }}
          >
            Vamos cuidar do seu sorriso?
          </Title>
          <Paragraph
            className="max-w-2xl mx-auto !text-base md:!text-lg"
            style={{ color: "#5C4A3D" }}
          >
            Envie uma mensagem ou agende seu horário e daremos todo o suporte
            para o seu atendimento.
          </Paragraph>
        </div>

        <Row gutter={[24, 24]}>
          <Col xs={24} md={12}>
            <Card className="rounded-3xl shadow-lg bg-white">
              <Title level={4} style={{ color: "#4A3728" }} className="mb-4">
                Informações de contato
              </Title>
              <div className="space-y-4 text-sm md:text-base">
                <div>
                  <Text strong style={{ color: "#4A3728" }}>
                    Telefone / WhatsApp
                  </Text>
                  <Paragraph className="!mb-0" style={{ color: "#5C4A3D" }}>
                    (00) 00000-0000
                  </Paragraph>
                </div>
                <div>
                  <Text strong style={{ color: "#4A3728" }}>
                    Endereço
                  </Text>
                  <Paragraph className="!mb-0" style={{ color: "#5C4A3D" }}>
                    Rua Exemplo, 123 - Bairro, Cidade / UF
                  </Paragraph>
                </div>
                <div>
                  <Text strong style={{ color: "#4A3728" }}>
                    Horário de atendimento
                  </Text>
                  <Paragraph className="!mb-0" style={{ color: "#5C4A3D" }}>
                    Segunda a sexta: 9h às 18h
                    <br />
                    Sábado: agendamento especial
                  </Paragraph>
                </div>
              </div>

              <Button
                type="primary"
                size="large"
                className="mt-6 !rounded-full !px-10 !h-11 !text-xs !tracking-[0.25em] !uppercase w-full md:w-auto"
                style={{
                  background: "#c67a3f",
                  borderColor: "#c67a3f"
                }}
              >
                Falar pelo WhatsApp
              </Button>
            </Card>
          </Col>

          <Col xs={24} md={12}>
            <Card className="rounded-3xl shadow-lg bg-white overflow-hidden">
              <div className="aspect-video rounded-2xl overflow-hidden bg-[#e9ddd0] flex items-center justify-center text-center px-4">
                <Paragraph
                  className="!mb-0 text-sm md:text-base"
                  style={{ color: "#5C4A3D" }}
                >
                  Aqui você pode adicionar o mapa da localização da clínica
                  (Google Maps) para facilitar a chegada dos pacientes.
                </Paragraph>
              </div>
            </Card>
          </Col>
        </Row>
      </div>
    </section>
  );
}
