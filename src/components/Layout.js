import React, { useState } from 'react';
import { Row, Col } from 'react-bootstrap';
import Navbar from './Navbar';
import Sidebar from './Sidebar';


function Layout() {
  const [selectedItem, setSelectedItem] = useState("Dashboard");

  const handleSidebarClick = (item) => {
    setSelectedItem(item);
  };

  return (
    <>
   
      <Row>
        <Col md={3} className="p-0">
          <Sidebar onClick={handleSidebarClick} />
        </Col>
        <Col md={8} className="p-4">
          <Navbar selectedItem={selectedItem} />
        </Col>
        <Col></Col>
      </Row>
      
    </>
  );
}

export default Layout;
