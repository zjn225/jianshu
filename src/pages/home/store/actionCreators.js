import axios from 'axios';
import * as constants from './constants';

const changeHomeData = (result) => ({
    type: constants.CHANGE_HOME_DATA,
    topicList: result.topicList,
    articleList: result.articleList,
    recommendList: result.recommendList
});

const addHomeList = (list, nextPage) => ({
    type: constants.ADD_ARTICLE_LIST,
    list: list,
    nextPage
});

// 获取首页数据
export const getHomeInfo = () => {
    return (dispatch) => {
        axios.get('/api/home.json').then((res) => {
            const result = res.data.data;
            dispatch(changeHomeData(result))
        });
    }
};

// 更多文章
export const getMoreList = (page) => {
    return (dispatch) => {
        axios.get('/api/homeList.json?page=' + page).then((res) => {
            const result = res.data.data;
            dispatch(addHomeList(result, page + 1))
        });
    }
};

//回到顶部
export const toggleTopShow = (show) => ({
    type: constants.TOGGLE_SCROLL_SHOW,
    show
});