/** @format */
import {
	Box,
	Button,
	Card,
	CardContent,
	CardMedia,
	Grid,
	Paper,
	Typography,
} from "@mui/material";
import {Link, useParams} from "react-router-dom";
import data from "../../data/productDetails.json";
import "./product.css";

const Products = () => {
	const {productLink} = useParams();
	return (
		<>
			<Box sx={{margin: "20px", overflowX: "hidden"}}>
				{data
					.filter((item) => item.productLink === productLink)
					.map((item, index) => (
						<Grid
							container
							rowSpacing={3}
							columnSpacing={{xs: 1, sm: 2, md: 5}}
						>
							<Grid item md={2}></Grid>
							<Grid item xs={12} md={6}>
								<Card sx={{borderRadius: 4}} variant="outlined">
									<CardMedia
										sx={{borderRadius: 4}}
										component="img"
										height="500"
										image={item.imgUrl}
										alt="Alt"
									/>
									<CardContent>
										<Typography variant="h6" component="h5">
											{item.title}
										</Typography>
										<Typography component="header">{item.price}</Typography>
										<Typography variant="body2" color="text.secondary">
											{item.details1}
										</Typography>
										<br />
										<Typography variant="body2" color="text.secondary">
											{item.details2}
										</Typography>
										<br />
										<Typography variant="body2" color="text.secondary">
											{item.details3}
										</Typography>
									</CardContent>
								</Card>
							</Grid>
							<Grid item xs={12} md={3}>
								<Paper elevation={0}>
									<div style={{margin: "0px", padding: "10px"}}>
										<h4>Features</h4>
										{item.features.map((feature) => (
											<ul>
												<li>{feature}</li>
											</ul>
										))}

										<p style={{margin: "0", padding: "4px"}}>
											<strong>Contact Name:</strong> {item.contactName}
										</p>
										<p style={{margin: "0", padding: "4px"}}>
											<strong>Contact Number:</strong> {item.contactNumber}
										</p>
										<p style={{margin: "0", padding: "4px"}}>
											<strong>Location:</strong> {item.location}
										</p>
										<p style={{margin: "0", padding: "4px"}}>
											<strong>Price:</strong> {item.price}
										</p>
										<p style={{margin: "0", padding: "4px"}}>
											<strong>Sale Type:</strong> {item.saleType}
										</p>
										<p style={{margin: "0", padding: "4px"}}>
											<strong>Property Type:</strong> {item.propertyType}
										</p>
										<p style={{margin: "0", padding: "4px"}}>
											<strong>Available Date:</strong> {item.availableDate}
										</p>
										<p style={{margin: "0", padding: "4px"}}>
											<strong>Bedrooms:</strong> {item.bedrooms}
										</p>
										<p style={{margin: "0", padding: "4px"}}>
											<strong>Living Rooms:</strong> {item.livingRoom}
										</p>
										<p style={{margin: "0", padding: "4px"}}>
											<strong>Number of Smoke Alarm:</strong>{" "}
											{item.numberOfSmokeAlarm}
										</p>
										<p style={{margin: "0", padding: "4px"}}>
											<strong>Number of CO Alarm:</strong>{" "}
											{item.numberOfCOAlarm}
										</p>
										<div style={{marginTop: "10px", paddingTop: "4px"}}>
											<Link
												to="/purchase-property"
												style={{textDecoration: "none"}}
											>
												<Button sx={{padding: "30"}} variant="contained">
													Contact Seller
												</Button>
											</Link>
										</div>
									</div>
								</Paper>
							</Grid>
							<Grid item md={1}></Grid>
						</Grid>
					))}
			</Box>
		</>
	);
};

export default Products;
