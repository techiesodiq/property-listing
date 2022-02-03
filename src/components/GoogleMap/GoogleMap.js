/** @format */

import GoogleMapReact from "google-map-react";
import React from "react";

const AnyReactComponent = ({text}) => <div>{text}</div>;

const GoogleMap = () => {
	const defaultProps = {
		center: {
			lat: 8.1458,
			lng: 4.701,
		},
		zoom: 11,
	};

	return (
		<div style={{height: "40vh", width: "100%"}}>
			<GoogleMapReact
				bootstrapURLKeys={{key: "AIzaSyATY4Rxc8jNvDpsK8ZetC7JyN4PFVYGCGM"}}
				defaultCenter={defaultProps.center}
				defaultZoom={defaultProps.zoom}
			>
				<AnyReactComponent lat={59.955413} lng={30.337844} text="My Marker" />
			</GoogleMapReact>
		</div>
	);
};

export default GoogleMap;
