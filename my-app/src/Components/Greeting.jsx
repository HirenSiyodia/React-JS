// For Components
// const Greeting = () => {
//     return(
//         <h1>Good Morning</h1>
//     )
// }
// export default Greeting;

// *********************************************
// Using Props
const Greeting = ({message}) => {
    return(
        // JSX below = It's sentxical sugar mean less code and more output.
        <h1>{message}</h1> 
    )
}

export default Greeting;