import React from "react";
import {
    Container,
    Image,
    Menu,
  } from 'semantic-ui-react';
import { Link } from "react-router-dom";


export default function HeaderComponent() {
  return (
    <div>
      <Menu fixed="top" inverted>
        <Container>
          <Menu.Item as={Link} to="/" header>
            <Image
              size="mini"
              src="https://react.semantic-ui.com/logo.png"
              style={{ marginRight: "1.5em" }}
            />
            Hudemy
          </Menu.Item>
          <Menu.Item as={Link} to="/courses">Courses</Menu.Item>
        </Container>
      </Menu>
    </div>
  );
}
