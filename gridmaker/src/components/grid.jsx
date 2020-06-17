import React, { Component } from 'react';

class grid extends Component {
    state = { rowCount: 0, colCount: 0, rows: [] };

    addRow() {
        console.log('HI');
    }

    addCol() {

    }

    removeRow() {

    }

    removeCol() {

    }

    fillUncolored() {

    }

    fillAll(){

    }

    clear(){

    }

    render() { 
        return ( 
            <div>
                <div>
                    <button onClick={this.addRow}>Add Row</button>
                    <button onClick={this.addCol()}>Add Column</button>
                    <button onClick={this.removeRow()}>Remove Row</button>
                    <button onClick={this.removeCol()}>Remove Column</button>
                    <button onClick={this.fillUncolored()}>Fill Uncolored</button>
                    <button onClick={this.fillAll()}>Fill All</button>
                    <button onClick={this.clear()}>Clear</button>
                    <select onchange="selected()" id = "selectedID">
                        <option value="SELECT">SELECT</option>
                        <option value="Red">Red</option>
                        <option value="Blue">Blue</option>
                        <option value="Green">Green</option>
                        <option value="Yellow">Yellow</option>
                    </select>
                </div>
                <div>
                    <table>
                        <tbody>
                            <tr>
                                <td>Hi</td>
                            </tr>
                            <tr>
                                <td>Bitch</td>
                            </tr> 
                        </tbody>
                        
                    </table>
                </div>
            </div>
         );
    }
}
 
export default grid;