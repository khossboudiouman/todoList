/* eslint-disable react/prop-types */
// Désactive temporairement les avertissements liés aux types de propriétés (propTypes)

// Importe le composant TodoItem depuis le fichier TodoItem.jsx
import TodoItem from "./TodoItem";

// Définition du composant TodoList comme une fonction prenant trois propriétés : todos, toggleTodo, deleteTodo
function TodoList({ todos, toggleTodo, deleteTodo }) {
  // Rendu du composant TodoList
  return (
    <ul>
      {/* Mapping sur la liste des todos pour créer un élément TodoItem pour chaque todo */}
      {todos.map(todo => (
        // Chaque TodoItem est associé à une clé unique (ID de la tâche) et reçoit les propriétés todo, toggleTodo et deleteTodo
        <TodoItem key={todo.id} todo={todo} toggleTodo={toggleTodo} deleteTodo={deleteTodo} />
      ))}
    </ul>
  );
}

// Exporte le composant TodoList
export default TodoList;
