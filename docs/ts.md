# Technical Specifications
## TS Frontend

### Overview

Based on the FS Frontend three vue components are needed:

-   card.vue to display a single card
    
-   overview.vue to display all cards
    
-   detail.vue to display detailed information
    

and two routes

-   path “/”, alias “overview”, loads the overview component
    
-   path “/detail/:id”, loads the detail component with the id of the item as prop
    
### Logic

The calculation logic is extracted to a single file `calculatePrices.ts` exporting two functions `calculatePrices` and `pricePer100g`. The `calculatePrices` returns an object with the computed values for `sortedPrices`, `lowestPrice`, `lowestPriceLink`, and `averagePrice` which are used in both the Overview and Detail views.

#### Code
[calculatePrices.ts](https://github.com/presiannedyalkov/markt-pilot-software-challenge/blob/main/src/logic/calculatePrices.ts)

### Components

#### Overview Component

##### Props
-   none
##### Components
-   Card
##### Logic

Dispatches an action to fetch the new data and update the Vuex store.

##### Code

[Overview.vue](https://github.com/presiannedyalkov/markt-pilot-software-challenge/blob/main/src/components/Overview.vue)

##### Technical debt

A pagination component should be added to the Overview to leverage the REST API’s pagination options `"pagination": { "offset": 0, "limit": 25, "total": 10 }`

#### Card Component

##### Props

-   chocolate
    

##### Display Attributes

-   Name
    
-   Brand
    
-   Lowest price per 100g (computed)
    
-   Average price per 100g (computed)
    
-   Link to the cheapest shop (computed)
    

##### Logic

Uses the `calculatePrices.ts` logic to get the calculated prices.

##### Code

[Card.vue](https://github.com/presiannedyalkov/markt-pilot-software-challenge/blob/main/src/components/Card.vue)

#### Detail Component

##### Props

-   id: string - passed from router through route parameters
    

##### Display Attributes

-   Name
    
-   Brand
    
-   Prices (including amount and shop link)
    

##### Logic

Uses the `calculatePrices.ts` logic to get the calculated prices.

##### Code

[Detail.vue](https://github.com/presiannedyalkov/markt-pilot-software-challenge/blob/main/src/components/Detail.vue)

##### Technical debt
Upon refresh the github page breaks. The cause is the publicPath, which is set to /markt-pilot-software-challenge/ for the github pages. Adding a base in the index file '/' fixes this but breaks other functionality.  

## TS Backend
### Overview
The decision to use mock or server API is made in the `actions.ts` file, based on the environment variable `VUE_APP_API_CLIENT` - it can be either mock or server. The decision on which value is set is based on the .env files for production and development. To further make this more flexible, a mock environment is created, to mock production as closely as possible. The development variables are used when executing `yarn serve` which directly loads the JSON mock file. The command `yarn build` loads the server API, which will currently throw an error, as the backend server path is not set. To circumvent this, `yarn build:mock` will trigger a webpack copy plugin to copy the JSON mock file to the public folder and serve it, instead of a live file from the backend system.
<table>

<tbody>

<tr>

<td>

<pre>// vue.config.js

const path = require('path');

let mode = '';

if (process.env.NODE_ENV === 'development' && process.env.VUE_APP_API_CLIENT === 'server') {
    mode = 'productionMock'
}
const isProductionMock = mode === 'productionMock';

module.exports = {
    publicPath: isProductionMock ? "/markt-pilot-software-challenge/" : "",
    chainWebpack: config => {
        if (isProductionMock) {
            config
                .plugin('copy')
                .tap(args => {
                    args[0].push({
                        from: path.resolve(__dirname + "/src/api/mock/data/chocolate-data.json"),
                        to: path.resolve(__dirname, "dist"),
                        toType: 'dir',
                    });
                    return args;
                })
        }
    }
}</pre>

</td>

</tr>

</tbody>

</table>

The environmental variables for development, production and mock are stored in

`.env.development`

<table>
    <tr>
    <td>
        <pre>VUE_APP_API_CLIENT = 'mock'</pre>
    </td>
    </tr>
</table>

`.env.production`

<table>
    <tr>
    <td>
        <pre>VUE_APP_API_CLIENT = 'server'</pre>
    </td>
    </tr>
</table>

`.env.mock`  - same API as production but with development environment

<table>
    <tr>
    <td>
        <pre>VUE_APP_API_CLIENT = 'server'
NODE_ENV=development</pre>
    </td>
    </tr>
</table>

The data will be fetched and stored in Vuex.

The structure of the API is as follows:
<table>
    <tr>
    <td class="wysiwyg-macro-body">
        <pre>api
├── mock
│   ├── data
│   │   └── chocolate-data.json
│   └── index.ts
└── server
└── index.ts</pre>
    </td>
    </tr>
</table>

mock service
<table>

<tbody>

<tr>

<td class="wysiwyg-macro-body">

<pre>// api/mock/index.ts

import chocolates from '@/api/mock/data/chocolate-data.json'
import { ChocolateData } from '@/types'
const fetch = (mockData: ChocolateData, time = 0): Promise<ChocolateData> => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(mockData)
        }, time)
    })
}
export default {
    fetchChocolates(): Promise<ChocolateData> {
        return fetch(chocolates, 1000).then((data) => data) // wait 1s before returning data
    }
}</pre>

</td>

</tr>

</tbody>

</table>

live service

<table>

<tbody>

<tr>

<td class="wysiwyg-macro-body">

<pre>// api/server/index.ts

// change 'server-ip' with the appropriate ip or domain name
import { ChocolateData } from '@/types';
import axios from 'axios'
export default {
    fetchChocolates(): Promise<ChocolateData> {
        return axios
            .get('https://server-ip/chocolates')
            .then(response => response.data)
            .catch((error) => {
                if (process.env.NODE_ENV === 'development' && process.env.VUE_APP_API_CLIENT === 'server') {
                    // the request is expected to land here for production build
                    // get the production mock data
                    return axios.get('chocolate-data.json')
                        .then(response => response.data)
                        .catch(error => console.log(error))
                }
                return error;
            });
    }
}</pre>

</td>

</tr>

</tbody>

</table>