import AdminTable from './AdminTable';
import { useState, useMemo } from 'react'
import AreaTop from "../../components/dashboard/areaTop/AreaTop"
import AddButton from '../../components/vehicles/searchField/addButton';
import SearchField from '../../components/vehicles/searchField/searchField';
import '../../components/dashboard/areaTop/AreaTop.scss'
const TABLE_DATA = [
    {
        id: 100,
        name: "Iphone 16 Pro",
        order_id: 11232,
        customer: "Afaq Karim",
        status: "rented",
        amount: 400,
    },
    {
        id: 101,
        name: "Macbook Pro",
        order_id: 11232,
        customer: "Afaq Karim",
        status: "available",
        amount: 288,
    },
    {
        id: 102,
        name: "Apple Watch",
        order_id: 11232,
        customer: "Afaq Karim",
        status: "rented",
        amount: 500,
    },
    {
        id: 103,
        name: "Microsoft Book",
        order_id: 11232,
        
        customer: "Afaq Karim",
        status: "down",
        amount: 100,
    },
    {
        id: 104,
        name: "Apple Pen",
        order_id: 11232,
        customer: "Afaq Karim",
        status: "down",
        amount: 60,
    },
    {
        id: 105,
        name: "Airpods",
        order_id: 11232,
        customer: "Afaq Karim",
        status: "available",
        amount: 80,
    },
];


const Admins = () => {
    const [searchTerm, setSearchTerm] = useState('')
    const filteredData = useMemo(() => {
        return TABLE_DATA.filter(item =>
            Object.values(item).some(value =>
                value.toString().toLowerCase().includes(searchTerm.toLowerCase())
            )
        )
    }, [searchTerm])

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

        <AddButton value={"NEW ADMIN"} />
        </div>
        </section>
        <AdminTable data={filteredData} />

    </>
}
export default Admins