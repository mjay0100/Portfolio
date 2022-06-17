import { useEffect } from "react";
import Content from "./Components/Content";
import Footer from "./Components/Footer";
import Navbar from "./Components/Navbar";
import Aos from "aos";
import "aos/dist/aos.css";

function App() {
  useEffect(() => {
    Aos.init();
    Aos.refresh();
  }, []);
  return (
    <div>
      <Navbar />
      <Content />
      <Footer />
    </div>
  );
}

export default App;
