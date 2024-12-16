import AreaTableAction from "../../components/vehicles/areaTable/AreaTableAction";
import "../../components/vehicles/areaTable/AreaTable.scss";

const TABLE_HEADS = [
  "ID",
  "First Name",
  "Last Name",
  "Email",
  "Password",
  "Action",
];

const AdminTable = ({data}) => {
  return (
    <section className="content-area-table">
      <div className="data-table-info">
        <h4 className="data-table-title">Admins List</h4>
      </div>
      <div className="data-table-diagram">
        <table>
          <thead>
            <tr>
              {TABLE_HEADS?.map((th, index) => (
                <th key={index}>{th}</th>
              ))}
            </tr>
          </thead>
          <tbody>
            {data?.map((dataItem) => {
              return (
                <tr key={dataItem.id}>
                  <td>{dataItem.id}</td>
                  <td>{dataItem.firstname}</td>
                  <td>{dataItem.lastname}</td>
                  <td>{dataItem.email}</td>
                  <td>{dataItem.pwd}</td>
                  <td className="dt-cell-action">
                    <AreaTableAction />
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </section>
  );
};

export default AdminTable;
