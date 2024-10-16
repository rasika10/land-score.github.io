import { Route, Routes } from "react-router-dom";
import Header from "./components/Header";
import Home from "./pages/Home";
import "./style.css"
import PropertyListings from "./pages/PropertyListings";
import AgentDashboard from "./pages/Agent/pages/AgentDashboard"
function App() {
  return (
    <>
      <Routes>
        <Route element={<Header />}>
          <Route path="/" element={<Home />} />
          <Route path="property-listings" element={<PropertyListings />} />
          <Route path="/agent-dashboard/*" element={<AgentDashboard />} />
        </Route>
      </Routes>
    </>

    //   <div>
    //     <Header/>
    //  <Home />
    //   </div>
  );
}

export default App;
