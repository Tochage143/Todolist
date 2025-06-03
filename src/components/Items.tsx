import React, { useState } from "react";
import { MdDelete, MdEdit } from "react-icons/md";
import { useDispatch } from "react-redux";
import { removeTodo, editTodo, toggleTodo } from "../Redux/todoSlice";

type ItemsProps = {
  id: string;
  name: string;
  completed: boolean;
};

const Items = ({ id, name, completed }: ItemsProps) => {
  const dispatch = useDispatch();
  const [isEditing, setIsEditing] = useState(false);
  const [itemName, setItemName] = useState(name);

  const handleEditClick = () => {
    setIsEditing(true);
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setItemName(e.target.value);
  };

  const handleInputBlur = () => {
    setIsEditing(false);
    if (itemName.trim() !== "" && itemName !== name) {
      dispatch(editTodo({ id, newText: itemName }));
    } else {
      setItemName(name); // revert if empty or no change
    }
  };

  const handleDelete = () => {
    dispatch(removeTodo(id));
  };

  const handleToggle = () => {
    dispatch(toggleTodo(id));
  };

  return (
    <div
      className={`flex items-center justify-between p-4 rounded-xl shadow-md mb-4 transition ${
        completed ? "bg-green-100" : "bg-white/90"
      }`}
    >
      <input
        type="checkbox"
        checked={completed}
        onChange={handleToggle}
        className="mr-4 cursor-pointer w-5 h-5"
      />

      {isEditing ? (
        <input
          type="text"
          value={itemName}
          onChange={handleInputChange}
          onBlur={handleInputBlur}
          autoFocus
          className="flex-grow mr-4 px-3 py-2 rounded-md border border-gray-300 focus:ring-2 focus:ring-indigo-500 text-gray-800"
        />
      ) : (
        <h1
          className={`flex-grow text-lg font-medium mr-4 ${
            completed ? "line-through text-gray-500" : "text-gray-800"
          }`}
          onDoubleClick={handleEditClick} // bonus: double-click to edit
          title="Double-click to edit"
        >
          {itemName}
        </h1>
      )}

      <div className="flex items-center gap-2">
        {!isEditing && (
          <MdEdit
            onClick={handleEditClick}
            className="text-xl text-indigo-600 hover:text-indigo-800 cursor-pointer transition"
          />
        )}
        <MdDelete
          onClick={handleDelete}
          className="text-xl text-red-500 hover:text-red-700 cursor-pointer transition"
        />
      </div>
    </div>
  );
};

export default Items;
