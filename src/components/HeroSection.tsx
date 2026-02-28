import { handleClickToWhatsApp } from "./WhatsAppButton";

const YOUTUBE_VIDEO_ID = "m_oXKiHRCho";
const YOUTUBE_EMBED_PARAMS = "autoplay=1&mute=1&loop=1&playlist=m_oXKiHRCho&controls=0&showinfo=0&rel=0";

export function HeroSection() {
  return (
    <section
      id="inicio"
      className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20"
    >
      {/* YouTube background video */}
      <div
        className="absolute inset-0 min-h-full min-w-full overflow-hidden"
        aria-hidden
      >
        <iframe
          src={`https://www.youtube.com/embed/${YOUTUBE_VIDEO_ID}?${YOUTUBE_EMBED_PARAMS}`}
          title="Vídeo de fundo"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
          className="absolute left-1/2 top-1/2 min-h-[100vh] min-w-[177.78vh] w-[100vw] h-[56.25vw] -translate-x-1/2 -translate-y-1/2 object-cover"
        />
      </div>
      {/* Overlay for readability and site palette */}
      <div
        className="absolute inset-0 bg-gradient-to-br from-[#F8F4F0]/90 via-[#F5F0EB]/85 to-[#F8F4F0]/90"
        aria-hidden
      />
      <div className="container relative z-10 mx-auto px-4 py-5 lg:py-20">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl md:text-6xl mb-6 text-[#3D3832]">
            Odontologia com planejamento, tecnologia e cuidado individualizado para você
          </h1>
          <p className="text-lg md:text-xl text-[#8B7968] mb-8">
            Cuidamos do seu sorriso com excelência e dedicação
          </p>
          <button
            type="button"
            onClick={handleClickToWhatsApp}
            className="inline-flex items-center justify-center rounded-full bg-[#A89484] px-8 py-4 text-lg font-medium text-white shadow-lg transition-colors duration-300 hover:bg-[#8B7968] focus:outline-none focus:ring-2 focus:ring-[#A89484] focus:ring-offset-2 active:bg-[#7a6b5d]"
          >
            Agende sua consulta
          </button>
        </div>
      </div>
    </section>
  );
}