"use client";

import dynamic from "next/dynamic";

// Wrapper Client Component para poder usar ssr:false (qrcode.react usa canvas del browser).
// Se importa dinámicamente desde page.tsx (Server Component) sin problemas.
const QRCodeSection = dynamic(() => import("@/components/QRCodeSection"), {
  ssr: false,
  loading: () => (
    <div className="animate-pulse bg-gray-100 rounded-3xl p-8 h-64 flex items-center justify-center">
      <div className="w-40 h-40 bg-gray-200 rounded-xl" />
    </div>
  ),
});

export default function LazyQRCodeSection() {
  return <QRCodeSection />;
}
