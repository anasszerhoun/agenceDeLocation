import { useState, useEffect, useMemo } from 'react';
import AreaTop from "../../components/dashboard/areaTop/AreaTop";
import AreaTable from "../../components/vehicles/areaTable/AreaTable";
import SearchField from '../../components/vehicles/searchField/searchField';
import AddButton from '../../components/vehicles/searchField/addButton';
import '../../components/dashboard/areaTop/AreaTop.scss';

const Vehicles = () => {
    const [searchTerm, setSearchTerm] = useState('');
    const [tableData, setTableData] = useState([]);
    
    useEffect(() => {
        fetch('http://localhost:8080/vehicules', { 
            method: 'GET',
        })
        .then(response => response.json())
        .then(data => {
            setTableData(data);
        })
        .catch(error => console.error('There has been a problem with your fetch operation:', error));
    }, [tableData]);

    const filteredData = useMemo(() => {
        return tableData.filter(item =>
            Object.values(item).some(value =>
                value.toString().toLowerCase().includes(searchTerm.toLowerCase())
            )
        );
    }, [searchTerm, tableData]);

    return (
        <>
            <AreaTop PageTitle={"Vehicles"} />
            <br />
            <section className="content-area-top">
                <div className="area-top-l">
                    <SearchField
                        type="text"
                        placeholder="Search..."
                        value={searchTerm}
                        onChange={(e) => setSearchTerm(e.target.value)}
                        className="pl-10"
                    />
                    <AddButton value={"NEW CAR"} path="add" />
                </div>
            </section>
            <AreaTable data={filteredData} />
        </>
    );
};

export default Vehicles;