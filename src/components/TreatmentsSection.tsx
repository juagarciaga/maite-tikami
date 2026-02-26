"use client";

import { Card, Col, Row, Typography } from "antd";

const { Title, Paragraph } = Typography;

export default function TreatmentsSection() {
  return (
    <section id="tratamentos" className="py-16 bg-[#f8f1ea]">
      <div className="max-w-6xl mx-auto px-4">
        <Row gutter={[24, 24]} align="middle">
          <Col xs={24} md={14}>
            <Title
              level={3}
              style={{ color: "#4A3728" }}
              className="mb-3"
            >
              Tratamentos completos para saúde e estética do seu sorriso
            </Title>
            <Paragraph style={{ color: "#5C4A3D" }} className="mb-4">
              Da prevenção ao planejamento de casos complexos, oferecemos
              soluções integradas que unem funcionalidade, estética e
              bem-estar.
            </Paragraph>
            <ul className="space-y-2 text-sm md:text-base text-[#5C4A3D]">
              <li>• Reabilitação oral com foco em conforto e durabilidade</li>
              <li>• Planejamento digital do sorriso</li>
              <li>• Atenção especial a pacientes ansiosos</li>
            </ul>
          </Col>
          <Col xs={24} md={10}>
            <Card className="rounded-3xl shadow-lg bg-white/90">
              <Title level={5} style={{ color: "#4A3728" }} className="mb-2">
                Um olhar atento a cada caso
              </Title>
              <Paragraph style={{ color: "#5C4A3D" }} className="mb-0">
                Durante a consulta, dedicamos tempo para ouvir suas
                expectativas, explicar cada etapa e criar um plano que faça
                sentido para você hoje e no futuro.
              </Paragraph>
            </Card>
          </Col>
        </Row>
      </div>
    </section>
  );
}
