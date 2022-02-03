/** @format */

import React from "react";
import LoginModal from "../../components/LoginModal";
import Products from "../../components/Products";
import Search from "../../components/Search";

const Home = () => {
	return (
		<div style={{marginTop: "50px"}}>
			<Search />
			<LoginModal />
			<Products />
		</div>
	);
};

export default Home;
