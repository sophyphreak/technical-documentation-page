import React, { Component } from 'react';
import { Row, Col } from 'reactstrap';
import Sidebar from './navigation/Sidebar';
import MobileNav from './navigation/MobileNav';
import Body from './Body/Body';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      mobile: window.innerWidth < 500
    };
    this.handleResize = this.handleResize.bind(this);
  }
  handleResize() {
    const mobile = window.innerWidth < 500;
    this.setState({
      mobile
    });
  }

  componentDidMount() {
    this.handleResize();
    window.addEventListener('resize', this.handleResize);
  }

  componentWillUnmount() {
    window.removeEventListener('resize', this.handleResize);
  }
  render() {
    const mobile = this.state.mobile;
    return (
      <div>
        {mobile && <MobileNav />}
        <Row style={{ margin: '1em' }}>
          {!mobile && <Sidebar />}
          <Col xs={!mobile && { offset: 2 }}>
            <Body />
          </Col>
        </Row>
      </div>
    );
  }
}

export default App;
