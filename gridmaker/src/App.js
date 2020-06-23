import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import './css/App.css';
import Grid from './components/Grid'

class App extends Component{
    constructor(){
        super();
        this.state={
            rows: 0,
            cols: 0,
            backgroundColor: "white"
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
        if (this.state.rows === 0) {
            this.setState({rows:0, cols:0}) //if grid is already empty
        } else if (this.state.rows === 1) {
            this.setState({rows:0, cols:0}); //setting state to make grid empty
        } else {
            this.setState({rows:this.state.rows - 1}); //if not empty, row - 1
        }

    }

    //remove cols
    removeCol = () => {
        if (this.state.cols === 0) {
            this.setState({rows:0, cols:0}) //if grid is already empty
        } else if (this.state.cols === 1) {
            this.setState({rows:0, cols:0}); //setting state to make grid empty
        } else {
            this.setState({cols:this.state.cols - 1}); //if not empty, cols - 1
        }
    }

    //set color on change of selection
    selectColor = (selected) => {
        this.setState({color: selected.target.value})
    }

    //fills blank tiles to selected color
    fillUncolored = () => {
        //console.log(ReactDOM.findDOMNode(this).childNodes); //used to find childNodes, 8 is the table node
        //console.log(ReactDOM.findDOMNode(this).childNodes[8]); //there is only one childNode, 0 which is the tbody

        let table = ReactDOM.findDOMNode(this).childNodes[8].childNodes[0].childNodes;
        for(let i = 0; i < this.state.rows; i++){//iterating through the trs which contain tds
            for(let j = 0; j < this.state.cols; j++){
                if (table[i].childNodes[j].style.backgroundColor === "white") { //only uncolored cells in the grid will be colored
                    table[i].childNodes[j].style.backgroundColor = this.state.color;
                }
            }
        }
    }

    //sets all grid cells to selected color
    fillAll = () => {
        let table = ReactDOM.findDOMNode(this).childNodes[8].childNodes[0].childNodes;
        for(let i = 0; i < this.state.rows; i++){
            for(let j = 0; j < this.state.cols; j++)
                table[i].childNodes[j].style.backgroundColor = this.state.color;
        }
    }

    //sets all grid cells to white
    clearAll = () => {
        let table = ReactDOM.findDOMNode(this).childNodes[8].childNodes[0].childNodes;
        for(let i = 0; i < this.state.rows; i++){
            for(let j = 0; j < this.state.cols; j++)
                table[i].childNodes[j].style.backgroundColor = "white";
        }
    }

    render(){
        return(
            <div className="App">
                <button className="addRow" onClick={this.addRow}>Add Row</button>
                <button className="addCol" onClick={this.addCol}>Add Col</button>
                <button className="removeRow" onClick={this.removeRow}>Remove Row</button>
                <button className="removeCol" onClick={this.removeCol}>Remove Col</button>
                <button className="fillUncolored" onClick={this.fillUncolored}>Fill All Uncolored</button>
                <button className="fillAll" onClick={this.fillAll}>Fill All</button>
                <button className="clearAll" onClick={this.clearAll}>Clear</button>
                <select onChange={this.selectColor} id = "selectedID">
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
