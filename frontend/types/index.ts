export type Product = {
  id: string;
  name: string;
  category: string;
  description: string;
  image?: string;
  basePrice?: number;
  ingredients: {
    proteins?: IngredientOption[];
    bases?: IngredientOption[];
    sides?: IngredientOption[];
    veggies?: IngredientOption[];
    touches?: IngredientOption[];
    sauces?: IngredientOption[];
    extras?: IngredientOption[];
  };
  rules: {
    proteinCount?: number;
    baseCount?: number;
    sideCount?: number;
    veggieCount?: number;
    touchCount?: number;
    sauceCount?: number;
  };
};

export type IngredientOption = {
  id: string;
  name: string;
  price?: number;
};
