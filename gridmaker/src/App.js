import React, { Component } from 'react';
import './css/App.css';
import Grid from './Components/Grid'

class App extends Component{
    constructor(){
        super();
        this.state={
            rows: 0,
            cols: 0,
        }
    }

    //add row through arrow function
    addRow = () => {
        //get current rows and cols
        let {rows, cols} = this.state;
        if (cols === 0) {
            //setting state to so rows is updated to +1
            this.setState({ rows: rows + 1, cols: cols + 1});
        } else {
            //only increase row if grid contains something
            this.setState({rows: rows + 1});
        }
    }


    addCol = () => {
        //get current rows and cols
        let {rows, cols} = this.state;
        if (rows === 0) {
            //setting state to update cols
            this.setState({cols:cols + 1, rows:rows + 1});
        } else {
            //only increase col if grid contains something
            this.setState({cols:cols + 1});
        }
    }

    render(){
        return(
            <div className="App">
                <button className="addRow" onClick={this.addRow}>Add Row</button>
                <button className="addCol" onClick={this.addCol}>Add Col</button>
                <button className="removeRow">Remove Row</button>
                <button className="removeCol">Remove Col</button>
                <button className="fillUncolored">Fill All Uncolored</button>
                <button className="fillAll">Fill All</button>
                <button className="clearAll">Clear</button>
                <select onchang="" id = "selectedID">
                    <option value="SELECT">SELECT</option>
                    <option value="Red">Red</option>
                    <option value="Green">Green</option>
                    <option value="Blue">Blue</option>
                    <option value="Yellow">Yellow</option>
                </select>

                <Grid
                    rows={this.state.rows}
                    cols={this.state.cols}
                />
            </div>
        )
    }
}

export default App;
