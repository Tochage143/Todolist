import { useState } from "react";
import { useDispatch } from "react-redux";
import { addTodo } from "../Redux/todoSlice";

const AddItem = () => {
  const [inputValue, setInputValue] = useState("");
  const dispatch = useDispatch();

  const handleAddTodo = () => {
    if (inputValue.trim()) {
      dispatch(addTodo(inputValue));
      setInputValue("");
    }
  };
  return (
    <div className="flex flex-col sm:flex-row justify-center items-center gap-4 bg-white/90 p-4 rounded-2xl shadow-md">
      <input
        type="text"
        placeholder="✍️ Add a new task..."
        className="w-full sm:w-2/3 p-3 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-indigo-400 transition-all duration-200 text-gray-800"
        onChange={(e) => setInputValue(e.target.value)}
        value={inputValue}
      />
      <button
        className="w-full sm:w-auto bg-indigo-500 text-white px-5 py-3 rounded-xl font-semibold hover:bg-indigo-600 active:scale-95 transition-all duration-150"
        onClick={handleAddTodo}
      >
        ➕ Add
      </button>
    </div>
  );
};

export default AddItem;
