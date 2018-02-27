import React, {Component} from 'react';

export default class Reply extends Component{
    render(){
        return (
            <div className="reply">
                <input type="text"/><br/>
                <textarea name="" id="" cols="30" rows="10"></textarea><br/>
                <input type="button" value="回复"/>
            </div>
        )
    }
}