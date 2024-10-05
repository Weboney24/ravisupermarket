import { Outlet } from "react-router-dom";
import Navbar from "../navbar/Navbar";

const CustomerLayout = () => {
  return (
    <div>
          <Navbar />
          <Outlet/>
    </div>
  );
};

export default CustomerLayout;
