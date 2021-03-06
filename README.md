# ng-react-router  [![Build Status](https://travis-ci.org/angular-libs/ng-react-router.svg?branch=master)](https://travis-ci.org/angular-libs/ng-react-router)
Router to render react routes in a Angular application 

### install
`npm i ng-react-router`

### example

`react-page.js`
```javascript
const ReactPage = ()=> `<p>this is react page</p>`;

export default const routes= [{
  path:'react-page',
  component:ReactPage
}]

```


`angular-app.js`
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
        // path will be react-page                        
        return System.import('./'+path).then((module=>module.default)); 
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
# License
[![MIT License](https://img.shields.io/badge/license-MIT-blue.svg?style=flat)](/LICENSE)
