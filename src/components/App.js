import React from "react";
import { observer } from "mobx-react";
import logo from "../assets/santa-claus.png";
import "../assets/index.css";
import WishListView from "./WishListView";

function App(props) {
	const { group } = props;
	const [selectedUserId, setSelectedUserId] = React.useState(null);
	const selectedUser = group.users.get(selectedUserId);
	const onSelectUser = (event) => {
		setSelectedUserId(event.target.value);
	};
	return (
		<div className="App">
			<header className="App-header">
				<img src={logo} className="App-logo" alt="logo" />
				<h1>WishList</h1>
			</header>
			<select onChange={onSelectUser}>
				<option>- Select User -</option>
				{Array.from(group.users.values()).map((user) => (
					<option key={user.id} value={user.id}>
						{user.name}
					</option>
				))}
			</select>
			<button onClick={group.drawLots}>Draw lots</button>
			{selectedUser && <User user={selectedUser} />}
		</div>
	);
}

const User = observer((props) => {
	const { user } = props;
	return (
		<div>
			<WishListView wishList={user.wishList} />
			<button onClick={user.getSuggestions}>Suggestions</button>
			<hr />
			<h2>{user.recipient ? user.recipient.name : ""}</h2>
			{user.recipient && (
				<WishListView wishList={user.recipient.wishList} readonly />
			)}
		</div>
	);
});

export default App;
