import React from "react";
import ReactDOM from "react-dom/client";
import "./assets/index.css";
import App from "./components/App";

import { Group } from "./models/Group";

import { onSnapshot } from "mobx-state-tree";

let initialState = {
	users: {
		a342: {
			id: "a342",
			name: "Homer",
			gender: "m",
		},
		"5fc2": {
			id: "5fc2",
			name: "Marge",
			gender: "f",
		},
		"663b": {
			id: "663b",
			name: "Bart",
			gender: "m",
		},
		"65aa": {
			id: "65aa",
			name: "Maggie",
			gender: "f",
		},
		ba32: {
			id: "ba32",
			name: "Lisa",
			gender: "f",
		},
	},
};

if (localStorage.getItem("wishlistapp")) {
	const json = JSON.parse(localStorage.getItem("wishlistapp"));
	if (Group.is(json)) initialState = json;
}

const group = Group.create(initialState);

onSnapshot(group, (snapshot) => {
	localStorage.setItem("wishlistapp", JSON.stringify(snapshot));
});

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
	<React.StrictMode>
		<App group={group} />
	</React.StrictMode>
);
