import React from "react";
  
export default function TableHeader({firstRow}) {
  return (

    <thead className="table-dark">
      <tr>
        { firstRow.map((entry, i) => (
          <React.Fragment key={"headercell" + i}>
            <th scope="col">{entry}</th>
          </React.Fragment>
        ))}
      </tr>
    </thead>
  )
}
