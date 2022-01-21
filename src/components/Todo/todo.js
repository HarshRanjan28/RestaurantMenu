import React, { useState, useEffect } from "react";
import "./style.css";

const getLocalData = () => {
  const lists = localStorage.getItem("todolist");
  if (lists) {
    return JSON.parse(lists);
  } else {
    return [];
  }
};

const Todo = () => {
  const [inputData, setinputData] = useState("");
  const [items, setItems] = useState(getLocalData());
  const [editedItem, seteditedItem] = useState("");
  const [toggleButton, settoggleButton] = useState(false);

  const addItem = () => {
    if (!inputData) {
      alert("Please add the items");
    } else if (inputData && toggleButton) {
      setItems(
        items.map((curElem) => {
          if (curElem.id === editedItem) {
            return { ...curElem, name: inputData };
          }
          return curElem;
        })
      );
      seteditedItem();
      setinputData("");
      settoggleButton(false);
    } else {
      const myNewinputData = {
        id: new Date().getTime().toString(),
        name: inputData,
      };
      setItems([...items, myNewinputData]);
      setinputData("");
    }
  };

  const editItem = (index) => {
    const item_edited = items.find((curElem) => {
      return curElem.id === index;
    });
    seteditedItem(index);
    setinputData(item_edited.name);
    settoggleButton(true);
  };

  const deleteItem = (index) => {
    const updatedList = items.filter((curElem) => {
      return curElem.id != index;
    });
    setItems(updatedList);
  };

  const removeAll = () => {
    setItems([]);
  };

  useEffect(() => {
    localStorage.setItem("mytodolist", JSON.stringify(items));
  }, [items]);
  return (
    <>
      <div className="main-div">
        <div className="child-div">
          <figure>
            <img
              src="https://raw.githubusercontent.com/thapatechnical/reactjsByThapaTechnical/fdfcb12eac37b74d060e344e977df5749a939200/public/images/todo.svg"
              alt="todologo"
            />
            <figcaption>Add Your List Here</figcaption>
          </figure>
          <div className="addItems">
            <input
              type="text"
              placeholder="Add Items"
              className="form-control"
              value={inputData}
              onChange={(e) => setinputData(e.target.value)}
            />
            {toggleButton ? (
              <i className="far fa-edit add-btn" onClick={addItem}></i>
            ) : (
              <i className="fa fa-plus add-btn" onClick={addItem}></i>
            )}
          </div>
          {/*show items*/}
          <div className="showItems">
            {items.map((curElem) => {
              return (
                <div className="eachItem" key={curElem.id}>
                  <h3>{curElem.name}</h3>
                  <div className="todo-btn">
                    <i
                      className="far fa-edit add-btn"
                      onClick={() => editItem(curElem.id)}
                    ></i>
                    <i
                      className="far fa-trash-alt add-btn"
                      onClick={() => deleteItem(curElem.id)}
                    ></i>
                  </div>
                </div>
              );
            })}
          </div>

          {/*remove items*/}
          <div className="showItems">
            <button
              className="btn-effect04"
              data-sm-link-text="Remove All"
              onClick={removeAll}
            >
              <span>Check List</span>
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Todo;
