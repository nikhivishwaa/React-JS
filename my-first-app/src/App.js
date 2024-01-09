// import logo from './logo.svg';
import './App.css';

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
        
//           My First React Project
//         </a>
//       </header>
//     </div>
//   );
// }

let name = "Nikhil Vishwakarma"
function App() {
  return (
    <>
    <div className="container">
      <h1>This is Editing in JSX</h1>
      <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolor, eveniet adipisci praesentium repudiandae totam mollitia saepe inventore nisi esse qui provident distinctio nam excepturi ipsam! Quod accusamus aspernatur eveniet libero?</p>
      <div className="copyight">
        <hr />
        <p>&copy; {name}</p>
      </div>
    </div>
    </>
  );
}

export default App;
