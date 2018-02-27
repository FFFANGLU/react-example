import React, {Component} from 'react';
import ReactDOM from 'react-dom';

import Top from 'top/Top.js';
import Content from "./components/content/Content";
import Input from "./components/input/Input";


require('style/main.css');
require('style/common.css');
require('style/main.less');

ReactDOM.render(
	/*<div className="box">
		<Top/>
		<Content/>
	</div>*/
	<Input value1="nihao"/>,
	document.getElementById('root')
);

if(module.hot){ 
    module.hot.accept()
}
