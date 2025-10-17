import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import ScrollToTop from "./components/ScrollToTop";
import Home from "./pages/Home";
import Company from "./pages/Company";
import Vendors from "./pages/Vendors";
import Riders from "./pages/Riders";
import Contact from "./pages/Contact";
import FAQs from "./pages/FAQs";

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-custom-dark">
        <Header />
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/company" element={<Company />} />
            <Route path="/vendors" element={<Vendors />} />
            <Route path="/riders" element={<Riders />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/faqs" element={<FAQs />} />
          </Routes>
        </main>
        <Footer />
        <ScrollToTop />
      </div>
    </Router>
  );
}

export default App;
