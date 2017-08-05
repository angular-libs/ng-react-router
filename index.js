import angular from 'angular'
import React from 'react'
import { render } from 'react-dom'
import _ from 'lodash'

const templateProvider = (err,uiView)=>{
  if(err){
    throw err;
  } 
  const tpl= `${uiView}`;
  return tpl;
}
let options ={
  state:'react',basePath:'/react',templateProvider:templateProvider
};
class Link extends React.Component {
  render () {
    return React.createElement('a', {
      href: options.basePath + this.props.to,
      ...this.props
    })
  }
}
let _injector
const browserHistory = {
  push (args) {
    const state = _injector.get('$state')
    const path = _.trimStart(args.pathname + args.search, '/');
    state.go(options.state, { path });
  }
}

window.ReactRouter = {
  Link,
  browserHistory
}

export const provider= (opts,$stateProvider) =>{
  options=routeFactory.configure(opts);
  const {state , basePath ,routeResolver, templateProvider } = options;
  $stateProvider.state(state, {
    url: basePath+'/:path',
    params : {path : {type : "string",raw : true}},
    templateProvider: function ($timeout, $stateParams) {
      const statePath = _.trimStart($stateParams.path, '/');
      return routeResolver(statePath).then((routes)=>{
        routeFactory.registerRoute(routes.path,routes);
        return new Promise((resolve,reject)=>{
            let router=`<react-router name="${routes.path}" path="${statePath}"></react-router>`;
            resolve(templateProvider(null,router));
        });
      },(err)=>{
        return new Promise((resolve,reject)=>{
            resolve(templateProvider(err));
        });
      });
    }
  })
}
const routeFactory = (() => {
  const routes = {}
  
  return {
    configure: (opts) =>{
      return Object.assign({},options,opts);
    },
    getRoute: (name) => {
      if (routes[name]) {
        return routes[name].promise
      }else {
        routes[name] = {}
        routes[name].promise = new Promise((resolve) => {
          routes[name].resolver = resolve
        })
      }
      return routes[name].promise
    },
    registerRoute: (name, component) => {
      if (routes[name]) {
        return routes[name].resolver(component)
      }else {
        routes[name] = {}
        routes[name].promise = new Promise((resolve) => {
          routes[name].resolver = resolve
          resolve(component)
        })
      }
      return routes[name].promise
    }
  }
})()
const resolveRoute = (routePath, routes, query ) =>{
  if(routePath.length==0){
    return null;
  }
  const path = routePath.shift();
  const { component, childRoutes, indexRoute } = routes;
  let children = null;
  if(routePath.length===0 && indexRoute){
    children=React.createElement(indexRoute.component, null, null);
  }else{
    const matchRoutes=(childRoutes||[]).filter((route)=>route.path==routePath[0]);
    children =resolveRoute(routePath,matchRoutes[0], query);
  }
  return React.createElement(component, null, children)
}
const reactRouter = function ($injector) {
  _injector = $injector
  return {
    restrict: 'E',
    replace: true,
    link: function (scope, elem, attrs) {
      routeFactory.getRoute(attrs.name).then((routes) => {
        const tmp =attrs.path.split('?');
        const query=tmp[1]
        const path = tmp[0].split('/');
        const tree = resolveRoute(path,routes, query);
        render(tree, elem[0])
      })
      scope.$on('$destroy', function () {
        if (!attrs.onScopeDestroy) {
          ReactDOM.unmountComponentAtNode(elem[0])
        } else {
          scope.$eval(attrs.onScopeDestroy, {
            unmountComponent: ReactDOM.unmountComponentAtNode.bind(this, elem[0])
          })
        }
      })
    }
  }
};
angular.module('ng-react-router', []).directive('reactRouter', ['$injector', reactRouter])
