import { Chocolate, Pagination } from '@/types';

export type State = {
    pagination: Pagination;
    data: Chocolate
}

export const state: State = {
    pagination: {
        offset: 0,
        limit: 0,
        total: 0
    },
    data: [{
        id: '0',
        name: '',
        brand: '',
        currency: '',
        prices: [{
            price: 0,
            shop: '',
            link: '',
            unit: '',
            amount: 0
        }],
        nutrition: {
            fat: {
                total: 0,
                saturated: 0
            },
            carbohydrates: {
                total: 0,
                sugar: 0
            },
            protein: 0,
            salt: 0
        }
    }]
};

