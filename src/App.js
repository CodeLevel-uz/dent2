import { Route, Routes } from "react-router-dom";
import Layout from "./utils/Layout";
import Organization from "./pages/organization/Organization";

function App() {
  return (
    <Routes>
      <Route path='/' element={<Layout />} />
      <Route path='/organization' element={<Layout> <Organization /> </Layout>} />
    </Routes>
  );
}

export default App;
