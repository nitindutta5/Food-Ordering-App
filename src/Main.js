import useOnline from "./hooks/useOnline";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import { Outlet } from "react-router-dom";
import Offline from "./components/Common/Offline";
import ErrorBoundary from "./utils/ErrorBoundary";

const Main = () => {
  const isOnline = useOnline();
  if (!isOnline) {
    return <Offline />;
  }
  return (
    <>
      <ErrorBoundary>
        <Header />
        <Outlet />
        <Footer />
      </ErrorBoundary>
    </>
  );
};

export default Main;
