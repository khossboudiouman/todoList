// Importe le hook useState depuis la bibliothèque React
import { useState } from "react";

// Importe le composant TodoList depuis le fichier TodoList.jsx
import TodoList from "./TodoList";

// Définition du composant App
function App() {
  // Déclare deux états : todos pour stocker la liste des tâches et inputValue pour stocker la valeur saisie dans le champ d'entrée
  const [todos, setTodos] = useState([]);
  const [inputValue, setInputValue] = useState('');

  // Fonction pour mettre à jour la valeur de inputValue en fonction de la saisie de l'utilisateur
  function handleInputChange(e) {
    setInputValue(e.target.value);
  }

  // Fonction pour ajouter une nouvelle tâche à la liste des todos lorsque le formulaire est soumis
  function handleSubmit(e) {
    e.preventDefault();
    if (inputValue.trim() !== '') {
      // Ajoute une nouvelle tâche à la liste des todos avec un ID unique, le texte saisi par l'utilisateur et l'état complet par défaut à false
      setTodos([...todos, { id: Date.now(), text: inputValue, completed: false }]);
      // Réinitialise la valeur du champ d'entrée après l'ajout d'une nouvelle tâche
      setInputValue('');
    }
  }

  // Fonction pour basculer l'état complet d'une tâche (terminée ou non) en fonction de son ID
  function toggleTodo(id) {
    setTodos(todos.map(todo => todo.id === id ? { ...todo, completed: !todo.completed } : todo ));
  }

  // Fonction pour supprimer une tâche de la liste en fonction de son ID
  function deleteTodo(id) {
    setTodos(todos.filter(todo => todo.id !== id));
  }

  // Rendu du composant App
  return (
    <div className="container">
      <h1>Todo List</h1>
      {/* Formulaire pour ajouter une nouvelle tâche */}
      <form onSubmit={handleSubmit}>
        <input type="text" className="form-control" value={inputValue} onChange={handleInputChange} />
        <button type="submit" className="btn btn-primary">Add Todo</button>
      </form>
      {/* Affichage de la liste des tâches à l'aide du composant TodoList */}
      <TodoList todos={todos} toggleTodo={toggleTodo} deleteTodo={deleteTodo} />
    </div>
  );
}

// Exporte le composant App
export default App;
