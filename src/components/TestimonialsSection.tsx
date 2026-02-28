"use client";

import * as React from "react";
import { Star } from "lucide-react";

import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  type CarouselApi,
} from "@/components/ui/carousel";

const testimonials = [
  {
    quote:
      '"Maitê foi super atenciosa no meu atendimento é uma excelente profissional! Recomendo a todos que precisarem! Me explicou todos os procedimentos e estou adorando os resultados! Muito feliz mesmo!"',
    author: "Pedro Benelli",
  },
  {
    quote:
      '"A melhor odontóloga que já tive na minha vida. A Maitê desde o começo fez uma avaliação bastante descriptiva em relação aos procedimentos da consulta. Usou ferramentas para executar seu trabalho da melhor forma que nunca vi outro odontólogo(a) usar. E, contrário a outras consultas que já tive, não senti nenhum desconforto. Super recomendada."',
    author: "Juan Sebastian Ruiz Acero",
  },
  {
    quote:
      '"Fui muito bem acolhida desde a primeira consulta. A Dra. Maitê explicou tudo com calma e hoje tenho um sorriso que amo mostrar."',
    author: "Ana Paula",
  },
  {
    quote:
      '"O ambiente é lindo, aconchegante e a equipe extremamente atenciosa. Me senti segura em todas as etapas do tratamento."',
    author: "Ricardo M.",
  },
];

function StarRating({ count = 5 }: { count?: number }) {
  return (
    <div className="flex gap-0.5 mb-2" aria-hidden>
      {Array.from({ length: count }).map((_, i) => (
        <Star
          key={i}
          className="size-4 fill-[#c09c78] text-[#c09c78]"
          aria-hidden
        />
      ))}
    </div>
  );
}

export default function TestimonialsSection() {
  const [api, setApi] = React.useState<CarouselApi>();

  React.useEffect(() => {
    if (!api) return;
    const interval = setInterval(() => {
      api.scrollNext();
      if (!api.canScrollNext()) api.scrollTo(0);
    }, 5000);
    return () => clearInterval(interval);
  }, [api]);

  return (
    <section id="depoimentos" className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <div className="text-left">
            <span className="tracking-[0.3em] uppercase text-xs text-[#c09c78]">
              Depoimentos
            </span>
            <h2 className="mt-3 mb-4 text-3xl md:text-4xl text-[#4A3728]">
              O que nossos pacientes dizem
            </h2>
            <p className="text-base md:text-lg text-[#5C4A3D]">
              Histórias reais de pacientes que confiaram seu sorriso à nossa
              equipe.
            </p>
          </div>
          <div className="relative">
            <Carousel setApi={setApi} opts={{ loop: true }}>
              <CarouselContent className="-ml-0">
                {testimonials.map((t) => (
                  <CarouselItem key={t.author} className="pl-0">
                    <Card className="rounded-3xl shadow-lg bg-[#f8f1ea] border-0">
                      <CardContent className="pt-6 pb-6 px-6">
                        <p className="mb-4 text-sm md:text-base text-[#5C4A3D]">
                          {t.quote}
                        </p>
                        <StarRating />
                        <span className="font-semibold text-[#4A3728]">
                          {t.author}
                        </span>
                      </CardContent>
                    </Card>
                  </CarouselItem>
                ))}
              </CarouselContent>
            </Carousel>
          </div>
        </div>
      </div>
    </section>
  );
}
