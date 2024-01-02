import logo from "../assets/santa-claus.png";
import "../assets/index.css";
import WishListView from "./WishListView";

function App(props) {
	return (
		<div className="App">
			<header className="App-header">
				<img src={logo} className="App-logo" alt="logo" />
				<h1>WishList</h1>
			</header>
			<WishListView wishList={props.wishList} />
		</div>
	);
}

export default App;
