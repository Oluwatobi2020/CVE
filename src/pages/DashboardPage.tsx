
import DashboardContainer from "../components/DashboardContainer";
import Viewport from "../layouts/ViewPort/Views";
import { MdOutlineDashboard } from "react-icons/md";

const DashboardPage = () => {
  return (
    <Viewport title="Dashboard" icons={<MdOutlineDashboard size={30} />}>
      <DashboardContainer />
    </Viewport>
  );
};

export default DashboardPage;
