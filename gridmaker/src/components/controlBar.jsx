import React, { Component } from 'react';

class controlBar extends Component {
    render() { 
        return ( 
            <div>
                <button>Add Row</button>
                <button>Add Column</button>
                <button>Remove Row</button>
                <button>Remove Column</button>
                <button>Fill Uncolored</button>
                <button>Fill All</button>
                <button>Clear</button>
                <select onchange="selected()" id = "selectedID">
                    <option value="SELECT">SELECT</option>
                    <option value="Red">Red</option>
                    <option value="Blue">Blue</option>
                    <option value="Green">Green</option>
                    <option value="Yellow">Yellow</option>
                </select>
            </div> 
        );
    }
}
 
export default controlBar;