import React from 'react';
import {TabContent, TabPane, Nav, NavItem, NavLink, Row,Col} from 'reactstrap';
import classnames from 'classnames';


var bgColors = { "Mist": "#90afc5",
                    "Stone": "#336b87",
                    "Shadow": "#2a3132",
                    "Autumn": "#763626",
};
                
export default class AppDateTabs extends React.Component {
  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.state = {
        activeTab: '1',
        eventList: this.props.data,
        day1: [],
        day2: [],
        day3: [],
        day4: [],
        day5: [],
        day1tab: null
    };
    this.dateSort();
  }

  dateSort(){
      let date1 = (new Date().getYear() + 1900).toString() + '-' + (new Date().getMonth() + 1).toString().padStart(2, '0') + '-' + new Date().getDate();
      let date2 = (new Date(+1).getYear() + 1900).toString() + '-' + (new Date(+1).getMonth() + 1).toString().padStart(2, '0') + '-' + new Date(+1).getDate();
      let date3 = (new Date(+2).getYear() + 1900).toString() + '-' + (new Date(+2).getMonth() + 1).toString().padStart(2, '0') + '-' + new Date(+2).getDate();
      let date4 = (new Date(+3).getYear() + 1900).toString() + '-' + (new Date(+3).getMonth() + 1).toString().padStart(2, '0') + '-' + new Date(+3).getDate();
      let date5 = (new Date(+4).getYear() + 1900).toString() + '-' + (new Date(+4).getMonth() + 1).toString().padStart(2, '0') + '-' + new Date(+4).getDate();
      for(let i = 0; i < this.state.eventList.length; i++){
        let temp = this.state.eventList[i].seatsIOKey.substring(0,10);
        if(temp == date1){
            this.state.day1.push(this.state.eventList[i].seatsIOKey);
        }
        if(temp == date2){
            this.state.day2.push(this.state.eventList[i].seatsIOKey);
        }
        if(temp == date3){
            this.state.day3.push(this.state.eventList[i].seatsIOKey);
        }
        if(temp == date4){
            this.state.day4.push(this.state.eventList[i].seatsIOKey);
        }
        if(temp == date5){
            this.state.day5.push(this.state.eventList[i].seatsIOKey);
        }
      }
      console.log(this.state.day1);
  }

  componentDidMount(){
      let day1TabTemp = [];
      for(let i = 0; i<this.state.day1.length; i++){
        day1TabTemp.push(<Col l12><a id={`timing-${this.state.day1[i]}`} href='/seatbooking' onClick={sessionStorage.setItem('seatsKey',this.state.day1[i])}>{this.state.day1[i].substring(12,16)}</a></Col>);
      }
      console.log(day1TabTemp);
      this.setState({day1tab:day1TabTemp});
      console.log(this.state.day1[0])
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
                        <Col xs="6" sm="4" l="12">
                        <h4>IMAX</h4>
                        </Col>
                        <Col l12>

                        <a id="timing" href="/seatbooking">19:00</a>
                        </Col>

                    </Row>
                    <Row>
                        <h4>3D</h4>
                    </Row>
                    <Row>
                        <h4>2D</h4>
                        {this.state.day1tab}
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