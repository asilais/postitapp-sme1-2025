import "./App.css";
import About from "./Components/About";
import Footer from "./Components/Footer";
import Header from "./Components/Header";
import Home from "./Components/Home";
import Login from "./Components/Login";

const App = () => {
  return (
    <>
      <Header />
      <Login />
      <Home />
      <About />
      <Footer />
    </>
  );
};

export default App;
