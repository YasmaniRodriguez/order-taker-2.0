export const ItemDetailStyles = (theme) => {
	return {
		container: {
			display: "flex",
			alignItems: "center",
			justifyContent: "space-around",
		},
		detailImage: {
			height: "100%",
			width: "100%",
			display: "flex",
			alignItems: "center",

			"& img": {
				height: "400px",
				width: "400px",
			},
		},
		detailContent: {
			width: "100%",
			display: "flex",
			flexDirection: "column",
			justifyContent: "center",
		},
		detailCallToAction: {
			display: "flex",
			flexDirection: "column",
			justifyContent: "center",
			alignItems: "center",
		},
	};
};
