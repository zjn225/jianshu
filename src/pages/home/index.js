import React, {PureComponent} from 'react';
import {connect} from 'react-redux'
import {HomeWrapper} from './style'
import {HomeLeft} from './style'
import {HomeRight} from './style'
import Topic from './components/Topic'
import List from './components/List'
import Recommend from './components/Recommend'
import Writter from './components/Writter'
import {actionCreators} from './store'
import {BackTop} from './style'

class Home extends PureComponent {
    handleScrollTop() {
        window.scrollTo(0, 0)
    }

    render() {
        return (
            <HomeWrapper>
                <HomeLeft>
                    <img className={'banner-img'}
                         src="//upload.jianshu.io/admin_banners/web_images/4582/2db83cc6f08d13c2f83002238ca32b784266c4fb.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/1250/h/540"
                         alt=""/>
                    <Topic/>
                    <List/>
                </HomeLeft>
                <HomeRight>
                    <Recommend/>
                    <Writter/>
                </HomeRight>
                {/*回到顶部*/}
                {this.props.showScroll ? <BackTop onClick={this.handleScrollTop}>回到顶部</BackTop> : null}
            </HomeWrapper>
        )
    }

    componentDidMount() {
        this.props.changeHomeData();
        this.bindEvents();
    }

    bindEvents() {
        window.addEventListener('scroll', this.props.changeScrollShow)
    }

    componentWillUnmount() {
        window.removeEventListener('scroll', this.props.changeScrollShow)
    }
}

const mapState = (state) => ({
    showScroll: state.getIn(['home', 'showScroll'])
});

const mapDispatch = (dispatch) => ({
    changeHomeData() {
        // getHomeInfo是返回了一个函数的action，因此dispatch看到不是对象时会
        //先执行函数，然后再进入store，得益于react-thunk
        dispatch(actionCreators.getHomeInfo());
    },
    //回到顶部相关
    changeScrollShow() {
        if (document.documentElement.scrollTop > 180) {
            dispatch(actionCreators.toggleTopShow(true))
        } else {
            dispatch(actionCreators.toggleTopShow(false))
        }
    }
});

export default connect(mapState, mapDispatch)(Home);