import { Routes, Route } from "react-router-dom";
import Home from "pages/Home/Home";
import RegisterOrder from "pages/RegisterOrder/RegisterOrder";
import Toast from "components/toast/Toast";
import OrderKanbanList from "components/orderKanbanList/orderKanbanList";
import RegisterSupplier from "pages/RegisterSupplier/RegisterSupplier";

const Routers = () => (
  <>
    <Routes>
      <Route path={"/"} element={<Home />} />
      <Route path={"/cadastro-pedido"} element={<RegisterOrder />} />
      <Route path={"/cadastro-fornecedor"} element={<RegisterSupplier />} />
      <Route path={"/pedidos"} element={<OrderKanbanList />} />
    </Routes>
    <Toast />
  </>
);

export default Routers;
