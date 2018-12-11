import styled from 'styled-components';
import logoPic from '../../static/logo.png'

export const HeaderWrapper = styled.div`
    position:relative;
    height: 56px;
    border-bottom:1px solid #f0f0f0;
`;

export const Logo = styled.div`
    position: absolute;
    top: 0;
    left: 0;
    display: block;
    height: 56px;
    width:100px;
    background: url(${logoPic});  //图片引用
    background-size: contain;
`;

export const Nav = styled.div`
    width:960px;
    height:100%;
    margin:0 auto;
    padding-right: 80px;
    box-sizing: border-box;
`;

export const NavItem = styled.div`
    line-height: 56px;
    padding: 0 15px;
    font-size: 17px;
    &.left{
        float:left;
    }
    &.right{
      float: right;
      color: #969696;
    }
    &.active{
      color: #ea6f5a;
    }
`;

export const SearchWrapper = styled.div`
  float: left;  // 前面都浮动了，这里不加会占满整个div
  position: relative;
   .zoom {  //不加& .就表示是子元素，加&同级
    position: absolute;
    width: 30px;
    height: 30px;
    line-height: 30px;
    text-align: center;
    border-radius: 15px;
    right: 5px;
    bottom: 5px;
    &.focused{
      color:#fff;
      background: #777;
    }
  }
`;

export const NavSearch = styled.input.attrs({placeholder: '搜索'})`
  width:160px;
  height: 38px;
  margin-top: 9px;
  margin-left: 20px;
  padding: 0 30px 0 20px;
  box-sizing: border-box;
  font-size: 14px; 
  border:none;
  background: #eee; 
  outline: none;  // 去除聚焦时自带的蓝色边框
  border-radius:19px;
  color:#666;
  &::placeholder{
    color: #999;
  }
  &.focused {
     width: 240px;
  }
   // react动画
  &.slide-enter{
     transition: all .2s ease-out;  // 和JSX的timeout参数对应
  }
  &.slide-enter-active{
    width:240px;
  }
  &.slide-exit-exit{
    transition: all .2s ease-out;
  }
  &.slide-exit-active{
    width:160px;
  }
`;

export const SearchInfo = styled.div`
  position: absolute;
  left: 0;
  top: 56px;
  width: 240px;
  padding: 0 20px;
  box-shadow: 0 0 8px rgba(0,0,0,.2);
  background: #fff;
`;

export const SearchInfoTitle = styled.div`
  margin: 20px 0 15px 0;
  line-height: 20px;
  font-size: 14px;
  color: #969696;
`;

export const SearchInfoItem = styled.a`
display: block;
float: left;
  line-height: 20px;
  padding: 0 5px;
  margin:0 10px 15px 0;
  font-size: 12px;
  border: 1px solid #ddd;
  color: #787878;
  border-radius: 3px;
`;

export const SearchInfoSwitch = styled.div`
   float: right;
   font-size: 13px;
   cursor: pointer;
   .spin{
   font-size: 12px;
   margin-right: 12px;
   }
   // 缓一缓的动画
   .spin{
      display: block;
      float: left;
      font-size: 12px;
      margin-right: 2px;
      transition: all .2s ease-in ;
      transform:rotate(0deg);
      transform-origin:center center;
   }
`;

export const SearchInfoList = styled.div`
  overflow: hidden;
`;

export const Addition = styled.div`
  position: absolute;
  right: 0;
  top: 0;
  height: 56px;
`;

export const Button = styled.div`
   float: right;
   line-height: 38px;
   border-radius: 19px;
   margin-top: 9px;
   border:1px solid #ec6149;
   margin-right: 20px;
   padding: 0 20px;
   font-size: 14px;
   &.reg{
     color: #ec6149;
   }
   &.writing{
     color: #fff;
     background: #ec6149;
   }
`;
