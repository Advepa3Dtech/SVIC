import Navbar from "./components/Navbar";
import MetaverseServices from "./components/MetaverseServices";
//import Banner from "./components/Banner";
import MetaversePoints from "./components/MetaversePoint";
import Footer from "./components/Footer";
import Land from "./components/Land";

function App() {
  return (
    <div>
      <Navbar />
      <Land />
      <MetaverseServices />
      <MetaversePoints />
      <Footer />
    </div>
  );
}

export default App;
