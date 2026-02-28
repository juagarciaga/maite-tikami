import { Phone } from "lucide-react";

export const handleClickToWhatsApp = () => {
    const whatsappNumber = "5516994384039"; // Replace with actual WhatsApp number
    const message = encodeURIComponent("Olá! Gostaria de saber mais informações.");
    window.open(`https://wa.me/${whatsappNumber}?text=${message}`, "_blank");
};
export function WhatsAppButton() {

    return (
        <button
            onClick={handleClickToWhatsApp}
            className="fixed bottom-6 right-6 bg-green-500 hover:bg-green-600 text-white rounded-full p-4 shadow-lg transition-all hover:scale-110 z-50"
            aria-label="WhatsApp"
        >
            <Phone className="w-8 h-8" />
        </button>
    );
}
