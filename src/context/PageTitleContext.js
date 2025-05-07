import React, { createContext, useState, useContext, useEffect } from "react";
import { useLocation } from "react-router-dom";

const PageTitleContext = createContext();

export function PageTitleProvider({ children }) {
  const [title, setTitle] = useState("");
  const location = useLocation();

  useEffect(() => {
    const map = {
      "/": "Home",
      "/projects": "Projects",
      "/education": "Education",
      "/contact": "Contact",
    };
    document.title = map[location.pathname] || "Portfolio";
    setTitle(map[location.pathname] || "");
  }, [location]);

  return (
    <PageTitleContext.Provider value={title}>
      {children}
    </PageTitleContext.Provider>
  );
}

export function usePageTitle() {
  return useContext(PageTitleContext);
}
