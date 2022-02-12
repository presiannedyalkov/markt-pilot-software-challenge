import { computed } from "vue";
import { EnhancedPrice, CalculatedPrices } from "@/types";


export function calculatePrices(prices: EnhancedPrice[]): CalculatedPrices {

    const sortedPrices = computed(() => {
        return [...prices].sort(
            (a: { pricePer100g: number }, b: { pricePer100g: number }): number =>
                a.pricePer100g - b.pricePer100g
        );
    });

    const lowestPrice = computed(() => {
        if (prices.length > 0) {
            const _cheapest = sortedPrices.value[0];
            const _lowestPrice: number = _cheapest.pricePer100g;
            return _lowestPrice;
        }
        return 0;
    });

    const lowestPriceLink = computed(() => {
        if (prices.length > 0) {
            const _cheapest = sortedPrices.value[0];
            const _lowestPriceLink: string = _cheapest.link;
            return _lowestPriceLink;
        }
        return "";
    });

    const averagePrice = computed(() => {
        const _prices: number[] = [];
        if (prices.length > 0) {
            prices.forEach((price: EnhancedPrice) => {
                const _price = price.pricePer100g;
                _prices.push(_price);
            });
            const getAverage = (arr: number[]) =>
                arr.reduce((p: number, c: number) => p + c, 0) / arr.length;
            const _average = getAverage(_prices);
            return Math.round(_average * 100) / 100;
        }
        return 0;
    });


    const calculatedPrices = { sortedPrices, lowestPrice, lowestPriceLink, averagePrice };

    return calculatedPrices;
}

export function pricePer100g(prices: EnhancedPrice[]): void {
    if (prices.length > 0) {
        prices.forEach((price: EnhancedPrice) => {
            const _price: number = price.price;
            let _amount: number = price.amount;
            if (price.unit === "kg") {
                _amount = price.amount * 1000;
            }
            const _pricePer100g: number = (_price / _amount) * 100;
            price.pricePer100g = Math.round(_pricePer100g * 100) / 100;
        });
    }
}