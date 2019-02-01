import React from 'react';
import {
  Dropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  Row,
  NavLink
} from 'reactstrap';
import navData from './data/navData';

export default class Example extends React.Component {
  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.state = {
      dropdownOpen: false
    };
  }

  toggle() {
    this.setState(prevState => ({
      dropdownOpen: !prevState.dropdownOpen
    }));
  }

  render() {
    const rowStyle = {
      display: 'flex',
      justifyContent: 'center',
      margin: '1em'
    };
    return (
      <Row style={rowStyle}>
        <Dropdown isOpen={this.state.dropdownOpen} toggle={this.toggle}>
          <DropdownToggle caret>{navData.header}</DropdownToggle>
          <DropdownMenu>
            {navData.list.map((item, index) => (
              <DropdownItem key={index}>
                <NavLink href={`#{item}`}>{item}</NavLink>
              </DropdownItem>
            ))}
            <DropdownItem header />
            <DropdownItem>Some Action</DropdownItem>
            <DropdownItem disabled>Action (disabled)</DropdownItem>
            <DropdownItem divider />
            <DropdownItem>Foo Action</DropdownItem>
            <DropdownItem>Bar Action</DropdownItem>
            <DropdownItem>Quo Action</DropdownItem>
          </DropdownMenu>
        </Dropdown>
      </Row>
    );
  }
}
