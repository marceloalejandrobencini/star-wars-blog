import React from "react";
import { useStore } from "../store/Context";
import { Navbar, Nav, NavDropdown, Button } from "react-bootstrap";

const CustomNavbar = () => {
    const { store, actions } = useStore();

    const handleRemoveFavorite = (url) => {
        actions.removeFavorite(url);
    };

    return (
        <Navbar bg="light" expand="lg">
            <Navbar.Brand href="#">Star Wars Blog Marcelo Bencini</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="ml-auto">
                    <NavDropdown title="Favorites" id="basic-nav-dropdown">
                        {store.favorites.length === 0 ? (
                            <NavDropdown.Item>Add Favorite</NavDropdown.Item>
                        ) : (
                            store.favorites.map((item, index) => (
                                <NavDropdown.Item key={index} className="d-flex justify-content-between align-items-center">
                                    {item.name}
                                    <Button variant="danger" size="sm" onClick={() => handleRemoveFavorite(item.url)}>Remove</Button>
                                </NavDropdown.Item>
                            ))
                        )}
                    </NavDropdown>
                </Nav>
            </Navbar.Collapse>
        </Navbar>
    );
};

export default CustomNavbar;
