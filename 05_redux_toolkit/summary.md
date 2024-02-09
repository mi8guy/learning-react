We start by making store. One application usually has one store. But there can be exceptions.   
So every application has single store called as single source of truth.
we need configureStore() within it is a object  

``` javascript
//store.js
store = configureStore({
    reducer: todoReducer
})
```

Next we introduce the reducers, because store doesn't take updates from anyone. It needs to know the reducers.  
 
In order to make the reducer.  
/features/todo/todoSlice.js

This is a syntax in documentation, that features are called Slice. Not necessary though.

To create Slice a method is given, createSlice() in the redux toolkit.  
Slice needs 3 things. Name, Initial state and a list of reducers.

so make an initial state first.

```javascript
const initialState = {todos: [{id: 1, text: "Hello world"}]}
```

provide a name, init state and reducers to the createSlice function.

```javascript
export const todoSlice = createSlice({
    name: 'todo',
    initialState,
    reducers: {
        /** 
         * Here, functions need to be defined, unlike context API
         * And it has access to state and action.
         * Actions are some values about todos. Like maybe id, text etc.
         */
        addTodo: (state, action) => {
            const todo = {
                id:nanoid() , // Earlier we were doing Date.now()
                text: action.payload // we are sending text in payload, so no need to write action.payload.text since it is same name as the key.
            }
            // Earlier in redux, this had more steps.
            state.todos.push(todo)
        },
        removeTodo: (state, action) => {
            state.todos = state.todos.filter(todo => todo.id !== action.payload )// payload.id not necessary
        },
        updateTodo: (state, action) => {
            state.todos = state.todos.map(todo => {
                todo.id === action.payload.id ? action.payload : todo
            })
        },
        
    }
})
```

The reducer functions have access to state and action. State gives updated state value in the store. Action contains the payload.

Notice the difference between context API and redux toolkit here, state values need not be spreaded here to append your new value. Because the state is preserved here.

next we need to export all the reducers individually, because we don't know which component will use which reducer

```javascript
export const {addTodo, removeTodo, updateTodo} = todoSlice.actions
```

and another is the main source of all the reducers, to use in the store. Because we need to specify all the reducers in the store.  

```javascript
export default todoSlice.reducer
```
refer line 7 where we specified the reducers to the store.

```javascript
//store.js
import {configureStore} from '@reduxjs/toolkit'
import todoReducer from '../features/todo/todoSlice'

export const store = configureStore({
    reducer: todoReducer
})
```

Now, we head to the components. There are only 2 possibilities in the component, either we have to read the value or send it.

To send value, we have dispatch()

```javascript 
const dispatch = useDispatch()

const addTodoHandler = (e) => {
        e.preventDefault()
        // Dispatch uses reducer to change values in a store.
        dispatch(addTodo(input)) // input is the payload, earlier action.payload used to be written manually.
        setInput('')
    }
```

don't forget to import the reducer. addTodo

To read the values, we have selector(). It has a little different syntax.
We need state access to take values. So we have access to state in a callback.

```javascript
const todos = useSelector(state => state.todos)
```

after this its classic js, apply loops, map, whatever to display the values.







