import '../../components/dashboard/areaTop/AreaTop.scss'
import AreaTop from "../../components/dashboard/areaTop/AreaTop"
import AreaCards from "../../components/dashboard/areaCards/AreaCards";
import AreaCharts from "../../components/dashboard/areaCharts/AreaCharts"
import DateRangeComp from '../../components/dashboard/dateRange/DateRangeComp'

const Dashboard = () => {
  return (
    <div className="content-area">
      <AreaTop PageTitle={"Dashboard"}/>
      <AreaCards />
      {/* <DateRangeComp/> */}
      <AreaCharts />
    </div>
  );
};

export default Dashboard;
