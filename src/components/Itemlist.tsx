
import { useSelector ,useDispatch} from 'react-redux';
import Items from './Items';


const ItemList = () => {

    const todos = useSelector((state) => state.todos);

  return (
    <div className='mx-auto max-w-2xl mt-10 px-4'>
      {todos.map((todo) => (
        <Items
          key={todo.id}
          id={todo.id}
          name={todo.text}
          completed={todo.completed}
        />
      ))}
    </div>
  );
};

export default ItemList;