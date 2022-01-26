/** @format */

import React from "react";
import Products from "../../components/Products";
import Search from "../../components/Search";

const Home = () => {
	return (
		<div style={{marginTop: "50px"}}>
			<Search />
			<Products />
		</div>
	);
};

export default Home;
