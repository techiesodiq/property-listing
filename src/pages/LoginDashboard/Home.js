/** @format */

import React, {useState} from "react";
import Products from "../../components/Products";
import Search from "../../components/Search";
import data from "../../data/product.json";

const Home = () => {
	const [searchData, setSearchData] = useState(data);
	const handleSearch = (val) => {
		const result = data.filter((item) => {
			return item.title.toLowerCase().includes(val.toLowerCase());
		});
		console.log(result);
		setSearchData(result);
	};

	return (
		<div style={{marginTop: "50px"}}>
			<Search onSearch={handleSearch} />
			<Products data={searchData} />
		</div>
	);
};

export default Home;
