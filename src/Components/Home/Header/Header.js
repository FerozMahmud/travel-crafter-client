import React from 'react';
import { Container, Navbar } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import useAuth from '../../Hooks/useAuth';
import './Header.css'

const Header = () => {
    const activeStyle = {
        fontWeight: "bold",
        color: "red"
    }
    const { user, logOut } = useAuth()

    return (
        <div>
            <Navbar className="header" bg="dark" variant="dark" collapseOnSelect expand="lg">
                <Container >
                    <Navbar.Brand href="/"><strong>Travel</strong> <span className="text-info">Crafter</span></Navbar.Brand>
                    <Navbar.Toggle />
                    <Navbar.Collapse className="justify-content-end">
                        <NavLink activeStyle={activeStyle} className="nav" to="/home">Home</NavLink>
                        <NavLink activeStyle={activeStyle} className="nav" to="/myBooking">My Booking</NavLink>
                        <NavLink activeStyle={activeStyle} className="nav" to="/manageAllBookings">Manage All Bookings</NavLink>
                        <NavLink activeStyle={activeStyle} className="nav" to="/addBooking">Add Booking</NavLink>

                        {user.email && <span style={{ color: 'yellow' }}>Hello <strong style={{ color: 'green' }}>{user.displayName}</strong></span>}
                        {
                            user.email ?
                                <button className="login-logout btn btn-info mx-2" onClick={logOut}>Log out</button>
                                :
                                <NavLink activeStyle={activeStyle} className="login-logout" to="/login">Login</NavLink>
                        }
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div>
    );
};

export default Header;