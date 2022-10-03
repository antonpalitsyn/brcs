import React from "react";
  
export default function TableEntry({entry}) {
  return (
    <>
        <tr>
          {entry.map((data, i) => (
            <td key={"rowcell" + i}>
              {data}
            </td>
          ))}
        </tr>
    </>
  )
}
