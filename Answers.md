1. What problem does the context API help solve?

Context API is a way to enable components to share some data without explicitly passing via each component manually.

1. In your own words, describe `actions`, `reducers` and the `store` and their role in Redux. What does each piece do? Why is the store known as a 'single source of truth' in a redux application?

Reducers- The reducer is a pure function that takes the current state and an action, and returns the next state

Actions- Actions are payloads of information that send data from your application to your store.

Store - It stores the whole state of the app in an immutable object tree

1. What is the difference between Application state and Component state? When would be a good time to use one over the other?

Application state can be accessed by all components in the application tree. While Component state can only be accessed through its children. 

1. Describe `redux-thunk`, what does it allow us to do? How does it change our `action-creators`?

Redux Thunk is a middleware that lets you call action creators that return a function instead of an action object. That function receives the store's dispatch method, which is then used to dispatch regular synchronous actions inside the body of the function once the asynchronous operations have completed.

1. What is your favorite state management system you've learned and this sprint? Please explain why! Context API because I was able to grasp it much faster and is a little more straight forward .
