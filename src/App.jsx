import { Route, Routes } from "react-router-dom";
import Layout from "./Component/Pages/Layout";
import IndexPage from "./Component/Pages/IndexPage";
function App() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route index element={<IndexPage />} />
      </Route>
      <Route path="*" element={<IndexPage />} />
    </Routes>
  );
}

export default App;
