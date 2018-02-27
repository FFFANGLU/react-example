import React, {Component} from 'react';
import PropTypes from 'prop-types';

import Oneday from "oneday/Oneday.js";

let data = [
    {date: '今天', time: '11:20', name: '11', content: '你11好', avatar: require("img/1.png")},
    {
        date: '今天', time: '11:20', name: '11', content: '你12好', avatar: require("img/2.png"),
        subComment: [
            { time: '11:20',name: 'Sal', content: '你21好', avatar: require("img/2.png")},
            { time: '11:20',name: 'Jenny', content: '你22好', avatar: require("img/3.png")},
            { time: '11:20',name: 'Elliot', content: '你23好', avatar: require("img/1.png")},
            { time: '11:20',name: 'Molly', content: '你24好', avatar: require("img/2.png")}
        ]
    },
    {date: '今天', time: '11:20', name: 'Molly', content: '你13好', avatar: require("img/2.png")},
    {date: '今天', time: '11:20', name: 'Elliot', content: '你14好', avatar: require("img/2.png")},
    {date: '昨天', time: '11:20', name: 'Sal', content: '你好', avatar: require("img/3.png")},
    {date: '昨天', time: '11:20', name: 'Mike', content: '你好', avatar: require("img/3.png")},
    {date: '前天', time: '11:20', name: 'Sal', content: '你1好', avatar: require("img/1.png")},
    {
        date: '前天', time: '11:20', name: 'Hurley', content: '你2好', avatar: require("img/1.png"),
        subComment: [
            {
                time: '11:20',name: 'Sal', content: '你3好', avatar: require("img/2.png"),
                subComment: [
                    {
                        time: '11:20',name: 'Sal', content: '你4好', avatar: require("img/3.png"),
                        subComment: [
                            { time: '11:20',name: 'Molly', content: '你5好', avatar: require("img/2.png")}
                        ]
                    },
                    { time: '11:20',name: 'Jenny', content: '你6好', avatar: require("img/1.png")},
                    { time: '11:20',name: 'Elliot', content: '你7好', avatar: require("img/1.png")},
                    { time: '11:20',name: 'Molly', content: '你8好', avatar: require("img/2.png")}
                ]
            }
        ]
    },
    {date: '前天',  time: '11:20', name: 'Ben', content: '你9好', avatar: require("img/1.png")},
    {date: '前天',  time: '11:20', name: 'Jane', content: '你10好', avatar: require("img/2.png")}
];

let todayarr =[];
let yestarr =[];
let yebarr =[];
data.map( (ele,i)=>{
    if(ele.date == '今天'){
        todayarr.push(ele);
    }else if(ele.date == '昨天'){
        yestarr.push(ele);
    }else if(ele.date == '前天'){
        yebarr.push(ele);
    }
});

let todayarr2 = todayarr.map((ele,i)=>{
    return <Oneday key={i} {...ele}/>
});
let yestarr2 = yestarr.map((ele,i)=>{
    return <Oneday key={i} {...ele}/>
});
let yebarr2 = yebarr.map((ele,i)=>{
    return <Oneday key={i} {...ele}/>
});


export default class Content extends Component{
    getChildContext(){
        return {
            et:"heihei"
        }
    }
    render() {
        return (
                <div>
                    <div className="top">今天</div>
                    {todayarr2}
                    <div className="top">昨天</div>
                    {yestarr2}
                    <div className="top">前天</div>
                    {yebarr2}
                </div>
            )
        }
    }

Content.childContextTypes = {
    et:PropTypes.string
}