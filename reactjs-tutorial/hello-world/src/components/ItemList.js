import React from "react";
import { FaTrashAlt } from "react-icons/fa";

const ItemList = ({ handleDelete, handleCheck, items }) => {
	return (
		<ul>
			{items.map((item) => (
				<li className="item" key={item.id}>
					<input
						type="checkbox"
						onChange={() =>
							handleCheck(item.id)
						}
						checked={item.checked}
					/>
					<lable
						onClick={() => handleCheck(item.id)}
						style={
							item.checked
								? {
										textDecoration:
											"line-through",
								  }
								: null
						}
					>
						{item.item}
					</lable>
					<FaTrashAlt
						onClick={() =>
							handleDelete(item.id)
						}
						role={"button"}
						tabIndex="0"
					/>
				</li>
			))}
		</ul>
	);
};

export default ItemList;
