import { useState } from "react";

function InputForm () {
    // 1. set the state. the initial state will be an array since we are storing a list of todo items
    // 2. render the state. create a map function that will iterate through the todo array
    // 3. create a piece of state that tracks the input of users
    // 4. connect the input field to the state we created for user input by setting the value of the input field to the input state
    // 5. the useState is blank and won't change even though we created input state. 
    //    - use onChange() to change the state of as the user types in the input
    // 6. create a function in the button that logs the user input in the todo list
    //    - use setTodos() to spead the current todo list and add the new user input
    //    - use setInput() to clear input field as user types
    // 7. Wrap the input and button in a form so that when user hits enter, the input is submitted
    //    - add attr to button type="submit"
    // 8. Add e.preventDefault to stop the page from refreshing after submitting a form
    
    const [ todos, setTodos  ] = useState([]);
    const [ input, setInput ] = useState("");

    const addTodo = (e) => {
        e.preventDefault();
        setTodos([...todos, input]);
        setInput("");
    };

    return(
        <div>
            <h1>To Do List</h1>
            <form>
                <input 
                value={input}
                onChange={ e => setInput(e.target.value)}
                type="text"
                />
                <button type="submit" onClick={addTodo}>Add Todo</button> 
            </form>
           
           <h2>List of Todos</h2>
           {/* In the map function, parenthesis are used to directly return code */}
           {/* In the map function, if we want to add JSX, we would use JSX and then use return keyword to return code */}
           {todos.map((todo) => (
            <p>{todo}</p>
           ))}
         </div>
    );
}

export default InputForm;