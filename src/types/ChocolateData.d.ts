export type ChocolateData = {
    pagination: Pagination;
    data: Chocolate;
}

export type Pagination = {
    offset: number;
    limit: number;
    total: number;
}

export type Chocolate = {
    id: string;
    name: string;
    brand: string;
    currency: string;
    prices: Price[] | any;
    nutrition: Nutrition;
}[]

export type Price = {
    price: number;
    shop: string;
    link: string;
    unit: string;
    amount: number;
}

export type EnhancedPrice = Price & {
    pricePer100g: number;
    averagePricePer100g: number;
}

export type CalculatedPrices = {
    sortedPrices: ComputedRef<EnhancedPrice[]>;
    lowestPrice: ComputedRef<number>;
    averagePrice: ComputedRef<number>;
    lowestPriceLink: ComputedRef<string>;
}

export type Nutrition = {
    fat: Fat;
    carbohydrates: Carbohydrates;
    protein: number;
    salt: number;
}

export type Fat = {
    total: number;
    saturated: number;
}

export type Carbohydrates = {
    total: number;
    sugar: number;
}