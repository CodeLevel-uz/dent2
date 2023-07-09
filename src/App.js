import { Route, Routes } from "react-router-dom";
import Layout from "./utils/Layout";
import Organization from "./pages/organization/Organization";
import PrivateRouter from "./utils/PrivateRouter";

function App() {
  return (
    <Routes>
      <Route path='/' element={<Layout />} />
      <Route path='/organization' element={<PrivateRouter> <Layout> <Organization /> </Layout> </PrivateRouter>} />
    </Routes>
  );
}

export default App;
