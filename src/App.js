import React, { useState } from "react";
import Header from "./components/Header";
import SideNav from "./components/SideNav";
// import MainSection from "./components/MainSection";

function App() {
  const [drawerOpen, setDrawerOpen] = useState(false);

  return (
    <>
      <Header onNavToggle={() => setDrawerOpen((o) => !o)} /*…other props*/ />
      {/* <SideNav open={drawerOpen} onClose={() => setDrawerOpen(false)} /> */}
      {/* <MainSection /> */}
    </>
  );
}

export default App;
