import React, {Component} from 'react';
import Header from './common/header';
import {Globalstyle} from './style'
import {GlobalFontStyle} from './static/iconfont/iconfont'
// redux相关
import {Provider} from 'react-redux';
import store from './store';

class App extends Component {
    render() {
        return (
            <div id="root">
                {/*全局样式，因为设置在了App.js上*/}
                <Globalstyle/>
                <GlobalFontStyle/>
                {/*用react-redux的Provider包裹需要提供store的组件*/}
                <Provider store={store}>
                    <Header/>
                </Provider>
            </div>
        );
    }
}

export default App;
