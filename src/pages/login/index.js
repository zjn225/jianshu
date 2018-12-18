import React, { PureComponent } from 'react';
import {Redirect} from 'react-router'; // 重定向组件
import { connect } from 'react-redux';
import { LoginWrapper, LoginBox, Input, Button } from './style';
import { actionCreators } from './store';

class Login extends PureComponent {
    render() {
        const {loginStatus} = this.props;
        if(!loginStatus){
            return (
                <LoginWrapper>
                    <LoginBox>
                        <Input placeholder='账号' ref={(input) => { this.account = input }} />
                        <Input placeholder='密码' ref={(input) => this.password = input} type='password' />
                        <Button onClick={() => { this.props.login(this.account, this.password) }}>登录</Button>
                    </LoginBox>
                </LoginWrapper>
            )
        }else{
            // 重定向到首页
            return <Redirect to='/'/>
        }
    }

    componentDidMount() {

    }
}

const mapState = (state) => ({
    loginStatus: state.getIn(['login', 'login'])
})

const mapDispatch = (dispatch) => ({
    login(accountElem, passwordElem) {
        dispatch(actionCreators.login(accountElem.value, passwordElem.value))
    }
})

export default connect(mapState, mapDispatch)(Login);
