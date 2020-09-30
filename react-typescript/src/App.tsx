import React from 'react';
import logo from './logo.svg';
import './App.css';

class App extends React.Component<{}, { num1: any,num2: any}>{
    // state:object;
    constructor(props:any) {
        super(props);
        this.state = {
            num1:'',
            num2:'',
        }
    }
    handleChange2=(e:unknown)=>{
        this.setState({num2:(e.target.a2)})
    }
    handleChange1=(e:unknown)=>{
        this.setState({num1:(e.target.a1)})
    }
    handleClick=()=>{
        console.log(this.state)
        alert("number = "+(this.state.num1+this.state.num2))
    }
    render() {
        return (
            <div className="App">
                <header className="App-header">
                    <input type="text" name={"a1"} value={this.state.num1} onChange={this.handleChange1}/>
                    <input type="text" name={"a2"} value={this.state.num2} onChange={this.handleChange2}/>
                    <button onClick={this.handleClick}>Add</button>
                </header>
            </div>
        );
    }
}

export default App;
