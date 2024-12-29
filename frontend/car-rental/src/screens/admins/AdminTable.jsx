import Alert from '@mui/material/Alert';
import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import "../../components/vehicles/areaTable/AreaTable.scss";
const TABLE_HEADS = [
  "Last Name",
  "First Name",
  "Email",
];

const AdminTable = ({data}) => {

  const location = useLocation();
  const [showAlert, setShowAlert] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  useEffect(() => {
    if (location.state) {
      setIsSuccess(location.state.success);
      setShowAlert(true);
      const timer = setTimeout(() => {
        setShowAlert(false);
      }, 2000);
      return () => clearTimeout(timer);
    }
  }, [location.state]);

  return (
    <section className="content-area-table">
      <div className="data-table-info">
        <h4 className="data-table-title">Admins List</h4>
      </div>
      {showAlert && (
        <Alert severity={isSuccess ? 'success' : 'error'}>
          {isSuccess ? 'Admin added successfully!' : 'Failed to add admin.'}
        </Alert>
      )}
      <br />
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
                  <td>{dataItem.nomUser}</td>
                  <td>{dataItem.prenomUser}</td>
                  <td>{dataItem.mail}</td>
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
