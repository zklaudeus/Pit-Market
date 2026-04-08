import { Product, IngredientOption } from "@/types";

interface Props {
  product: Product;
}

export default function ProductCategory({ product }: Props) {
  // Helper to group by price
  const groupProteinsByPrice = (proteins: IngredientOption[]) => {
    return proteins.reduce((acc, p) => {
      const price = p.price || 0;
      if (!acc[price]) acc[price] = [];
      acc[price].push(p.name);
      return acc;
    }, {} as Record<number, string[]>);
  };

  const freshProteins = groupProteinsByPrice(product?.ingredients?.proteins || []);

  return (
    <section className="animate-slide-up" style={{ animationDelay: "100ms", animationFillMode: "both" }}>
      <div className="text-center mb-6">
        <h2 className="text-3xl font-outfit font-bold text-brand-black uppercase tracking-wider">
          {product?.name}
        </h2>
        <p className="text-brand-gold font-medium mt-1 text-sm max-w-[350px] mx-auto leading-relaxed">
          {product?.description}
        </p>
        <div className="w-12 h-0.5 bg-brand-gold/30 mx-auto mt-4 rounded-full" />
      </div>

      <div className="bg-white rounded-[24px] p-6 md:p-10 shadow-[0_4px_20px_rgb(0,0,0,0.03)] border border-gray-50 flex flex-col md:grid md:grid-cols-2 gap-6 md:gap-12">
        {/* Left Column: Proteínas */}
        <div>
          <h3 className="font-outfit font-bold text-lg mb-3 text-brand-brown">Elige tu Proteína</h3>
          <div className="flex flex-col gap-4">
            {Object.entries(freshProteins).map(([price, names]) => (
              <div key={price} className="flex flex-col border-l-2 border-brand-gold/40 pl-3">
                <span className="text-brand-gold font-semibold text-sm mb-1">${Number(price).toLocaleString("es-CL")}</span>
                <p className="text-sm text-brand-gray leading-relaxed">
                  {Array.isArray(names) ? names.join(" • ") : ""}
                </p>
              </div>
            ))}
          </div>
        </div>

        <div className="h-px w-full bg-gray-100 md:hidden" />

        {/* Right Column: Acompañamientos y Salsas */}
        <div className="flex flex-col gap-8 md:gap-2">
          {/* Acompañamientos */}
          <div>
            <h3 className="font-outfit font-bold text-lg mb-1 text-brand-brown">Acompañamientos</h3>
            <ul className="flex flex-col gap-1">
              {product?.ingredients.sides?.map(side => (
                <li key={side.id} className="flex justify-between items-center text-sm">
                  <span className="text-brand-gray">{side.name}</span>
                  <span className="font-medium text-brand-black">${side.price?.toLocaleString("es-CL")}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="h-px w-full bg-gray-100 md:hidden" />

          {/* Salsas */}
          <div>
            <h3 className="font-outfit font-bold text-lg  text-brand-brown">Salsas <span className="text-xs font-normal text-brand-gray tracking-wide ml-1">(elige 2)</span></h3>
            <p className="text-sm text-brand-gray leading-relaxed font-light">
              {product?.ingredients.sauces?.map(s => s.name).join(" | ")}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
