import React, { useState } from 'react';
import { Nav, NavItem, NavLink } from 'react-bootstrap';

const Sidebar = ({ onClick }) => {
    const [selected, setSelected] = useState("Dashboard");

    return (
        <div className="sidebar rounded shadow p-3 mb-5 bg-white rounded">
            <h5 className="text-center mt-3 text-violet">Borrow and Return Systems</h5><br />
            <h6 className="text-center">IT Department KDR Transport</h6>
            <Nav className="mt-4 flex-column" vertical="true">
                <NavItem>
                    <NavLink 
                        className={`mb-2 text-dark ${selected === "Dashboard" ? "selected" : ""}`} 
                        href="/dashboard" 
                        onClick={() => {
                            setSelected("Dashboard");
                            onClick("Dashboard");
                        }}
                    >
                        Dashboard
                    </NavLink>
                </NavItem>
                <NavItem>
                    <NavLink 
                        className={`mb-2 text-dark ${selected === "Equipments" ? "selected" : ""} `} 
                        href="#" 
                        onClick={() => {
                            setSelected("Equipments");
                            onClick("Equipments");
                        }}
                    >
                        Equipments
                    </NavLink>
                </NavItem>
                <NavItem>
                    <NavLink 
                        className={`mb-2 text-dark ${selected === "Log-Equipment" ? "selected" : ""}`} 
                        href="#" 
                        onClick={() => {
                            setSelected("Log-Equipment");
                            onClick("Log-Equipment");
                        }}
                    >
                        Log-Equipment
                    </NavLink>
                </NavItem>
                <NavItem>
                    <NavLink 
                        className={`mb-2 text-dark ${selected === "Members" ? "selected" : ""}`} 
                        href="#" 
                        onClick={() => {
                            setSelected("Members");
                            onClick("Members");
                        }}
                    >
                        Members
                    </NavLink>
                </NavItem>
                <NavItem>
                    <NavLink 
                        className={`mb-2 text-dark ${selected === "Search" ? "selected" : ""}`} 
                        href="#" 
                        onClick={() => {
                            setSelected("Search");
                            onClick("Search");
                        }}
                    >
                        Search
                    </NavLink>
                </NavItem>
            </Nav>
        </div>
    );
};

export default Sidebar;
