import { BrowserRouter, Route, Routes } from "react-router-dom";
import Layout from "./components/layout";
import { ItemPage } from "./pages/item-page";
import { ItemsPage } from "./pages/items-page";



const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route path='/items' element={<ItemsPage />} />
          <Route exact path="/items/:id" element={<ItemPage />} />
          <Route path='/*'  element={<ItemsPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
