import styled from 'styled-components';

export const HomeWrapper = styled.div`
  overflow: hidden;  // 清除BFC
  width: 960px;
  margin: 0 auto;
`;

export const HomeLeft = styled.div`
  margin-left: 15px;
  padding-top: 30px;
  width: 625px;
  float: left;
  .banner-img{
    width: 625px; 
    height: 270px;
  }
`;

export const HomeRight = styled.div`
  width: 280px;
  float: right;
`;

// Topic 样式
export const TopicWrapper = styled.div`
  overflow: hidden;
  padding: 20px 0 10px 0;
  margin-left: -18px;
  border-bottom: 1px solid #dcdcdc;
`;

export const TopicItem = styled.div`
  float: left;
  background: #f7f7f7;
  height: 32px;
  margin-left: 18px;
  margin-bottom: 18px;
  line-height: 32px;
  padding-right: 10px;
  font-size: 14px;
  color: #000;
  border:1px solid #dcdcdc;
  border-radius: 4px;
  .topic-pic{
    display: block;
    float: left;
    width: 32px;
    height: 32px;
    margin-right: 10px;
  }
`;

// List样式
export const ListItem = styled.div`
  overflow: hidden;
  padding: 20px 0;
  border-bottom: 1px solid #dcdcdc;
  .pic{
    display: block;
    width: 125px;
    height: 100px;
    float: right;
    border-radius: 10px;
  } 
`;

export const ListInfo = styled.div`
  width: 500px;
  float: left;
  .title{
     line-height: 27px;
     font-size: 18px;
     font-weight: bold;
     color: #333;
  }
  .desc{
    line-height: 18px;
    font-size: 13px;
    color: #999;
  }
`;

// Recommend
export const RecommendWrapper = styled.div`
    margin: 30px 0;
    width: 280px;
`;

export const RecommendItem = styled.div`
    width: 280px;
    height: 50px;
    background: url(${(props) => props.imgUrl});  // 确保每个Item的图片是不同的
    background-size: contain;
`;

// LoadMore组件
export const LoadMore = styled.div`
  width:100%;
  height: 40px;
  margin: 30px 0;
  line-height: 40px;
  background: #a5a5a5;
  text-align: center;
  border-radius: 20px;
  color: #fff;
  cursor: pointer;
`;

// BackTop组件
export const BackTop = styled.div`
  position: fixed;
  right: 100px;
  bottom: 100px;
  width: 60px;
  height: 60px;
  line-height: 60px;
  text-align: center;
  border:1px solid #ccc;
  font-size: 14px;
`;