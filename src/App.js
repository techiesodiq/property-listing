/** @format */
import {BrowserRouter, Route, Routes} from "react-router-dom";
import "./App.css";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import Home from "./pages/HomeDashboard";
import ProductDetails from "./pages/ProductDetails";
import PurchaseProperty from "./pages/PurchaseProperty";

function App() {
	return (
		<>
			<BrowserRouter>
				<Navbar />
				<Routes>
					<Route path="/" element={<Home />} />
					<Route path="/product/:productLink" element={<ProductDetails />} />
					<Route path="/purchase-property" element={<PurchaseProperty />} />
				</Routes>
				<Footer />
			</BrowserRouter>
		</>
	);
}

export default App;
