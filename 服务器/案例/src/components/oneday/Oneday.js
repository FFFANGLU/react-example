import React, {Component} from 'react';

import Comments from 'comments/Comments.js';

export default class Oneday extends Component{
    render(){
        let {avatar,name,content,subComment} = this.props;
        return(
            <div>
                <Comments name={name} avatar={avatar} content={content} subComment={subComment}/>
            </div>
        )
    }
}