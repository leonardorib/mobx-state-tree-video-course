import React from "react";
import ReactDOM from "react-dom/client";
import "./assets/index.css";
import App from "./components/App";

import { WishList } from "./models/WishList";

const wishList = WishList.create({
	items: [
		{
			name: "LEGO Mindstorms EV3",
			price: 349.95,
			image:
				"https://images-na.ssl-images-amazon.com/images/I/71CpQw%2BufNL._SL1000_.jpg",
		},
		{
			name: "Miracles - C.S. Lewis",
			price: 12.91,
			image:
				"https://images-na.ssl-images-amazon.com/images/I/41JC54HEroL._SX331_BO1,204,203,200_.jpg",
		},
	],
});

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
	<React.StrictMode>
		<App wishList={wishList} />
	</React.StrictMode>
);

setInterval(() => {
	wishList.items[0].changePrice(wishList.items[0].price + 1);
}, 1000);
