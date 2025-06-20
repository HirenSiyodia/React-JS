// Basic  call
// const App = () => {
//     return(
//         <h1>My Man</h1>
//     );
// }

// export default App;

// *********************************************
// Called Via Components
// import Greeting from "./components/Greeting";

// const App = () => {
//     return(
//         <Greeting/>
//     );
// }
// export default App;

// ************************************
// How to create component ??
// The shortcut for it is "rafce"
// Using Props
// import Greeting from "./components/Greeting";

// const App = () => {
//     return(
//         <Greeting message="Good morning Hiren"/>
//     );
// }

// export default App;

// Usinf props We are calling images and title as well
import Card from "./components/Card";

const App = () => {
    return(
        <>
            <Card image= "https://tse3.mm.bing.net/th?id=OIP.iu1lCMkUx0NDwQacmlY1BwHaEK&pid=Api&P=0&h=220" title="Hello1"/>
            <Card image= "https://tse3.mm.bing.net/th?id=OIP.iu1lCMkUx0NDwQacmlY1BwHaEK&pid=Api&P=0&h=220" title="Hello"/>        
        </>
    );
}