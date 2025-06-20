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
import Greeting from "./components/Greeting";

const App = () => {
    return(
        <Greeting message="Good morning Hiren"/>
    );
}

export default App;