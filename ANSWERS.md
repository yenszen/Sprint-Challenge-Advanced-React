- [ ] Why would you use class component over function components (removing hooks from the question)?

We would use class components over function components because the former allows us access to lifecycle methods that are not present in the latter. We can also use the “this” keyword with class based components to access our state and props. However, the biggest reason we would use class components over function components is to control the behaviour of our app, which we cannot do with function components since it focuses more on UI.

- [ ] Name three lifecycle methods and their purposes.

The render() method handles the rendering of our component to the UI, and it occurs during the mounting and updating stages of our component.
The componentDidMount() method allows us to instantiate our network requests and load data from a remote endpoint, as it is invoked immediately after a component is mounted.
The componentDidUpdate() method is invoked immediately after each update to the component, except for the initial render. It handles network requests that compares current to previous props.

- [ ] What is the purpose of a custom hook?

Custom hooks are a mechanism to reuse stateful logic, with the condition that all state and effects inside of it are fully isolated each time we use a custom hook.

- [ ] Why is it important to test our apps?

It is vital we test our apps to identify and fix potential bugs in our applications before launch. Testing also allows us to review user experience and determine if it requires any modification or improvements.