
import { FaChartLine } from "react-icons/fa6";
import { GiSettingsKnobs } from "react-icons/gi";
import { LuClipboardList } from "react-icons/lu";
import { TiFlowMerge } from "react-icons/ti";
import { HiOutlineAdjustmentsHorizontal } from "react-icons/hi2";
import { BsHeartPulse } from "react-icons/bs";
import { TbRefresh } from "react-icons/tb";
import { GiCheckedShield } from "react-icons/gi";
import { HiOutlineCog8Tooth } from "react-icons/hi2";
export const userMenuList = [
  {
    label: "Dashboard",
    icon: <FaChartLine />,
    path: "/dashboard",
  },
  {
    label: "Workflow Builder",
    icon: <TiFlowMerge />,
    path: "/workflow-builder",
  },
  {
    label: "Vendor Management",
    icon: <LuClipboardList />,
    path: "/vendor-management",
  },
  {
    label: "Contract Config",
    icon: <GiSettingsKnobs />,
    path: "/contract-config",
  },
  {
    label: "Data Flow",
    icon: <HiOutlineAdjustmentsHorizontal />,
    path: "/data-flow",
  },
  {
    label: "Monitoring",
    icon: <BsHeartPulse />,
    path: "/monitoring",
  },
  {
    label: "Retry & Fallback",
    icon: <TbRefresh />,
    path: "/retry-fallback",
  },
  {
    label: "Access Control",
    icon: <GiCheckedShield />,
    path: "/access-control",
  },
  {
    label: "Settings",
    icon: <HiOutlineCog8Tooth />,
    path: "/settings",
  },

];
