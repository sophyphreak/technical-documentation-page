import React from 'react';
import { Row, Col } from 'reactstrap';
import Sidebar from './Navigation/Sidebar';

const App = () => (
  <Row style={{ margin: '1em' }}>
    <Col sm="1">
      <Sidebar />
    </Col>
    <Col />
  </Row>
);

export default App;
