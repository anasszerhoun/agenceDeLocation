import AdminTable from './AdminTable';
import { useState, useMemo,useEffect } from 'react'
import AreaTop from "../../components/dashboard/areaTop/AreaTop"
import AddButton from '../../components/vehicles/searchField/addButton';
import SearchField from '../../components/vehicles/searchField/searchField';
import '../../components/dashboard/areaTop/AreaTop.scss'

const Admins = () => {
    
    const [searchTerm, setSearchTerm] = useState('')
    const [tableData, setTableData] = useState([]);
    useEffect(() => {
            fetch('http://localhost:8080/admins', { 
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
        )
    }, [searchTerm,tableData])

    return <>

        <AreaTop PageTitle={"Administrators"} />
        <br />
        <section className="content-area-top">
        <div className="area-top-l">
        <SearchField type="text"
            placeholder="Search..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="pl-10"
        />
        
        <AddButton value={"NEW ADMIN"} path={"add"} />
        </div>
        </section>
        <AdminTable data={filteredData} />

    </>
}
export default Admins