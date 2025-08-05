import Header from "./components/Header";
import Footer from "./components/Footer";
import Pages from "./Pages";
import { BrowserRouter } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <div className="font-sans antialiased text-gray-800">
        <Header />
        <Pages />
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
