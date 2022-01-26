/** @format */

import FavoriteIcon from "@mui/icons-material/Favorite";
import ShareIcon from "@mui/icons-material/Share";
import {
	Box,
	Card,
	CardActions,
	CardContent,
	CardMedia,
	Grid,
	IconButton,
	Typography,
} from "@mui/material";
import {Link} from "react-router-dom";
import data from "../../data/product.json";

const Products = () => {
	return (
		<>
			<Box sx={{flexGrow: 1}} style={{margin: "60px", padding: "40px"}}>
				<Grid
					container
					spacing={{xs: 2, md: 5}}
					columns={{xs: 4, sm: 8, md: 12}}
				>
					{data.map((item, index) => (
						<Grid item xs={12} sm={12} md={4}>
							<Card sx={{maxWidth: 420, borderRadius: 4}} key={index}>
								<Link to={"product/" + item.productLink}>
									<CardMedia
										sx={{borderRadius: 4}}
										component="img"
										height="250"
										image={item.imgUrl}
										alt={item.title}
									/>
								</Link>

								<CardContent>
									<Link to={"product/" + item.productLink}>
										<Typography variant="h6" component="h5">
											{item.price}
										</Typography>
									</Link>

									<Typography component="header">{item.title}</Typography>
									<Typography variant="body2" color="text.secondary">
										{item.description}
									</Typography>
								</CardContent>
								<CardActions disableSpacing>
									<IconButton aria-label="add to favorites">
										<FavoriteIcon />
									</IconButton>
									<IconButton aria-label="share">
										<ShareIcon />
									</IconButton>
								</CardActions>
							</Card>
						</Grid>
					))}
				</Grid>
			</Box>
		</>
	);
};

export default Products;
