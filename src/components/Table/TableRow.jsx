import React from "react";

function TableRow({ td1, td2 }) {
  return (
    <tr>
      <td className="border-2 border-black m-2 p-2">{td1}</td>{" "}
      <td className="border-2 border-black m-2 p-2">{td2}</td>
    </tr>
  );
}

export default TableRow;
