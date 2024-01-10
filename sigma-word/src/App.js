import './App.css';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import Ticket from './components/Ticket';

function App() {
  return (
    <>
    <Navbar />
    {/* <Ticket title="Happy Birthday" desc="This is Props for this component" /> */}
    {/* <Ticket /> */}
    {/* <Ticket title="This is Required prop" desc={56} /> */}
    {/* <Ticket title="This is Required prop" /> */}
    <div className="container my-4">
    <h3>Welcome to Sigma Text Analyzer</h3>
    <TextForm label="Enter Your Text Here" rows="7"/>
    </div>
    </>
  );
}

export default App;
