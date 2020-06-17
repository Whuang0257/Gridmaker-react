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
            </div> 
        );
    }
}
 
export default controlBar;