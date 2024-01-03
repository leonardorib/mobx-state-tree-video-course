import React from "react";
import ReactDOM from "react-dom/client";
import "./assets/index.css";
import App from "./components/App";

import { WishList } from "./models/WishList";

import { onSnapshot } from "mobx-state-tree";

let initialState = {
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
};

if (localStorage.getItem("wishlistapp")) {
	const json = JSON.parse(localStorage.getItem("wishlistapp"));
	if (WishList.is(json)) initialState = json;
}

const wishList = WishList.create(initialState);

onSnapshot(wishList, (snapshot) => {
	localStorage.setItem("wishlistapp", JSON.stringify(snapshot));
});

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
	<React.StrictMode>
		<App wishList={wishList} />
	</React.StrictMode>
);
