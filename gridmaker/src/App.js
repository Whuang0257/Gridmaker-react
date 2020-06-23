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

    //add row through arrow function does not bind own this
    addRow = () => {
        let {rows, cols} = this.state; //get current rows and cols
        if (cols === 0) {
            this.setState({ rows: rows + 1, cols: cols + 1}); //setting state to so rows is updated to +1
        } else {
            this.setState({rows: rows + 1}); //only increase row if grid contains something
        }
    }

    //add coll
    addCol = () => {
        let {rows, cols} = this.state; //get current rows and cols
        if (rows === 0) {
            this.setState({cols:cols + 1, rows:rows + 1}); //setting state to update cols
        } else {
            this.setState({cols:cols + 1}); //only increase col if grid contains something
        }
    }

    //remove row
    removeRow = () => {
        if (this.state.rows === 1) {
            this.setState({rows:0, cols:0}); //setting state to make grid empty
        } else {
            this.setState({rows:this.state.rows - 1}); //if not empty, row - 1
        }
    }

    //remove cols
    removeCol = () => {
        if (this.state.rows === 1) {
            this.setState({rows:0, cols:0}); //setting state to make grid empty
        } else {
            this.setState({rows:this.state.cols - 1}); //if not empty, col - 1
        }
    }


    render(){
        return(
            <div className="App">
                <button className="addRow" onClick={this.addRow}>Add Row</button>
                <button className="addCol" onClick={this.addCol}>Add Col</button>
                <button className="removeRow" onClick={this.removeRow}>Remove Row</button>
                <button className="removeCol"onClick={this.removeCol}>Remove Col</button>
                <button className="fillUncolored">Fill All Uncolored</button>
                <button className="fillAll">Fill All</button>
                <button className="clearAll">Clear</button>
                <select onchange="" id = "selectedID">
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
