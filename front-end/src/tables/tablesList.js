import React from "react";
import TableRows from "./TableRows";


function TablesList({tables}) {
  return (
        <div className="reservations-list">
          <table className="table">
            <thead>
              <tr>
                <th>Table Name</th>
                <th>Capacity</th>
                <th>Availability</th>
              </tr>
            </thead>
            <tbody>
            {tables && tables.map((table) => (
              <TableRows table={table} key={table.table_id} />
            ))}
            </tbody>
          </table>
        </div>
      );
}

export default TablesList;