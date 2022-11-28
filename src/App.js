import { Provider } from "react-redux";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Drawer from "./Components/drawer";
import Dashboard from "./Pages/Dashboard";
import Guruhlar from "./Pages/Guruhlar";
import Pupils from "./Pages/O'quvchilar";
import store from "./Redux/reducer";


function App() {
  return (
    <Provider store={store}>
            <BrowserRouter>
        <Drawer>
            <Routes>
              <Route path="" element={<Dashboard/>} />
              <Route path="/guruhlar" element={<Guruhlar/>} />
              <Route path="/o'quvchilar" element={<Pupils/>} />
            </Routes>
        </Drawer>
    </BrowserRouter>
    </Provider>

 

  );
}

export default App;
