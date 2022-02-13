
# Overview

This section describes the services, that interface with the application. As the application grows, it can be split further into the following sections: Data Flows section, which should include a visual representation with a brief description of the interface; Interface Details section, with detailed information of each connection with each interface, including mapping tables, schema files and file examples; Interface Technology, focused on protocols, data formats, implementations, security, monitoring and error handling for each interface; Data Structure describing the data models. As we have only one planned interface right now, the information will be compressed in the Data Flow and Data Structure sections.

# Data Flow

Currently, only basic information about the future flows is included, should be expanded with full request and response headers, statuses and payloads.

## Incoming

Direction: Server → Client

Action: Get a list of all chocolates.

`GET server-address/chocolates`

## Example

The provided example is used as mock data to develop the frontend without the need to attach it to a backend service.

<table>

<tbody>

<tr>

<td>

<pre>{
  "pagination": {
    "offset": 0,
    "limit": 25,
    "total": 10
  },
  "data": [
    {
      "id": "1",
      "name": "Sesam",
      "brand": "Ritter-Sport",
      "currency": "EUR",
      "prices": [
        {
          "price": 2.09,
          "shop": "Ritter-Sport",
          "link": "https://example.com/rs-sesam-rs",
          "unit": "g",
          "amount": 100
        },
        {
          "price": 1.99,
          "shop": "Amazon",
          "link": "https://example.com/rs-sesam-am",
          "unit": "g",
          "amount": 100
        },
        {
          "price": 3.49,
          "shop": "REWE",
          "link": "https://example.com/rs-sesam-re",
          "unit": "g",
          "amount": 200
        }
      ],
      "nutrition": {
        "fat": {
          "total": 38,
          "saturated": 19
        },
        "carbohydrates": {
          "total": 42,
          "sugar": 40
        },
        "protein": 11,
        "salt": 1
      }
    },
    {
      "id": "2",
      "name": "Marzipan",
      "brand": "Ritter-Sport",
      "currency": "EUR",
      "prices": [
        {
          "price": 1.19,
          "shop": "Ritter-Sport",
          "link": "https://example.com/rs-marzipan-rs",
          "unit": "g",
          "amount": 100
        },
        {
          "price": 1.19,
          "shop": "Amazon",
          "link": "https://example.com/rs-marzipan-am",
          "unit": "g",
          "amount": 100
        },
        {
          "price": 2.19,
          "shop": "REWE",
          "link": "https://example.com/rs-marzipan-re",
          "unit": "g",
          "amount": 200
        },
        {
          "price": 2,
          "shop": "Edeka",
          "link": "https://example.com/rs-marzipan-ed",
          "unit": "kg",
          "amount": 0.2
        }
      ],
      "nutrition": {
        "fat": {
          "total": 28,
          "saturated": 13
        },
        "carbohydrates": {
          "total": 53,
          "sugar": 52
        },
        "protein": 6,
        "salt": 2
      }
    },
    {
      "id": "3",
      "name": "Die Kräftige",
      "brand": "Ritter-Sport",
      "currency": "EUR",
      "prices": [
        {
          "price": 1.39,
          "shop": "Ritter-Sport",
          "link": "https://example.com/rs-kraeftig-rs",
          "unit": "g",
          "amount": 100
        },
        {
          "price": 1.49,
          "shop": "Amazon",
          "link": "https://example.com/rs-kraeftig-am",
          "unit": "g",
          "amount": 100
        },
        {
          "price": 2.99,
          "shop": "REWE",
          "link": "https://example.com/rs-kraeftig-re",
          "unit": "g",
          "amount": 200
        },
        {
          "price": 9.99,
          "shop": "Edeka",
          "link": "https://example.com/rs-kraeftig-ed",
          "unit": "kg",
          "amount": 1
        },
        {
          "price": 0.99,
          "shop": "DM",
          "link": "https://example.com/rs-kraeftig-dm",
          "unit": "g",
          "amount": 50
        }
      ],
      "nutrition": {
        "fat": {
          "total": 50,
          "saturated": 32
        },
        "carbohydrates": {
          "total": 27,
          "sugar": 24
        },
        "protein": 7,
        "salt": 0.9
      }
    },
    {
      "id": "4",
      "name": "Salted Caramel",
      "brand": "Milka",
      "currency": "EUR",
      "prices": [
        {
          "price": 1.19,
          "shop": "Milka",
          "link": "https://example.com/mi-salted-mi",
          "unit": "g",
          "amount": 100
        },
        {
          "price": 0.99,
          "shop": "REWE",
          "link": "https://example.com/mi-salted-re",
          "unit": "kg",
          "amount": 0.1
        },
        {
          "price": 4.99,
          "shop": "Edeka",
          "link": "https://example.com/mi-salted-ed",
          "unit": "kg",
          "amount": 0.5
        },
        {
          "price": 1.19,
          "shop": "DM",
          "link": "https://example.com/mi-salted-dm",
          "unit": "g",
          "amount": 120
        }
      ],
      "nutrition": {
        "fat": {
          "total": 45,
          "saturated": 40
        },
        "carbohydrates": {
          "total": 38,
          "sugar": 36
        },
        "protein": 3,
        "salt": 4.2
      }
    },
    {
      "id": "5",
      "name": "Dark Milk",
      "brand": "Milka",
      "currency": "EUR",
      "prices": [
        {
          "price": 1.19,
          "shop": "Milka",
          "link": "https://example.com/mi-dark-mi",
          "unit": "g",
          "amount": 80
        },
        {
          "price": 1.19,
          "shop": "REWE",
          "link": "https://example.com/mi-dark-re",
          "unit": "kg",
          "amount": 0.1
        },
        {
          "price": 3.49,
          "shop": "Edeka",
          "link": "https://example.com/mi-dark-ed",
          "unit": "kg",
          "amount": 0.24
        },
        {
          "price": 0.89,
          "shop": "DM",
          "link": "https://example.com/mi-dark-dm",
          "unit": "g",
          "amount": 80
        }
      ],
      "nutrition": {
        "fat": {
          "total": 40,
          "saturated": 38
        },
        "carbohydrates": {
          "total": 36,
          "sugar": 30
        },
        "protein": 6,
        "salt": 1.2
      }
    },
    {
      "id": "6",
      "name": "Weiße Schokolade",
      "brand": "Milka",
      "currency": "EUR",
      "prices": [
        {
          "price": 1.19,
          "shop": "Milka",
          "link": "https://example.com/mi-weiss-mi",
          "unit": "g",
          "amount": 150
        },
        {
          "price": 7.49,
          "shop": "REWE",
          "link": "https://example.com/mi-weiss-re",
          "unit": "kg",
          "amount": 1
        },
        {
          "price": 0.99,
          "shop": "Edeka",
          "link": "https://example.com/mi-weiss-ed",
          "unit": "kg",
          "amount": 0.15
        }
      ],
      "nutrition": {
        "fat": {
          "total": 75,
          "saturated": 62
        },
        "carbohydrates": {
          "total": 55,
          "sugar": 48
        },
        "protein": 2,
        "salt": 2.1
      }
    },
    {
      "id": "7",
      "name": "Vegan Haselnuss",
      "brand": "Lindt",
      "currency": "EUR",
      "prices": [
        {
          "price": 2.99,
          "shop": "Lindt",
          "link": "https://example.com/li-haselnuss-li",
          "unit": "g",
          "amount": 90
        },
        {
          "price": 2.89,
          "shop": "Amazon",
          "link": "https://example.com/li-haselnuss-am",
          "unit": "g",
          "amount": 90
        },
        {
          "price": 2.49,
          "shop": "REWE",
          "link": "https://example.com/li-haselnuss-re",
          "unit": "kg",
          "amount": 0.09
        },
        {
          "price": 5.99,
          "shop": "Edeka",
          "link": "https://example.com/li-haselnuss-ed",
          "unit": "kg",
          "amount": 0.2
        },
        {
          "price": 2.79,
          "shop": "DM",
          "link": "https://example.com/li-haselnuss-dm",
          "unit": "g",
          "amount": 90
        }
      ],
      "nutrition": {
        "fat": {
          "total": 37,
          "saturated": 16
        },
        "carbohydrates": {
          "total": 54,
          "sugar": 38
        },
        "protein": 5,
        "salt": 1.4
      }
    },
    {
      "id": "8",
      "name": "EXCELLENCE 99%",
      "brand": "Lindt",
      "currency": "EUR",
      "prices": [
        {
          "price": 1.79,
          "shop": "Lindt",
          "link": "https://example.com/li-excellence-li",
          "unit": "g",
          "amount": 50
        },
        {
          "price": 2.49,
          "shop": "Amazon",
          "link": "https://example.com/li-excellence-am",
          "unit": "g",
          "amount": 50
        },
        {
          "price": 2.39,
          "shop": "REWE",
          "link": "https://example.com/li-excellence-re",
          "unit": "kg",
          "amount": 0.05
        },
        {
          "price": 4.99,
          "shop": "Edeka",
          "link": "https://example.com/li-excellence-ed",
          "unit": "kg",
          "amount": 0.1
        },
        {
          "price": 1.99,
          "shop": "DM",
          "link": "https://example.com/li-excellence-dm",
          "unit": "g",
          "amount": 50
        }
      ],
      "nutrition": {
        "fat": {
          "total": 49,
          "saturated": 20
        },
        "carbohydrates": {
          "total": 10,
          "sugar": 1
        },
        "protein": 14,
        "salt": 1
      }
    },
    {
      "id": "9",
      "name": "HELLO Roasted Almonds",
      "brand": "Lindt",
      "currency": "EUR",
      "prices": [],
      "nutrition": {
        "fat": {
          "total": 36,
          "saturated": 16
        },
        "carbohydrates": {
          "total": 60,
          "sugar": 35
        },
        "protein": 8,
        "salt": 2.5
      }
    },
    {
      "id": "10",
      "name": "Cacao Pur",
      "brand": "Lindt",
      "currency": "EUR",
      "prices": [
        {
          "price": 3.69,
          "shop": "Lindt",
          "link": "https://example.com/li-cacao-li",
          "unit": "g",
          "amount": 80
        },
        {
          "price": 2.49,
          "shop": "Amazon",
          "link": "https://example.com/li-cacao-am",
          "unit": "g",
          "amount": 50
        },
        {
          "price": 4.99,
          "shop": "REWE",
          "link": "https://example.com/li-cacao-re",
          "unit": "kg",
          "amount": 0.1
        },
        {
          "price": 3.99,
          "shop": "Edeka",
          "link": "https://example.com/li-cacao-ed",
          "unit": "kg",
          "amount": 0.08
        },
        {
          "price": 2.99,
          "shop": "DM",
          "link": "https://example.com/li-cacao-dm",
          "unit": "g",
          "amount": 50
        },
        {
          "price": 2.99,
          "shop": "Müller",
          "link": "https://example.com/li-cacao-mu",
          "unit": "g",
          "amount": 80
        }
      ],
      "nutrition": {
        "fat": {
          "total": 52,
          "saturated": 20
        },
        "carbohydrates": {
          "total": 21,
          "sugar": 10
        },
        "protein": 10,
        "salt": 1
      }
    }
  ]
}</pre>

</td>

</tr>

</tbody>

</table>

## Outgoing

Direction: Client → Server

Action: Change name and brand

`POST server-address/chocolates/chocolate-${id}`

# Data Structure

## Vuex Store

An initial state is provided for the data, and new data is fetched before mounting the components.

<table>

<tbody>

<tr>

<td>

<pre>import { ChocolateData as State } from '@/types';

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
};</pre>

</td>

</tr>

</tbody>

</table>

## Typescript Types

Most of the types are related to the incoming data, except the `EnhancedPrice` and `CalculatedPrices` which as the names suggest are used to enhance the single price object with price per 100 grams and the average price per 100 grams, needed to figure out which is the lowest and to save the sorting and calculations to the prices object.

<table>

<tbody>

<tr>

<td class="wysiwyg-macro-body">

<pre>export type ChocolateData = {
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
}</pre>

</td>

</tr>

</tbody>

</table>