import React from "react";
export default function FinishTable({table, handleSubmit}) {
    return (
      table.reservation_id && (
        <td>
          <button
              data-table-id-finish={table.table_id}
              className="btn btn-secondary"
              onClick={handleSubmit}
            >
              Finish
          </button>
        </td> 
    )
    )
}