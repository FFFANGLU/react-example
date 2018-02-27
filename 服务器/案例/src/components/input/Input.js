import React ,{Component} from 'react';



export default class Input extends Component{
    constructor(props){
        super(props);
        this.state={
            value2:props.value1
        }
        this.cchange=this.cchange.bind(this);
    }
    cchange(e){
        let value = e.target.value;
        this.setState({
            value2:value
        })
    }
    render(){
        let {value1} = this.props;
        let {value2} = this.state;
        let arr = [];
        let n = 1;
        while(n<=100){
            arr.push(<input key={n} value={value2}
                            onChange={this.cchange}/>);
            n++;
        }
        return (
            <div className="inputtest">
                {arr}
            </div>
        )
    }
}