import { useState, useMemo } from 'react'
import  AreaTop from "../../components/dashboard/areaTop/AreaTop"
import  AreaTable from "../../components/vehicles/areaTable/AreaTable";
import SearchField from '../../components/vehicles/searchField/searchField';
const TABLE_DATA = [
    {
        id: 100,
        name: "Iphone 13 Pro",
        order_id: 11232,
        date: "Jun 29,2022",
        customer: "Afaq Karim",
        status: "delivered",
        amount: 400,
    },
    {
        id: 101,
        name: "Macbook Pro",
        order_id: 11232,
        date: "Jun 29,2022",
        customer: "Afaq Karim",
        status: "pending",
        amount: 288,
    },
    {
        id: 102,
        name: "Apple Watch",
        order_id: 11232,
        date: "Jun 29,2022",
        customer: "Afaq Karim",
        status: "canceled",
        amount: 500,
    },
    {
        id: 103,
        name: "Microsoft Book",
        order_id: 11232,
        date: "Jun 29,2022",
        customer: "Afaq Karim",
        status: "delivered",
        amount: 100,
    },
    {
        id: 104,
        name: "Apple Pen",
        order_id: 11232,
        date: "Jun 29,2022",
        customer: "Afaq Karim",
        status: "delivered",
        amount: 60,
    },
    {
        id: 105,
        name: "Airpods",
        order_id: 11232,
        date: "Jun 29,2022",
        customer: "Afaq Karim",
        status: "delivered",
        amount: 80,
    },
];


const Vehicles = () => {
    const [searchTerm, setSearchTerm] = useState('')
    const filteredData = useMemo(() => {
        return TABLE_DATA.filter(item =>
            Object.values(item).some(value =>
                value.toString().toLowerCase().includes(searchTerm.toLowerCase())
            )
        )
    }, [TABLE_DATA, searchTerm])
    return <>

        <AreaTop PageTitle={"Vehicles"} />
        <br />
        <SearchField type="text"
            placeholder="Search..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="pl-10"
        />

        <AreaTable data={filteredData} />

    </>
}
export default Vehicles 