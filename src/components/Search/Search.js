/** @format */

import SearchIcon from "@mui/icons-material/Search";
import {IconButton, InputBase, Paper} from "@mui/material";

const Search = () => {
	return (
		<div style={{display: "grid", placeItems: "center"}}>
			<Paper
				component="form"
				sx={{p: "2px 4px", display: "flex", alignItems: "center", vw: "100%"}}
			>
				<InputBase
					sx={{ml: 1, flex: 1}}
					placeholder="Search "
					inputProps={{"aria-label": "search google maps"}}
				/>
				<IconButton type="submit" sx={{p: "10px"}} aria-label="search">
					<SearchIcon />
				</IconButton>
			</Paper>
		</div>
	);
};

export default Search;
