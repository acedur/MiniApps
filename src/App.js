import React, { useState } from "react";
import Navigation from "./components/Navigation";
import Footer from "./components/Footer";
import Clock from "./features/Clock/Clock";
import Calculator from "./features/Calculator/Calculator";
import Xo from "./features/XO/xo";

function App() {
  const [activeTab, setActiveTab] = useState([
    {
      id: 1,
      label: "Clock",
      isActive: true,
      component: <Clock />,
    },
    {
      id: 2,
      label: "Calculator",
      isActive: false,
      component: <Calculator />,
    },
    {
      id: 3,
      label: "XO",
      isActive: false,
      component: <Xo />,
    },
  ]);

  const handleActiveTab = (id) => {
    let copy = [...activeTab];
    copy[activeTab.findIndex((item) => item.isActive)].isActive = false;
    copy[activeTab.findIndex((item) => item.id === id)].isActive = true;
    copy[activeTab.findIndex((item) => item.id === id)].isActive = true;
    setActiveTab(copy);
  };

  return (
    <div>
      <Navigation activeTab={activeTab} handleActiveTab={handleActiveTab} />
      <div>{activeTab.find((item) => item.isActive).component}</div>
      <Footer />
    </div>
  );
}

export default App;
