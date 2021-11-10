import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './App.css';
import Home from './Components/Home/Home';
import Header from './Components/Home/Header/Header';
import Footer from './Components/Home/Footer/Footer';
import Login from './Components/Login/Login';
import NotFound from './Components/Error/NotFound';
import AddBooking from './Components/Home/Service/AddBooking/AddBooking';
import Details from './Components/Details/Details';
import AuthProvider from './Components/Context/AuthProvider';
import PrivateRoute from './Components/PrivateRoute/PrivateRoute';
import MyBooking from './Components/MyBooking/MyBooking';
import ManageAllBookings from './Components/ManageAllBookings/ManageAllBookings';

function App() {
  return (
    <div className="App">
      <AuthProvider>
        <Router>
          <Header></Header>
          <Switch>
            <Route exact path="/">
              <Home></Home>
            </Route>
            <Route path="/home">
              <Home></Home>
            </Route>
            <Route path="/login">
              <Login></Login>
            </Route>
            <PrivateRoute path="/addBooking">
              <AddBooking></AddBooking>
            </PrivateRoute>
            <PrivateRoute path="/myBooking">
              <MyBooking></MyBooking>
            </PrivateRoute>
            <PrivateRoute path="/manageAllBookings">
              <ManageAllBookings></ManageAllBookings>
            </PrivateRoute>
            <PrivateRoute path="/details/:serviceId">
              <Details></Details>
            </PrivateRoute>
            <Route path="*">
              <NotFound></NotFound>
            </Route>
          </Switch>
          <Footer></Footer>
        </Router>
      </AuthProvider>
    </div>
  );
}

export default App;
