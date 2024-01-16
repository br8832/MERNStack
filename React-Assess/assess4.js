//1. what is virtual dom - optional
// React creates a dom in memory as an object. IT is a pure javascript object that exists in memory
//2. how react renders dom in conservative manner - optional
// through diffing algorithms check whehter there is some difference between the real dom and the virtual dom
// If react detects a change, it will update it. Otherwise it will simply do nothing
//3. create a class component named - Success and show some quotes on success in it
// see Succes.js
//4. create a functional component SuccessChild, make it child of Success and pass Name and Address to it from Success
// see Success.js and SuccessChild.js
//5. create SuccessStory as another component, pass this as props in SuccessChild from Success component
// see Success.js and SuccessChild.js and SuccessStory.js
//6. create UserSignIn component using uncontrolled way, should be class component
// user component.jsx
//7. create Product component to accept ProductName and ProductPrice
// see product.js and Success.js
//8. pass a random value from SuccessStory component back to Success
// see Success.js and SuccessChild.js and SuccessStory.js
//9. Create a class component and show all the life cycle hooks
// see lifecycle.js
//10. Make a state change, the state should be duplicate and then stop it to call render method to improve efficiency.
// see lifecycle.js