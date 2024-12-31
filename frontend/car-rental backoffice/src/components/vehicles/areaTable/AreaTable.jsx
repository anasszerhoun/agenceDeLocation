import "./AreaTable.scss";
import { useState , useEffect} from "react";
import Alert from '@mui/material/Alert';
import { useLocation } from "react-router-dom";
import AreaTableAction from "./AreaTableAction";

const TABLE_HEADS = [
  "Plate",
  "Brand",
  "Model",
  "Type",
  "Status",
  "Price",
  "Action",
];

const AreaTable = ({data}) => {

  const [deletionSuccess, setDeletionSuccess] = useState(false);
  const [deletionFailed, setDeletionFailed] = useState(false);
  // const location = useLocation();
  // const [showAlert, setShowAlert] = useState(false);
  // const [isSuccess, setIsSuccess] = useState(false);

  // useEffect(() => {
  //   if (location.state) {
  //     setIsSuccess(location.state.addCarSuccess);
  //     setShowAlert(true);
  //     const timer = setTimeout(() => {
  //       setShowAlert(false);
  //     }, 2000);
  //     return () => clearTimeout(timer);
  //   }
  // }, [location.state]);
  const location = useLocation();
  const [showAlert, setShowAlert] = useState(false);
  const [alertMessage, setAlertMessage] = useState('');
  const [alertSeverity, setAlertSeverity] = useState('success'); // Can be 'success' or 'error'

  // useEffect(() => {
  //   if (location.state) {
  //     if (location.state.addCarSuccess) {
  //       setAlertMessage('Car added successfully!');
  //       setAlertSeverity('success');
  //     } else if (location.state.editCarSuccess) {
  //       setAlertMessage('Car edited successfully!');
  //       setAlertSeverity('success');
  //     } else if (location.state.addCarSuccess === false || location.state.editCarSuccess === false) {
  //       setAlertMessage('An error occurred: ' + (location.state.errorMessage || 'Operation failed.'));
  //       setAlertSeverity('error');
  //     }
  //     setShowAlert(true);
  //     const timer = setTimeout(() => {
  //       setShowAlert(false);
  //     }, 2000);
  //     return () => clearTimeout(timer);
  //   }
  // }, [location.state]);
  useEffect(() => {
    if (location.state) {
      if (location.state.addCarSuccess) {
        setAlertMessage(location.state.message || 'Operation successful!');
        setAlertSeverity('success');
      } else if (location.state.editCarSuccess) {
        setAlertMessage(location.state.message || 'Operation successful!');
        setAlertSeverity('success');
      } else if (location.state.addCarSuccess === false || location.state.editCarSuccess === false) {
        setAlertMessage('An error occurred: ' + (location.state.errorMessage || 'Operation failed.'));
        setAlertSeverity('error');
      }
      setShowAlert(true);
      const timer = setTimeout(() => {
        setShowAlert(false);
      }, 2000);
      return () => clearTimeout(timer);
    }
  }, [location.state]);

  const handleItemDeletion = async (id) => {
    try {
      const response = await fetch(`http://localhost:8080/vehicules/${id}`, {
        method: 'DELETE',
      });
      if (response.ok) {
        setDeletionSuccess(true);
        setTimeout(() => {
          setDeletionSuccess(false);
        }, 2000);
        
      } else {
        setDeletionFailed(true);
        setTimeout(() => {
          setDeletionFailed(false);
        }, 2000);
      }
    } catch (error) {
      setDeletionFailed(true);
    }
  };

  return (
    <section className="content-area-table">
      <div className="data-table-info">
        <h4 className="data-table-title">Vehicles List</h4>
      </div>
       {/* {showAlert && (
              <Alert severity={isSuccess ? 'success' : 'error'}>
                {isSuccess ? 'Car added successfully!' : 'Failed to add car.'}
              </Alert>
        )} */}

      {showAlert && (
        <Alert severity={alertSeverity}>{alertMessage}</Alert>
      )}
      {deletionSuccess && <Alert severity="success">Car deleted successfully !</Alert>}
      {deletionFailed && <Alert severity="error">Car cannot be deleted !</Alert>}
      <br/>
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
                  <td>{dataItem.immatriculation}</td>
                  <td>{dataItem.marque}</td>
                  <td>{dataItem.modele}</td>
                  <td>{dataItem.type}</td>
                 
                  <td>
                    <div className="dt-status">
                      <span
                        className={`dt-status-dot dot-${dataItem.status.toLowerCase()}`}
                      ></span>
                      <span className="dt-status-text">{dataItem.status}</span>
                    </div>
                  </td>
                  <td>{dataItem.tarif.toFixed(2)}€</td>
                  <td className="dt-cell-action">
                    <AreaTableAction id ={dataItem.immatriculation} onDelete={handleItemDeletion} carData={dataItem} />
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
export default AreaTable;
