import React from 'react';
import {
  Dropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  Row,
  NavLink,
  Nav
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
        <Nav>
          <Dropdown nav isOpen={this.state.dropdownOpen} toggle={this.toggle}>
            <DropdownToggle caret>{navData.header}</DropdownToggle>
            <DropdownMenu>
              {navData.list.map((item, index) => (
                <DropdownItem key={index} href={`#${item.pinyin}`}>
                  {item.char}
                </DropdownItem>
              ))}
            </DropdownMenu>
          </Dropdown>
        </Nav>
      </Row>
    );
  }
}
