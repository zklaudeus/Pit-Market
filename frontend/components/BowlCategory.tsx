import { Product, IngredientOption } from "@/types";

interface Props {
  product: Product;
}

export default function BowlCategory({ product }: Props) {
  const groupProteinsByPrice = (proteins: IngredientOption[]) => {
    return proteins.reduce((acc, p) => {
      const price = p.price || 0;
      if (!acc[price]) acc[price] = [];
      acc[price].push(p.name);
      return acc;
    }, {} as Record<number, string[]>);
  };

  const bowlProteins = groupProteinsByPrice(product?.ingredients?.proteins || []);

  const getBowlCategoryName = (price: string) => {
    if (price === "5500") return "Clásica";
    if (price === "6000") return "Platinum";
    if (price === "6600") return "Premium";
    return "Proteína";
  };

  return (
    <section className="animate-slide-up" style={{ animationDelay: "200ms", animationFillMode: "both" }}>
      <div className="text-center mb-6">
        <h2 className="text-3xl font-outfit font-bold text-brand-black uppercase tracking-wider">
          {product?.name}
        </h2>
        <p className="text-brand-gold font-medium mt-1 text-sm max-w-[350px] mx-auto leading-relaxed">
          {product?.description}
        </p>
        <div className="w-12 h-0.5 bg-brand-gold/30 mx-auto mt-4 rounded-full" />
      </div>

      <div className="bg-brand-black rounded-[24px] p-6 md:p-10 shadow-[0_12px_30px_rgb(0,0,0,0.15)] flex flex-col md:grid md:grid-cols-12 gap-8 md:gap-12 text-white relative overflow-hidden">
        {/* Decorative background element */}
        <div className="absolute top-0 right-0 w-32 h-32 bg-brand-brown/20 rounded-full blur-3xl pointer-events-none" />

        {/* Col 1: Base & Proteinas (5 span) */}
        <div className="md:col-span-5 flex flex-col gap-6 z-10">
          <div className="mb-2">
            <h3 className="font-outfit font-bold text-lg mb-2 text-brand-gold">I. Base </h3>
            <p className="text-[14px] text-gray-300 font-light leading-relaxed">
              {product?.ingredients.bases?.map(b => b.name).join(" • ")}
            </p>
          </div>
          
          <div className="h-px w-full bg-white/10 md:hidden" />
          
          <div>
            <h3 className="font-outfit font-bold text-lg mb-4 text-brand-gold">II. Proteínas</h3>
            <div className="flex flex-col gap-4">
              {Object.entries(bowlProteins).map(([price, names]) => (
                <div key={price} className="bg-white/5 rounded-xl p-4 border border-white/10">
                  <div className="flex justify-between items-center mb-2">
                     <span className="font-outfit font-bold tracking-wide text-white">{getBowlCategoryName(price)}</span>
                     <span className="text-brand-gold font-semibold text-sm bg-brand-gold/10 px-2 py-0.5 rounded">${Number(price).toLocaleString("es-CL")}</span>
                  </div>
                  <p className="text-sm text-gray-300 font-light leading-relaxed">
                    {Array.isArray(names) ? names.join(" • ") : ""}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="h-px w-full bg-white/10 relative z-10 md:hidden" />

        {/* Col 2: Vegetales y Toques (4 span) */}
        <div className="md:col-span-4 flex flex-col gap-6 z-10">
            <div>
              <h3 className="font-outfit font-bold text-sm mb-2 text-brand-gold">III. Vegetales </h3> <span className="text-xs font-normal text-brand-gray tracking-wide ml-1">(elige 4)</span>
              <ul className="text-[13px] text-gray-300 font-light flex flex-col gap-1.5 list-disc pl-4 marker:text-brand-brown">
                {product?.ingredients.veggies?.map(v => (
                  <li key={v.id}>{v.name}</li>
                ))}
              </ul>
            </div>
            <div>
              <h3 className="font-outfit font-bold text-sm mb-2 text-brand-gold">IV. Toques </h3><span className="text-xs font-normal text-brand-gray tracking-wide ml-1">(elige 4)</span>
              <ul className="text-[13px] text-gray-300 font-light flex flex-col gap-1.5 list-disc pl-4 marker:text-brand-brown">
                {product?.ingredients.touches?.map(t => (
                  <li key={t.id}>{t.name}</li>
                ))}
              </ul>
            </div>
        </div>

        <div className="h-px w-full bg-white/10 relative z-10 md:hidden" />

        {/* Col 3: Agregados y Salsas (3 span) */}
        <div className="md:col-span-3 flex flex-col gap-6 z-10">
             <div>
                <h3 className="font-outfit font-bold text-sm mb-1 text-brand-gold">Salsas </h3><span className="text-xs font-normal text-brand-gray tracking-wide ml-1">(elige 4)</span>
                <p className="text-[12px] text-gray-400 font-light leading-relaxed">
                  Ajo | Soya | Ají | Albahaca | Cilantro | Perejil | Ciboulette | Mayo | Ketchup | Agridulce | Jengibre | Ají limón | Mostaza | Champiñón
                </p>
             </div>
             <div>
                <h3 className="font-outfit font-bold text-sm mb-2 text-brand-gold">Agregados extras</h3>
                <div className="flex flex-wrap gap-4">
                  {product?.ingredients.extras?.map(e => (
                     <span key={e.id} className="text-[13px] text-gray-300 font-light bg-white/5 px-2.5 py-1 rounded-md border border-white/5">
                       {e.name} <span className="text-brand-gold font-medium">${e.price}</span>
                     </span>
                  ))}
                </div>
             </div>
        </div>

      </div>
    </section>
  );
}
