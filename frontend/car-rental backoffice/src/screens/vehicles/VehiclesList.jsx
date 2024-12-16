import { useState, useMemo } from 'react'
import AreaTop from "../../components/dashboard/areaTop/AreaTop"
import AreaTable from "../../components/vehicles/areaTable/AreaTable";
import SearchField from '../../components/vehicles/searchField/searchField';
import AddButton from '../../components/vehicles/searchField/addButton';
import '../../components/dashboard/areaTop/AreaTop.scss'
const TABLE_DATA = [
    {
        id: 100,
        name: "Iphone 16 Pro",
        order_id: 11232,
        date: "Jun 29,2022",
        customer: "Afaq Karim",
        status: "rented",
        amount: 400,
    },
    {
        id: 101,
        name: "Macbook Pro",
        order_id: 11232,
        date: "Jun 29,2022",
        customer: "Afaq Karim",
        status: "available",
        amount: 288,
    },
    {
        id: 102,
        name: "Apple Watch",
        order_id: 11232,
        date: "Jun 29,2022",
        customer: "Afaq Karim",
        status: "rented",
        amount: 500,
    },
    {
        id: 103,
        name: "Microsoft Book",
        order_id: 11232,
        date: "Jun 29,2022",
        customer: "Afaq Karim",
        status: "down",
        amount: 100,
    },
    {
        id: 104,
        name: "Apple Pen",
        order_id: 11232,
        date: "Jun 29,2022",
        customer: "Afaq Karim",
        status: "down",
        amount: 60,
    },
    {
        id: 105,
        name: "Airpods",
        order_id: 11232,
        date: "Jun 29,2022",
        customer: "Afaq Karim",
        status: "available",
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
    }, [searchTerm])
    // const [searchTerm, setSearchTerm] = useState('');
    // const [statusFilter, setStatusFilter] = useState('all');
    // const filteredData = useMemo(() => {
    //     const d = TABLE_DATA.filter(item => {
    //         const matchesSearch = Object.values(item).some(value =>
    //             value.toString().toLowerCase().includes(searchTerm.toLowerCase())
    //         );
    //         const matchesStatus = statusFilter === 'all' || item.status === statusFilter;
    //         return matchesSearch && matchesStatus;
    //     });
    //     console.log(statusFilter);
    //     // console.log(d)
    // }, [searchTerm, statusFilter]);
    // const handleStatusFilterChange = (event) => {
    //     setStatusFilter(event.target.value);
    // };
    return <>

        <AreaTop PageTitle={"Vehicles"} />
        <br />
        <section className="content-area-top">
        <div className="area-top-l">
        {/* <FilterSelect
            value={statusFilter}
            onValueChange={handleStatusFilterChange}
        /> */}
        <SearchField type="text"
            placeholder="Search..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="pl-10"
        />
        <AddButton value={"NEW CAR"} />
        </div>
        </section>
        <AreaTable data={filteredData} />

    </>
}
export default Vehicles 