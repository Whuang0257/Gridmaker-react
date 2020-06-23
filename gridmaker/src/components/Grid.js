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
                                // create the <td> for grid
                                <td></td>
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

