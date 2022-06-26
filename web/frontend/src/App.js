import Navbar from "./components/Navbar";
import Sidebar from "./components/Sidebar";
import Login from "./views/auth/Login";


function App() {
    const auth = localStorage.getItem('auth');

    return (
        <div>
            {auth ? <Navbar/> : <Login/>}
            {/*{auth ? <Sidebar/> : <Login/>}*/}
        </div>
    );
}

export default App;
