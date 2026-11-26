import Banner from "./components/banner";
import Footer from "./components/footer";
import Header from "./components/header";
import Navbar from "./components/navbar";

function App() {
  return (
    <>
      <Navbar />
      <Banner />
      <Header />
      <hr />
      <h2>Hello</h2>
      <hr />
      <Footer />
      <p className="w-full bg-[#383838] px-4 py-3 text-center text-[10px] leading-4 text-white">
        © 2025 NORTHERN REGIONAL VETERINARY HEALTHCARE AND LEARNING CENTER. All
        rights reserved.
      </p>
    </>
  );
}

export default App;
