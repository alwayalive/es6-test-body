//框架组件
import React from 'react'
import { render } from 'react-dom'
import { Router,Route,browserHistory,hashHistory,IndexRoute } from 'react-router'
import { createStore, applyMiddleware } from 'redux'
import { Provider } from 'react-redux'

//自定义组件
import DevTools from 'store/dev-tools'
import router from './router'
import configureStore from 'store/configure-store'

//样式
import 'styles/index.less'

let store = configureStore( browserHistory );
// store.subscribe( ()=> {
// 	console.info(store.getState())
// });

render(
	<Provider store = { store }>
		<Router history = { browserHistory } routes={ router }/>
	</Provider>
	,
	document.getElementById('container')
);

render(
	<Provider store={store}>
		<DevTools/>
	</Provider>,
  document.getElementById('devtools')
)