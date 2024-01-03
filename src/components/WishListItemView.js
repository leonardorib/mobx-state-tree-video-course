import React from "react";
import { observer } from "mobx-react";
import WishListItemEdit from "./WishListItemEdit";
import { clone, getSnapshot, applySnapshot } from "mobx-state-tree";

const WishListItemView = (props) => {
	const { item } = props;
	const [isEditing, setIsEditing] = React.useState(false);
	const [cloneState, setCloneState] = React.useState(null);
	const onToggleEdit = () => {
		setIsEditing(true);
		setCloneState(clone(item));
	};
	const onCancelEdit = () => {
		setIsEditing(false);
	};
	const onSaveEdit = () => {
		applySnapshot(item, getSnapshot(cloneState));
		setIsEditing(false);
		setCloneState(null);
	};
	const renderEditable = () => {
		return (
			<li className="item">
				<WishListItemEdit item={cloneState} />
				<button onClick={onCancelEdit}>❎</button>
				<button onClick={onSaveEdit}>💾</button>
			</li>
		);
	};
	return isEditing ? (
		renderEditable()
	) : (
		<li className="item">
			{item.image && <img src={item.image} alt={item.name} />}
			<h3>{item.name}</h3>
			<span>{item.price} €</span>
			<button onClick={onToggleEdit}>✎</button>
			<button onClick={item.remove}>🗑</button>
		</li>
	);
};

export default observer(WishListItemView);
