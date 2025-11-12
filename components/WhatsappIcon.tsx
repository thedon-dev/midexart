import React from "react";
import { FaWhatsapp } from "react-icons/fa";

const WhatsappIcon = () => {
  return (
    <div className="fixed bottom-8 right-8 z-50 animate-bounce">
      <a
        href="https://wa.me/+2348159154713"
        target="_blank"
        rel="noopener noreferrer"
        className="bg-green-500 text-white p-4 rounded-full shadow-lg hover:bg-green-600 transition-colors duration-300 flex items-center justify-center"
      >
        <FaWhatsapp size={32} />
      </a>
    </div>
  );
};

export default WhatsappIcon;
