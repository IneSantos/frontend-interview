
<br/>

The frontend was developed using VueJS. And it was initialized using [Vue-CLI](https://cli.vuejs.org/guide/creating-a-project.html#vue-create).

## Project setup

First Clone the project using:

```
git clone https://github.com/IneSantos/frontend-interview.git
```

This will create a folder with the name frontend-interview, navigate inside the folder and run: 

```
npm install
```

This command will install all the dependencies used in the project. You can check them inside package.json file, in the dependencies section.

<br/>
<br/>
<br/>

## Compiles and hot-reloads for development

This project works with hot-reload thanks to vue-loader. With hot reload enabled, when we edit a *.vue file, all instances of that component will be swapped in without reloading the page. It even preserves the current state of your app and these swapped components. This dramatically improves the development experience when we are tweaking the templates or styling of your components.
To use hot-reload you just need to run: 

```
npm run serve
```

### Compiles and minifies for production

To create a dist folder with the project to release to production you just need to:

```
npm run build
```

### Run your unit tests

To run all the unit tests implemented for this project you need to use this command:

```
npm run test:unit
```

### Lints and fixes files

Thanks to ESLint we can check the ```<template>``` and ```<script>``` of ```.vue``` files, as well as Vue code in .js files.
It detects syntax errors. Finds the wrong use of Vue.js Directives. Finds the violation for Vue.js Style Guide.

```
npm run lint
```

<br/>
<br/>
<br/>

### Customize configuration
Lastly, this plugin offers a ton of configurations so if you want to check them just go to [Configuration Reference](https://cli.vuejs.org/config/).
