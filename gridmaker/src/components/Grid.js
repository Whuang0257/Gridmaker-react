import React from "react";

const Grid = ({rows, cols}) => {
    return (
        <table>
            <tbody>{
                Array.from(Array(rows), () => {
                return (
                    <tr>
                        {Array.from(Array(cols), () => {
                            return (
                                // create the <td> for grid, initiated with element style to allow fillUncolored to function
                                <td style={{backgroundColor: 'white'}}>
                                </td>
                            )
                        })}
                    </tr>
                )
            })}
            </tbody>
        </table>
    );
}

export default Grid;

