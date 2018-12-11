import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import {CSSTransition} from 'react-transition-group';
import {
    HeaderWrapper,
    Logo,
    Nav,
    NavItem,
    NavSearch,
    SearchInfo,
    SearchInfoList,
    SearchInfoTitle,
    SearchInfoSwitch,
    SearchInfoItem,
    Addition,
    Button,
    SearchWrapper,
} from './style';
// react相关,组件和store建立连接
import {actionCreators} from './store';
import {connect} from 'react-redux';

class Header extends Component {
    getListArea() {
        const {focused, list, page, totalPage, mouseIn, handleMouseEnter, handleMouseLeave, handleChangePage} = this.props;
        // 搜索栏的换页设置
        const newList = list.toJS();  //immutable对象转化成JS对象
        const pageList = [];
        if (newList.length) {
            for (let i = (page - 1) * 10; i < page * 10; i++) {  // 比如第一页是显示0到9条
                if (newList[i]) {
                    pageList.push(
                        <SearchInfoItem key={newList[i]}>{newList[i]}</SearchInfoItem>
                    )
                }
            }
        }
        if (focused || mouseIn) {
            return (
                <SearchInfo onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
                    <SearchInfoTitle>
                        热门搜索
                        <SearchInfoSwitch onClick={() => {
                            handleChangePage(page, totalPage, this.spinIcon)
                        }}>
                            <i ref={(icon) => {
                                this.spinIcon = icon
                            }} className={"iconfont spin"}>&#xe851;</i>换一批
                        </SearchInfoSwitch>
                    </SearchInfoTitle>
                    <SearchInfoList>
                        {pageList}
                    </SearchInfoList>
                </SearchInfo>
            )
        } else {
            return null
        }
    };

    render() {
        const {focused, handleInputFocus, handleInputBlur, list} = this.props;
        return (
            <HeaderWrapper>
                <Link to={'/'}>
                    <Logo/>
                </Link>
                <Nav>
                    <NavItem className={"left active"}>首页</NavItem>
                    <NavItem className={"left"}>下载</NavItem>
                    <NavItem className={"right"}>登录</NavItem>
                    <NavItem className="right">
                        <i className={"iconfont"}>&#xe636;</i>
                    </NavItem>
                    {/*搜索栏*/}
                    <SearchWrapper>
                        <CSSTransition in={focused} timeout={200} classNames={"slide"}>
                            <NavSearch
                                className={focused ? 'focused' : ''}
                                onFocus={() => {
                                    handleInputFocus(list)
                                }}
                                onBlur={handleInputBlur}
                            />
                        </CSSTransition>
                        <i className={focused ? 'focused iconfont zoom' : 'iconfont zoom'}>&#xe614;</i>
                        {/*根据focus来决定下拉框是否显示*/}
                        {this.getListArea()}
                    </SearchWrapper>
                </Nav>
                <Addition>
                    <Button className={"writing"}>
                        <i className={"iconfont"}>&#xe615;</i>
                        写文章
                    </Button>
                    <Button className={"reg"}>注册</Button>
                </Addition>
            </HeaderWrapper>
        )
    }
}

// 把store里的state映射到props里
const mapStateToProps = (state) => {
    return {
        // 首先是由于子组件的store引用了immutable，所以不能用.语法来获取
        // 但是此时根store还是用.语法获取的，为了保持数据格式统一，又在根store里将redux替换为了redux-immutable
        focused: state.get('header').get('focused'),
        list: state.getIn(['header', 'list']),
        page: state.getIn(['header', 'page']),
        totalPage: state.getIn(['header', 'totalPage']),
        mouseIn: state.getIn(['header', 'mouseIn'])
    }
};

//把store里的dispatch映射到props里,改变state需要dispatch一个action
const mapDispatchToProps = (dispatch) => {
    return {
        handleInputFocus(list) {
            // 传入list，判断size避免每次focus都请求
            list.size === 0 && dispatch(actionCreators.getList());
            dispatch(actionCreators.searchFocus())
        },
        handleInputBlur() {
            dispatch(actionCreators.searchBlur())
        },
        handleMouseEnter() {
            dispatch(actionCreators.mouseEnter())
        },
        handleMouseLeave() {
            dispatch(actionCreators.mouseLeave())
        },
        // 换一批
        handleChangePage(page, totalPage, spin) {
            // 除去非数字
            let originAngle = spin.style.transform.replace(/[^0-9]/ig, ' ');
            if (originAngle) {
                originAngle = parseInt(originAngle, 10);
            } else {
                originAngle = 0;
            }
            spin.style.transform = `rotate(${originAngle + 360}deg)`;
            if (page < totalPage) {
                dispatch(actionCreators.changePage(page + 1))
            } else {
                dispatch(actionCreators.changePage(1))
            }
        }
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(Header);