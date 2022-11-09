import FinishTable from "./FinishTable";
import { useHistory } from "react-router";
import { updateToFinished } from "../utils/api";

export default function TableRows({table}) {
    const history = useHistory();

    //handle 'finish' submission
    const handleSubmit = async (event) => {
        event.preventDefault();
        const confirm = window.confirm(
          "Is this table ready to seat new guests? This cannot be undone."
        )
        if (confirm) {
          await updateToFinished(table.table_id, table.reservation_id);
          history.go(0);
      }};

      //returns rows for tables table
      return (
        <tr key={table.table_id}>
          <td>{table.table_name}</td>
          <td>{table.capacity}</td>
          <td>{table.reservation_id ? "Occupied" : "Free"}</td>
          {/* <td>{table.reservation_id && (
            <button 
              data-table-id-finish={table.table_id}
              className="btn btn-secondary"
              onClick={handleSubmit}
              type="button"
            >
              Finish
            </button>
          )}</td> */}
          <FinishTable table={table} handleSubmit={handleSubmit}/>
        </tr>
    )
}