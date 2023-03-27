import Route from "./Components/Route";
import Sidebar from "./Components/Sidebar";
import AccordionPage from "./pages/AccordionPage";
import DropdownPage from "./pages/DropdownPage";
import ButtonPage from "./pages/ButtonPage";
import TablePage from "./pages/TablePage";
import CounterPage from "./pages/CounterPage";

function App() {
  return (
    <div className="container mx-auto grid grid-cols-6 gap-4 mt-4">
      <Sidebar />
      <div className="col-span-5">
        <Route path="/">
          <DropdownPage />
        </Route>
        <Route path="/accordion">
          <AccordionPage />
        </Route>
        <Route path="/buttons">
          <ButtonPage />
        </Route>
        <Route path="/tables">
          <TablePage />
        </Route>
        <Route path="/counter">
          <CounterPage/>
        </Route>
      </div>
    </div>
  );
}

export default App;
