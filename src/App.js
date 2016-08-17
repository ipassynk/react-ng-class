import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';
import classNames from 'classnames';

class App extends Component {
    constructor() {
        super();
        this.state = {colors: {red: false}};
        this.changeColor = this.changeColor.bind(this);
    }

    changeColor() {
        let colors = {red: !this.state.colors.red};
        this.setState({colors});
    }

    render() {
        return (
            <div className="App">
                <div className="App-header">
                    <img src={logo} className="App-logo" alt="logo"/>
                    <h2>Welcome to React</h2>
                </div>
                <p className="App-intro" className={classNames(['App-intro',this.state.colors])}
                   onClick={this.changeColor}>
                    click to change the color
                </p>
            </div>
        );
    }
}

export default App;
