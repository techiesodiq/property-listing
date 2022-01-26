/** @format */

import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import * as React from "react";

const Footer = () => {
	return (
		<Box sx={{width: "100%", backgroundColor: "#000", color: "#fff"}}>
			<Grid container rowSpacing={1} columnSpacing={{xs: 1, sm: 2, md: 3}}>
				<Grid item xs={6} md={3}>
					<ul>
						<li>About</li>
						<li>Contact</li>
						<li>Product</li>
						<li>Products</li>
					</ul>
				</Grid>
				<Grid item xs={6} md={3}>
					<ul>
						<li>About</li>
						<li>Contact</li>
						<li>Product</li>
						<li>Products</li>
					</ul>
				</Grid>
				<Grid item xs={6} md={3}>
					<ul>
						<li>About</li>
						<li>Contact</li>
						<li>Product</li>
						<li>Products</li>
					</ul>
				</Grid>
				<Grid item xs={6} md={3}>
					<ul>
						<li>About</li>
						<li>Contact</li>
						<li>Product</li>
						<li>Products</li>
					</ul>
				</Grid>
			</Grid>
		</Box>
	);
};

export default Footer;
