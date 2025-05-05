import React, { useState, Suspense, lazy } from "react";
import { Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import SideNav from "./components/SideNav";

import Footer from "./components/Footer";
import { PageTitleProvider } from "./context/PageTitleContext";
const Home = lazy(() => import("./pages/Home"));
const Projects = lazy(() => import("./pages/Projects"));
const Education = lazy(() => import("./pages/Education"));
const Contact = lazy(() => import("./pages/Contact"));
export default function App() {
  const [drawerOpen, setDrawerOpen] = useState(false);

  const toggleDrawer = () => setDrawerOpen((o) => !o);
  const closeDrawer = () => setDrawerOpen(false);

  return (
    <div className="app-container">
      <PageTitleProvider>
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
        <Footer />
      </PageTitleProvider>
    </div>
  );
}
