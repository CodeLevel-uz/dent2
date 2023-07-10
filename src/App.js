import { Route, Routes } from "react-router-dom";
import Layout from "./utils/Layout";
import Organization from "./pages/organization/Organization";
import PrivateRouter from "./utils/PrivateRouter";
import Position from "./pages/position/Position";
import Login from "./pages/login/Login";

function App() {
  return (
    <Routes>
      <Route path='/' element={<Login />} />
      <Route path='/organization' element={<PrivateRouter> <Layout> <Organization /> </Layout> </PrivateRouter>} />
      <Route path='/position' element={<PrivateRouter> <Layout> <Position /> </Layout> </PrivateRouter>} />
    </Routes>
  );
}

export default App;
