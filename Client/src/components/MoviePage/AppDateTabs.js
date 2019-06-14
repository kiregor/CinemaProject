import React from 'react';
import {TabContent, TabPane, Nav, NavItem, NavLink, Row, Col} from 'reactstrap';
import classnames from 'classnames';

export default class AppDateTabs extends React.Component {
  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.state = {
      activeTab: '1'
    };
  }

  toggle(tab) {
    if (this.state.activeTab !== tab) {
      this.setState({
        activeTab: tab
      });
    }
  }
  render() {
    return (
        <div>
            <Nav tabs>
                <NavItem>
                    <NavLink
                    className={classnames({ active: this.state.activeTab === '1' })}
                    onClick={() => { this.toggle('1'); }}
                    >
                    Today
                    </NavLink>
                </NavItem>
                <NavItem>
                    <NavLink
                    className={classnames({ active: this.state.activeTab === '2' })}
                    onClick={() => { this.toggle('2'); }}
                    >
                    Tuesday XXst 
                    </NavLink>
                </NavItem>
                <NavItem>
                    <NavLink
                    className={classnames({ active: this.state.activeTab === '3' })}
                    onClick={() => { this.toggle('3'); }}
                    >
                    Wednesday XXst 
                    </NavLink>
                </NavItem>
                <NavItem>
                    <NavLink
                    className={classnames({ active: this.state.activeTab === '4' })}
                    onClick={() => { this.toggle('4'); }}
                    >
                    Thursday XXst
                    </NavLink>
                </NavItem>
                <NavItem>
                    <NavLink
                    className={classnames({ active: this.state.activeTab === '5' })}
                    onClick={() => { this.toggle('5'); }}
                    >
                    Friday XXst 
                    </NavLink>
                </NavItem>
            </Nav>
            <TabContent activeTab={this.state.activeTab}>
                <TabPane tabId="1">
                    <Row>
                        <Col>
                            <h4>IMAX</h4>
                        </Col>
                        <Col>
                            <h3> <a href="/seatbooking">21:30</a></h3>
                        </Col>
                    </Row>
                    <Row>
                        <h4>3D</h4>
                    </Row>
                    <Row>
                        <h4>2D</h4>
                    </Row>
                </TabPane>
                <TabPane tabId="2">
                    <Row>
                        <h4>Tab 2 Contents</h4>
                    </Row>
                </TabPane>
                <TabPane tabId="3">
                    <Row>
                        <h4>Tab 3 Contents</h4>
                    </Row>
                </TabPane>
                <TabPane tabId="4">
                    <Row>
                        <h4>Tab 4 Contents</h4>
                    </Row>
                </TabPane>
                <TabPane tabId="5">
                    <Row>
                        <h4>Tab 5 Contents</h4>
                    </Row>
                </TabPane>
                </TabContent>
        </div>
    );
  }
}