"use client";

import { useState, useEffect } from "react";
import { QRCodeCanvas } from "qrcode.react";

export default function QRCodeSection() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const menuUrl = "https://food-menu-qr.vercel.app/";

  const downloadQRCode = () => {
    const canvas = document.getElementById("qr-code-canvas") as HTMLCanvasElement;
    if (canvas) {
      const pngUrl = canvas
        .toDataURL("image/png")
        .replace("image/png", "image/octet-stream");
      let downloadLink = document.createElement("a");
      downloadLink.href = pngUrl;
      downloadLink.download = "menu-qr.png";
      document.body.appendChild(downloadLink);
      downloadLink.click();
      document.body.removeChild(downloadLink);
    }
  };

  return (
    <section className="animate-slide-up bg-white rounded-3xl p-8 shadow-[0_10px_40px_rgb(0,0,0,0.06)] border border-gray-50 flex flex-col items-center justify-center text-center mt-4">
      <h3 className="font-outfit font-bold text-2xl text-brand-black mb-2">
        Escanea y Ordena
      </h3>
      <p className="text-brand-gray text-sm mb-6 font-light max-w-[250px]">
        Accede a nuestro menú digital desde tu celular en cualquier momento.
      </p>

      <div className="relative bg-white p-6 rounded-2xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow duration-300 min-h-[240px] flex flex-col items-center justify-center">
        {mounted ? (
          <>
            <QRCodeCanvas
              id="qr-code-canvas"
              value={menuUrl}
              size={1080}
              style={{ width: "180px", height: "180px" }}
              bgColor={"#ffffff"}
              fgColor={"#000000"}
              level={"H"}  
              includeMargin={false}
              imageSettings={{
                src: "/pit market-02.png",  
                x: undefined,
                y: undefined,
                height: 240,
                width: 240,
                excavate: true, 
              }}
            />
            <button 
              onClick={downloadQRCode}
              className="mt-6 bg-[#212121] text-white px-6 py-2.5 rounded-full text-sm font-medium hover:bg-black transition-colors focus:ring-2 focus:ring-offset-2 focus:ring-black outline-none flex items-center gap-2"
            >
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path>
                <polyline points="7 10 12 15 17 10"></polyline>
                <line x1="12" y1="15" x2="12" y2="3"></line>
              </svg>
              Descargar QR
            </button>
          </>
        ) : (
          <div className="w-[180px] h-[180px] bg-gray-50 animate-pulse rounded-lg" />
        )}
      </div>
    </section>
  );
}
