# ng-react-router  [![Build Status](https://travis-ci.org/angular-libs/ng-react-router.svg?branch=master)](https://travis-ci.org/angular-libs/ng-react-router)
Router to render react routes in a Angular application 

### install
`npm i ng-react-router`

### example
`app.js`
```javascript
import { provider } from 'ng-react-router'
angular.module('react-module', [
  uiRouter , 'ng-react-router'
])
.config(($stateProvider, $urlRouterProvider) => {
  "ngInject";
  const options={
      state:'react-module',
      basePath:'/react-app',
      routeResolver:(path)=> {
        return System.import(path).then((module=>module.routes)); 
      },
      templateProvider:(err,uiView)=>{
        if(err){
            return `Page not found`
        }
        return `
            <h2>React Page</h2>
            ${uiView}
        `  
      }
    };
  provider(options,$stateProvider);
})
```