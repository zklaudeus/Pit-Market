import { Product } from "@/types";

interface Props {
  product: Product;
}

export default function SandwichCategory({ product }: Props) {
  return (
    <section className="animate-slide-up" style={{ animationDelay: "300ms", animationFillMode: "both" }}>
       <div className="text-center mb-6">
        <h2 className="text-3xl font-outfit font-bold text-brand-black uppercase tracking-wider">
          {product?.name}
        </h2>
        <div className="w-12 h-0.5 bg-brand-gold/30 mx-auto mt-3 rounded-full" />
      </div>

      <div className="bg-white rounded-[24px] p-6 md:p-10 shadow-[0_4px_20px_rgb(0,0,0,0.03)] border border-gray-50 flex flex-col md:grid md:grid-cols-2 gap-6 md:gap-12">
         
         {/* Left Column: Opciones */}
         <div className="flex flex-col gap-3">
            {product?.ingredients.bases?.map((base, idx) => (
              <div key={idx} className="flex justify-between items-center p-3 rounded-xl bg-gray-50 border border-gray-100">
                <span className="font-medium text-brand-black text-sm">{base.name}</span>
                <span className="font-semibold text-brand-gold-text">${product.basePrice?.toLocaleString("es-CL")}</span>
              </div>
            ))}
         </div>

         <div className="h-px w-full bg-gray-100 md:hidden" />

         {/* Right Column: Salsas y Agregados */}
         <div className="flex flex-col gap-6 md:gap-1">
           {/* Salsas sándwich */}
           <div>
              <h3 className="font-outfit font-bold text-[15px] mb-2 text-brand-brown">Elige 2 Salsas</h3>
              <div className="flex flex-wrap gap-2">
                {product?.ingredients.sauces?.map(s => (
                   <span key={s.id} className="text-[13px] text-brand-black/70 bg-white border border-gray-200 px-3 py-1 rounded-full">
                     {s.name}
                   </span>
                ))}
              </div>
           </div>

           {/* Agregados sándwich */}
           <div>
              <h3 className="font-outfit font-bold text-[15px] text-brand-brown">Agregados</h3>
              <div className="flex flex-wrap gap-3">
                {product?.ingredients.extras?.map(e => (
                   <div key={e.id} className="text-[13px] text-brand-black/70 flex items-center gap-1.5">
                     <span className="w-1.5 h-1.5 rounded-full bg-brand-gold" />
                     {e.name} <span className="font-medium text-brand-black ml-0.5">+${e.price}</span>
                   </div>
                ))}
              </div>
           </div>
         </div>
      </div>
    </section>
  );
}
