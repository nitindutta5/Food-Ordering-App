import useOnline from "./useOnline";
import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";
import { Outlet } from "react-router-dom";
import Offline from "../components/Common/Offline"

const Main = () => {
        const isOnline = useOnline();
        if (!isOnline) {
          return <Offline />;
        }
        return (
          <>
              <Header />
              <Outlet />
              <Footer />
          </>
        );
}

export default Main