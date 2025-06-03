import AddItem from "./components/Additem";
import ItemList from "./components/Itemlist";
import Items from "./components/Items";

function App() {
  return (
    <div className="bg-gray-950 min-h-screen text-white">
      {/* Header Section */}
      <div className="flex flex-col items-center justify-center w-full bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 text-white p-8 rounded-b-3xl shadow-lg">
        <h1 className="text-4xl font-extrabold font-sans mb-2 drop-shadow-lg">
          ✅ Todo List
        </h1>
        <p className="text-lg font-medium font-sans mb-1">
          Welcome to your Todo List application!
        </p>
        <p className="text-sm opacity-90">Start by adding your tasks below.</p>
      </div>

      {/* Main Content */}
      <div className="mt-10 max-w-xl mx-auto px-4">
        <AddItem />
      </div>

      <ItemList />
    </div>
  );
}

export default App;
