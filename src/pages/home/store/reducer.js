import {fromJS} from 'immutable'  // 防止原始state被修改，转为了immutable对象
import * as constants from './constants'

const defaultState = fromJS({
    topicList: [],
    articleList: [],
    recommendList: [],
    articlePage: 1,
    showScroll: false
});

const changeHomeData = (state, action) => {
    return state.merge({
        topicList: fromJS(action.topicList),
        articleList: fromJS(action.articleList),
        recommendList: fromJS(action.recommendList),
    })
};

const addArticleList = (state, action) => {
    return state.merge({
        'articleList': state.get('articleList').concat(fromJS(action.list)),
        'articlePage': action.nextPage
    });
};

export default (state = defaultState, action) => {
    switch (action.type) {
        case constants.CHANGE_HOME_DATA:
            // 连写set方法的语法糖
            return changeHomeData(state, action);
        case constants.ADD_ARTICLE_LIST:
            return addArticleList(state, action);
        case constants.TOGGLE_SCROLL_SHOW:
            return state.set('showScroll', action.show);
        default:
            return state;
    }
}