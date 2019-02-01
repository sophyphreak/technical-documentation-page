import React from 'react';
import { Col, Nav, NavItem, NavLink } from 'reactstrap';
import navData from './data/navData';

export default class Example extends React.Component {
  render() {
    return (
      <Col sm="2">
        <p>{navData.header}</p>
        <Nav vertical>
          {navData.list.map((item, index) => (
            <NavItem key={index}>
              <NavLink href={`#${item.pinyin}`}>{item.char}</NavLink>
            </NavItem>
          ))}
        </Nav>
      </Col>
    );
  }
}
