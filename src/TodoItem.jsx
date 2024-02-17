/* eslint-disable react/prop-types */
// Désactive temporairement les avertissements liés aux types de propriétés (propTypes)

// Définition du composant TodoItem comme une fonction prenant trois propriétés : todo, toggleTodo, deleteTodo
function TodoItem({ todo, toggleTodo, deleteTodo }) {
  // Rendu du composant TodoItem
  return (
    <li>
      {/* Input de type checkbox pour marquer la tâche comme terminée */}
      <input
        type="checkbox"
        // L'état checked est déterminé par la propriété completed de l'objet todo
        checked={todo.completed}
        // Lorsque la case à cocher est modifiée, appelle la fonction toggleTodo avec l'ID de la tâche comme argument
        onChange={() => toggleTodo(todo.id)}
      />
      {/* Texte de la tâche avec une décoration en barre si la tâche est terminée */}
      <span style={{ color: todo.completed ? 'line-through' : 'none' }}> {todo.text} </span>
      {/* Bouton pour supprimer la tâche */}
      <button onClick={() => deleteTodo(todo.id)}>Delete</button>
    </li>
  );
}

// Exporte le composant TodoItem
export default TodoItem;
