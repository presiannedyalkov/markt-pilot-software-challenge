
# Overview

This project is a result of a software challenge given to me by a possible employer to test my frontend expertise. Here you will find the information about the challenge and a general overview of my solution.

# The challenge

## Description

A friend is completely crazy about chocolate. In order not to spend too much money on his passion, he has written a crawler that always researches the current prices on the Internet. While the crawler is still under development, he wants you to start with a web interface to display the results already. For a first prototype, two views should be created. In the overview, all chocolates should be displayed on one page including name, manufacturer, the lowest price per 100g, the average price per 100g and a direct link to the cheapest shop. In a details view, the name, brand and all market prices including the amount and shop link should be displayed for a selected chocolate. Since the backend is still under development, a static data set will be shown first for demonstration purposes. The structure of the data set already corresponds to the response of the future REST API.

<table>
   <tr>
      <td>
         <pre>{
  "id": "1",
  "name": "Sesam",
  "brand": "Ritter-Sport",
  "currency": "EUR",
  "prices": [
    {
      "price": 2.09,
      "shop": "Ritter-Sport",
      "link": "https://www.ritter-sport.com/de/produkte/sesam",
      "unit": "g",
      "amount": 100
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
    "salt": 0.04
  }
}
</pre>
      </td>
   </tr>
</table>

You want your prototype to be ready for use as soon as your friend has finished the backend. Thus, you are already thinking about how to design the application in a way which lets you switch to the REST API with minimal effort.

## Requirements

### Technical:

-   Programming Language: TypeScript
    
-   Framework: Angular (Or any other comparable framework that you have experience with)
    

### Functional:

-   View Overview: For every chocolate in the dataset display
    
    -   Name
        
    -   Brand
        
    -   Lowest price per 100g
        
    -   Average price per 100g
        
    -   Link to the cheapest shop
        
-   View Details: For a chocolate selected by the user display
    
    -   Name
        
    -   Brand
        
    -   Prices (including amount and shop link)
        

### Non-Functional:

-   Your code should be SOLID.
    
-   Create an appealing interface. Use the tools of your choice.
    
-   Use tools that are common for the software development, especially for larger projects.
    

## Additional Information

The challenge should be completed in about 3 hours. If you need to read up on some topics first, maybe even longer. In any case, please let us know how much time you have spent.

The layout of the application should work on the desktop, optimization for other formats is not necessary.

The challenge is intentionally formulated openly that you could also put significantly more time into it. If you have something in mind that you think is important but too extensive for this challenge, feel free to write it down for us in comments, a readme or similar.

## Bonus

If 3 hours is too much time for you or if you want to invest more time, you can also try to solve one or more of the following tasks.

-   Highlight the cheapest price per 100g in the details view.
    
-   Make the name and brand editable in the details view. The backend will later provide a POST Method for this.
    
-   Your friend is worried about his health because of his high chocolate consumption. In the detail view, display the nutritional values graphically in the form of a pie chart
    

# My solution

TL;DR

## Overview

I decided to create a Vue 3 application, featuring a Vuex state management library and a Vue router. I’ve had some experience with Vue 2, Vue router and React, but not much, and no experience with Vuex whatsoever, so I knew in advance that this will take much longer than the 3 hours, given for the task. Also, I’ve never used TypeScript until now, even though I’ve used some strongly typed languages. Nevertheless, I was excited about the challenge, as I also saw it as an opportunity to prove, that I can manage to find an effective solution to such a rudimental problem, even if I’m not going to be very efficient timewise the first time around. I decided to use Tailwind CSS as my design framework, which is also something fairly new for me - for personal projects I often use bootstrap, but I didn’t want to add jquery to the project and BootstrapVue, which I’ve previously used, is still not compatible with Vue 3, only Vue 2. Testing so many new tools meant for me, I’ll have to do some research, and also I’ll face a myriad of issues related to the compatibility of the different tools with each other. I’ve included most of the links that helped me in the “Sources” section below.

One of the things currently missing are tests, both unit and e2e, which is something that I would love to make up for in the future. Sadly this won’t be today, as I am leaving for a vacation and have to finally deliver my code, as I’ve spent way too much time on it. I realize that I broke the given time constraints, but I don’t regret it.

## Documentation

The documentation is split into the following sections - Architecture, Specifications, Development, Operations and Security. The section Architecture contains the data structures and data flows, the Specifications contains the functional and technical specifications. The last three sections - Development, Operations and Security are left blank and will be subsequently added later.

[Architecture](https://github.com/presiannedyalkov/markt-pilot-software-challenge/blob/main/docs/architecture.md)

[Functional Specifications](https://github.com/presiannedyalkov/markt-pilot-software-challenge/blob/main/docs/fs.md)

[Technical Specifications](https://github.com/presiannedyalkov/markt-pilot-software-challenge/blob/main/docs/ts.md)



Note: The documentation was written in Confluence and adapted as markdown. This may cause some stuff to break.

## Sources

[https://blog.logrocket.com/vue-typescript-tutorial-examples/](https://blog.logrocket.com/vue-typescript-tutorial-examples/ "https://blog.logrocket.com/vue-typescript-tutorial-examples/")  
[https://chiragrupani.medium.com/vuex-with-typescript-b83a62aa48a8](https://chiragrupani.medium.com/vuex-with-typescript-b83a62aa48a8 "https://chiragrupani.medium.com/vuex-with-typescript-b83a62aa48a8")  
[https://class-component.vuejs.org/](https://class-component.vuejs.org/ "https://class-component.vuejs.org/")  
[https://cli.vuejs.org/guide/creating-a-project.html#vue-create](https://cli.vuejs.org/guide/creating-a-project.html#vue-create "https://cli.vuejs.org/guide/creating-a-project.html#vue-create")  
[https://cli.vuejs.org/guide/deployment.html#general-guidelines](https://cli.vuejs.org/guide/deployment.html#general-guidelines "https://cli.vuejs.org/guide/deployment.html#general-guidelines")  
[https://cli.vuejs.org/guide/installation.html](https://cli.vuejs.org/guide/installation.html "https://cli.vuejs.org/guide/installation.html")  
[https://codesandbox.io/s/using-vuex-4-modules-in-vue-3-with-typescript-7ygvy](https://codesandbox.io/s/using-vuex-4-modules-in-vue-3-with-typescript-7ygvy "https://codesandbox.io/s/using-vuex-4-modules-in-vue-3-with-typescript-7ygvy")  
[https://dev-bay.com/vue-cli-modify-webpack-configuration/](https://dev-bay.com/vue-cli-modify-webpack-configuration/ "https://dev-bay.com/vue-cli-modify-webpack-configuration/")  
[https://dev.to/3vilarthas/vuex-typescript-m4j](https://dev.to/3vilarthas/vuex-typescript-m4j "https://dev.to/3vilarthas/vuex-typescript-m4j")  
[https://dev.to/scottstern06/how-to-destructure-props-in-vue-like-you-did-in-react-35f0](https://dev.to/scottstern06/how-to-destructure-props-in-vue-like-you-did-in-react-35f0 "https://dev.to/scottstern06/how-to-destructure-props-in-vue-like-you-did-in-react-35f0")  
[https://dev.to/shubhadip/vue-3-vuex-4-modules-typescript-2i2o](https://dev.to/shubhadip/vue-3-vuex-4-modules-typescript-2i2o)  
[https://flowbite.com/docs/components/spinner/](https://flowbite.com/docs/components/spinner/)  
[https://github.com/championswimmer/vuex-module-decorators](https://github.com/championswimmer/vuex-module-decorators)  
[https://github.com/coding-blocks-archives/realworld-vue-typescript/tree/master/src](https://github.com/coding-blocks-archives/realworld-vue-typescript/tree/master/src)  
[https://github.com/marketplace/actions/deploy-to-github-pages](https://github.com/marketplace/actions/deploy-to-github-pages)  
[https://github.com/microsoft/vscode/issues/113777](https://github.com/microsoft/vscode/issues/113777)  
[https://javascript.plainenglish.io/how-to-setup-tailwind-css-in-vue-3-405c889842d9](https://javascript.plainenglish.io/how-to-setup-tailwind-css-in-vue-3-405c889842d9 "https://javascript.plainenglish.io/how-to-setup-tailwind-css-in-vue-3-405c889842d9")  
[https://mariusschulz.com/blog/dynamic-import-expressions-in-typescript](https://mariusschulz.com/blog/dynamic-import-expressions-in-typescript)  
[https://markus.oberlehner.net/blog/group-extract-share-working-with-the-vue-composition-api/](https://markus.oberlehner.net/blog/group-extract-share-working-with-the-vue-composition-api/)  
[https://medium.com/@Taha_Shashtari/how-to-use-mock-data-in-vue-apps-6ec56eca1a78](https://medium.com/@Taha_Shashtari/how-to-use-mock-data-in-vue-apps-6ec56eca1a78)  
[https://medium.com/@danieljimgarcia/publishing-static-sites-to-github-pages-using-github-actions-8040f57dfeaf](https://medium.com/@danieljimgarcia/publishing-static-sites-to-github-pages-using-github-actions-8040f57dfeaf)  
[https://mokkapps.de/blog/why-i-love-vue-3-s-composition-api/](https://mokkapps.de/blog/why-i-love-vue-3-s-composition-api/)  
[https://next.vuex.vuejs.org/guide/actions.html#dispatching-actions](https://next.vuex.vuejs.org/guide/actions.html#dispatching-actions)  
[https://next.vuex.vuejs.org/guide/state.html](https://next.vuex.vuejs.org/guide/state.html)  
[https://next.vuex.vuejs.org/guide/typescript-support.html#simplifying-usestore-usage](https://next.vuex.vuejs.org/guide/typescript-support.html#simplifying-usestore-usage)  
[https://ordinarycoders.com/blog/article/17-tailwindcss-cards](https://ordinarycoders.com/blog/article/17-tailwindcss-cards "https://ordinarycoders.com/blog/article/17-tailwindcss-cards")  
[https://rmolinamir.github.io/typescript-cheatsheet/](https://rmolinamir.github.io/typescript-cheatsheet/)  
[https://soshace.com/building-web-apps-with-vue-3-composition-api-typescript-vuex4-0/](https://soshace.com/building-web-apps-with-vue-3-composition-api-typescript-vuex4-0/ "https://soshace.com/building-web-apps-with-vue-3-composition-api-typescript-vuex4-0/")  
[https://stackoverflow.com/questions/10359907/how-to-compute-the-sum-and-average-of-elements-in-an-array](https://stackoverflow.com/questions/10359907/how-to-compute-the-sum-and-average-of-elements-in-an-array)  
[https://stackoverflow.com/questions/41219542/how-to-import-js-modules-into-typescript-file](https://stackoverflow.com/questions/41219542/how-to-import-js-modules-into-typescript-file "https://stackoverflow.com/questions/41219542/how-to-import-js-modules-into-typescript-file")  
[https://stackoverflow.com/questions/41385059/possible-to-extend-types-in-typescript](https://stackoverflow.com/questions/41385059/possible-to-extend-types-in-typescript)  
[https://stackoverflow.com/questions/49996456/importing-json-file-in-typescript](https://stackoverflow.com/questions/49996456/importing-json-file-in-typescript)  
[https://stackoverflow.com/questions/51884083/webpack-copy-files-from-dist-to-another-directory](https://stackoverflow.com/questions/51884083/webpack-copy-files-from-dist-to-another-directory "https://stackoverflow.com/questions/51884083/webpack-copy-files-from-dist-to-another-directory")  
[https://stackoverflow.com/questions/52648552/debugger-settings-for-chrome-in-vs-code-with-vue-js](https://stackoverflow.com/questions/52648552/debugger-settings-for-chrome-in-vs-code-with-vue-js)  
[https://stackoverflow.com/questions/53522583/deploying-vuejs-to-github-pages](https://stackoverflow.com/questions/53522583/deploying-vuejs-to-github-pages)  
[https://stackoverflow.com/questions/61953992/breakpoints-not-working-debugging-react-app-in-chrome-through-visual-studio-code](https://stackoverflow.com/questions/61953992/breakpoints-not-working-debugging-react-app-in-chrome-through-visual-studio-code)  
[https://stackoverflow.com/questions/64105088/vue-3-composition-api-data-function](https://stackoverflow.com/questions/64105088/vue-3-composition-api-data-function)  
[https://stackoverflow.com/questions/67605554/how-to-use-other-store-module-getters-actions-mutations-with-vuex-4-and-typescri](https://stackoverflow.com/questions/67605554/how-to-use-other-store-module-getters-actions-mutations-with-vuex-4-and-typescri)  
[https://stackoverflow.com/questions/70704377/default-colors-given-in-tailwind-documentation-are-not-working](https://stackoverflow.com/questions/70704377/default-colors-given-in-tailwind-documentation-are-not-working)  
[https://stackoverflow.com/questions/9592740/how-can-you-sort-an-array-without-mutating-the-original-array](https://stackoverflow.com/questions/9592740/how-can-you-sort-an-array-without-mutating-the-original-array)  
[https://stackoverflow.com/questions/51210795/vue-cli-uncaught-syntaxerror-unexpected-token](https://stackoverflow.com/questions/51210795/vue-cli-uncaught-syntaxerror-unexpected-token)  
[https://tailwindcomponents.com/component/food-nutrition-label](https://tailwindcomponents.com/component/food-nutrition-label "https://tailwindcomponents.com/component/food-nutrition-label")  
[https://v3.vuejs.org/guide/composition-api-introduction.html#setup-component-option](https://v3.vuejs.org/guide/composition-api-introduction.html#setup-component-option)  
[https://v3.vuejs.org/guide/composition-api-setup.html#arguments](https://v3.vuejs.org/guide/composition-api-setup.html#arguments)  
[https://v3.vuejs.org/guide/typescript-support.html#typing-template-refs](https://v3.vuejs.org/guide/typescript-support.html#typing-template-refs)  
[https://v8.dev/features/dynamic-import](https://v8.dev/features/dynamic-import)  
[https://vuex.vuejs.org/guide/modules.html#namespacing](https://vuex.vuejs.org/guide/modules.html#namespacing)  
[https://www.danvega.dev/blog/2020/02/12/vue3-ref-vs-reactive/](https://www.danvega.dev/blog/2020/02/12/vue3-ref-vs-reactive/)  
[https://www.digitalocean.com/community/tutorials/how-to-navigate-between-views-with-vue-router](https://www.digitalocean.com/community/tutorials/how-to-navigate-between-views-with-vue-router)  
[https://www.digitalocean.com/community/tutorials/vuejs-using-typescript-with-vue](https://www.digitalocean.com/community/tutorials/vuejs-using-typescript-with-vue)  
[https://www.npmjs.com/package/vuex-module-decorators](https://www.npmjs.com/package/vuex-module-decorators "https://www.npmjs.com/package/vuex-module-decorators")  
[https://www.npmjs.com/package/vuex-persistedstate](https://www.npmjs.com/package/vuex-persistedstate "https://www.npmjs.com/package/vuex-persistedstate")  
[https://www.tailwind-kit.com/components/cta](https://www.tailwind-kit.com/components/cta)  
[https://www.tailwind-kit.com/components/shopping](https://www.tailwind-kit.com/components/shopping "https://www.tailwind-kit.com/components/shopping")  
[https://www.thisdot.co/blog/your-first-vue-3-app-using-typescript](https://www.thisdot.co/blog/your-first-vue-3-app-using-typescript)  
[https://www.tutorialsteacher.com/typescript/converting-javascript-to-typescript](https://www.tutorialsteacher.com/typescript/converting-javascript-to-typescript "https://www.tutorialsteacher.com/typescript/converting-javascript-to-typescript")  
[https://www.typescriptlang.org/docs/handbook/functions.html](https://www.typescriptlang.org/docs/handbook/functions.html "https://www.typescriptlang.org/docs/handbook/functions.html")  
[https://www.vuemastery.com/pdf/Vue-3-Cheat-Sheet.pdf](https://www.vuemastery.com/pdf/Vue-3-Cheat-Sheet.pdf "https://www.vuemastery.com/pdf/Vue-3-Cheat-Sheet.pdf")