import React, { PureComponent } from 'react';
import { DetailWrapper, Header, Content } from "./style";
import { connect } from 'react-redux';
import { actionCreators } from './store'
//解决采用react-loadable后无法获取到路由传递过来的id值
import {withRouter} from 'react-router-dom'  

class Detail extends PureComponent {
    render() {
        return (
            <DetailWrapper>
                <Header>{this.props.title}</Header>
                {/* 注意用dangerouslySetInnerHTML确保html被解析正确 */}
                <Content dangerouslySetInnerHTML={{ __html: this.props.content }} />
            </DetailWrapper>
        )
    }

    componentDidMount() {
        // 每次进入详情页时获取id值，这个值来自路由设置的:id,然后由List组件传递进来
        // 来向后端传递id值
        this.props.getDetail(this.props.match.params.id);
    }
}

const mapState = (state) => ({
    title: state.getIn(['detail', 'title']),
    content: state.getIn(['detail', 'content'])
});

const mapDispatch = (dispatch) => ({
    getDetail(id) {
        dispatch(actionCreators.getDetail(id))
    }
});

export default connect(mapState, mapDispatch)(withRouter(Detail));
