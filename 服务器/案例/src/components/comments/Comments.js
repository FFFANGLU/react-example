import React, {Component} from 'react';
import PropTypes from 'prop-types';

import Reply from 'reply/Reply.js';

let contextTypes = {
    et:PropTypes.string
}

export default class Comments extends Component{
    constructor(){
        super();
        this.state = {
            isReply:false
        }
        this.isReply = this.isReply.bind(this);
    }
    isReply(){
        let {isReply} = this.state;
        isReply = !isReply;
        this.setState({
            isReply
        })
    }
	render(){
        let {avatar,name,content,subComment} = this.props;
        let {et} = this.context;
        let {isReply} = this.state;
		return (
			<div className="box-bottom">
                <img src={avatar} alt=""/>
                <div className="box-bottom-reply">
                    <p>{name}</p>
                    <p>{content}</p>
                    <a
                        className="gray" href="javascript:;"
                        onClick={this.isReply}
                    >{`回复${et}`}</a>
                    {
                        isReply?<Reply/>:""
                    }
                </div>
                {
                    subComment?(
                        subComment.map((elt,i)=>{
                            return (
                                <Comments key={i} {...elt}></Comments>
                            )
                        })
                    ):null
                }
			</div>
		)
	}
}
Comments.propTypes = {
    avatar: PropTypes.string,
    name: PropTypes.oneOf(['Sal', 'Jenny','Elliot','Molly','Hurley','Mike','Ben','Jane','11']),
    content: PropTypes.string,
    subComment: PropTypes.array
};
Comments.contextTypes = contextTypes;
