import Home from "./Home";
import Sidebar from "./Sidebar";
const Layout = () => {
  return (
    <>
      <div className="flex w-[100vw]">
        <Sidebar />
        <Home />
      </div>
    </>
  );
};
export default Layout;
