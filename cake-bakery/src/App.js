import "./App.css";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useRouteMatch,
  useParams,
} from "react-router-dom";
import Home from "./Pages/Home/Home/Home";
import Appointment from "./Pages/Appointment/Appointment/Appointment";
import Login from "./Pages/Login/Login/Login";
import Register from "./Pages/Login/Register/Register";
import AuthProvider from "./contexts/AuthProvider/AuthProvider";
import PrivateRoute from "./Pages/Login/PrivateRoute/PrivateRoute";
import Dashboard from "./Pages/Dashboard/Dashboard/Dashboard";
import AddCakes from "./Pages/Home/AddCakes/AddCakes";
import CakeCollection from "./Pages/CakeCollection/CakeCollection";
import CakeOrder from "./Pages/Home/CakeOrder/CakeOrder";
import MoreOvens from "./Pages/Home/More Ovens/MoreOvens";

function App() {
  return (
    <div className="App">
      <AuthProvider>
        <Router>
          <Switch>
            <PrivateRoute path="/dashboard">
              <Dashboard></Dashboard>
            </PrivateRoute>
            <Route path="/login">
              <Login></Login>
            </Route>
            <Route path="/register">
              <Register></Register>
            </Route>
            <Route path="/moreOvens">
              <MoreOvens></MoreOvens>
            </Route>
            <PrivateRoute path="/cakeCollection">
              <Appointment></Appointment>
            </PrivateRoute>
            <PrivateRoute path="/cakeOrder/:cakeId">
              <CakeOrder></CakeOrder>
            </PrivateRoute>
            <Route path="/">
              <Home></Home>
            </Route>
          </Switch>
        </Router>
      </AuthProvider>
    </div>
  );
}

export default App;
