import { BrowserRouter as Router, Routes, Route} from "react-router-dom";
import Home from "./pages/Home"; 
function App() {
  return (
    <div className="app">
      <Router>
        <Routes> 
          <Route path="/house" element={<Home />}>房子</Route>
          {/* <Route path="/demand" element={<Demand />}> 需求 </Route>  */}
         
        </Routes> 
      </Router>
      <div> <Home /> </div>
    </div>
  );
}

export default App;
