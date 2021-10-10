import React from "react";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Navbar from "./components/Navbar";
import Aboutme from "./components/Aboutme";
import Projects from "./components/Projects";

function App() {
  return (
    <>
      <Header />
      <Navbar />
      <Aboutme />
      <Projects />

      <Footer />
    </>
  );
}

export default App;
