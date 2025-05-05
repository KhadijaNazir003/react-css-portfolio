import React, { useState, Suspense, lazy } from "react";
import { Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import SideNav from "./components/SideNav";
import Home from "./pages/Home";
import Projects from "./pages/Projects";
import Education from "./pages/Education";
import Contact from "./pages/Contact";

export default function App() {
  const [drawerOpen, setDrawerOpen] = useState(false);

  const toggleDrawer = () => setDrawerOpen((o) => !o);
  const closeDrawer = () => setDrawerOpen(false);

  return (
    <div className="app-container">
      <Header onNavToggle={toggleDrawer} />
      <SideNav open={drawerOpen} onClose={closeDrawer} />
      <main className="right">
        <Suspense fallback={null}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/education" element={<Education />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </Suspense>
      </main>
    </div>
  );
}
