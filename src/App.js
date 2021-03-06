import React, { Component } from 'react';
import Header from './common/header';
import { Globalstyle } from './style'
import { GlobalFontStyle } from './static/iconfont/iconfont'
// redux相关
import { Provider } from 'react-redux';
import store from './store';
//路由和组件相关
import { BrowserRouter, Route } from 'react-router-dom'
import Home from './pages/home'
import Detail from './pages/detail/loadable'  // 异步加载Detail组件
import Login from './pages/login'
import Write from './pages/write'

class App extends Component {
    render() {
        return (
            <div id="root">
                {/*全局样式，因为设置在了App.js上*/}
                <Globalstyle />
                <GlobalFontStyle />
                {/*用react-redux的Provider包裹需要提供store的组件*/}
                <Provider store={store}>
                    {/*路由*/}
                    <BrowserRouter>
                        <div>
                            <Header />
                            <Route path={'/'} exact component={Home}></Route>
                            <Route path={'/login'} exact component={Login}></Route>
                            <Route path={'/detail/:id'} exact component={Detail}></Route>
                            <Route path={'/write'} exact component={Write}></Route>
                        </div>
                    </BrowserRouter>
                </Provider>
            </div>
        );
    }
}

export default App;
