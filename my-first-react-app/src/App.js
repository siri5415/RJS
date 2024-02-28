import logo from './logo.svg';
import './App.css';
import Users from './Components/Users';
import UsersState from './Components/UsersState';
import Footer from './Components/Footer';


function App() {
  const appname = "My First React APP";
  return (
    <div className="App">
    <h1>Welcome to  {appname}</h1>  
    <h1>As of now we are in class {1 + 1}</h1> 


    <Users Count = "5" Subtitle="Active Users">Below is the list of Active Users</Users>
    {/* <Users Count = "50" Subtitle="InActive Users">Below is the list of InActive Users</Users>
    <Users Count = "500" Subtitle="Deleted Users">Below is the list of Deleted Users</Users> */}
    <UsersState/>
    <Footer message="Footer Message from the Parent"/>
    </div>
  );
}

export default App;
