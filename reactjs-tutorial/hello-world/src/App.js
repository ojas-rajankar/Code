import "./App.css";
import Header from "./components/Header";
import Main from "./components/Main";
import { useState } from "react";

function App() {
	const greetings = () => {
		const greet = ["Hola", "Namaste", "Hi", "Hello"];
		const int = Math.floor(Math.random() * 4);

    return greet[int];
	};

    const handleNameChange = () => {
      const names = ["Bob", "Kevin", "Dave"];
      const int = Math.floor(Math.random() * 3);
      setName(names[int]);
    };
  
    const [name, setName] = useState("User");
  
    const [items, setItems] = useState([
      {
        id: 1,
        checked: false,
        item: "Item 1",
      },
      {
        id: 2,
        checked: false,
        item: "Item 2",
      },
      {
        id: 3,
        checked: false,
        item: "Item 3",
      },
    ]);
  
    const handleCheck = (id) => {
      const listItems = items.map((item) =>
        item.id === id
          ? { ...item, checked: !item.checked }
          : item,
      );
      setItems(listItems);
      localStorage.setItem(
        "shoppinglist",
        JSON.stringify(listItems),
      );
    };
  
    const handleDelete = (id) => {
      const listItems = items.filter(
        (item) => item.id != id,
      );
      setItems(listItems);
      console.log(listItems);
      localStorage.setItem(
        "shoppinglist",
        JSON.stringify(listItems),
      );
    };
  
    const handleAdd = () => {
      const itemId = items.length + 4;
      items.push({
        id: itemId,
        checked: false,
        item: "Item",
      });
      const listItems = items;
      console.log(listItems);
      setItems(listItems);
      localStorage.setItem(
        "shoppinglist",
        JSON.stringify(listItems),
      );
    };


	return (
		<div className="App">
			<Header greet={greetings()} />
			<Main 
        handleAdd={handleAdd}
        handleDelete={handleDelete}
        handleCheck={handleCheck}
        handleNameChange={handleNameChange}
        name={name}
        items={items}
        greetings={greetings()}
      />
		</div>
	);
}

export default App;
