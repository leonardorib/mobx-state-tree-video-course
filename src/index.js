import React from "react";
import ReactDOM from "react-dom/client";

import "./assets/index.css";
import App from "./components/App";

import { Group } from "./models/Group";

import { getSnapshot } from "mobx-state-tree";

let initialState = {
	users: {},
};

let group = (window.group = Group.create(initialState));

const root = ReactDOM.createRoot(document.getElementById("root"));

const renderApp = () => {
	root.render(
		<React.StrictMode>
			<App group={group} />
		</React.StrictMode>
	);
};

renderApp();

if (module.hot) {
	module.hot.accept(["./components/App"], () => {
		// new components
		renderApp();
	});

	module.hot.accept(["./models/Group"], () => {
		// new model definitions
		const snapshot = getSnapshot(group);
		group = window.group = Group.create(snapshot);
		renderApp();
	});
}
