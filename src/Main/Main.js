import React,{Component} from 'react';
import './Main.css';
import logo from './logo.png';
import { Row, Col } from 'react-bootstrap';

class Main extends Component{
    render(){
        return (
            <div className="container-fluid">
                <Row className="show-grid shadow">
                    <Col className="p10 br2" xs={12} md={2}>
                        <p className="text-left nom"><b>Menu</b></p>
                    </Col>
                    <Col className="p5" xs={12} md={10}>
                        <img src={logo} alt="Logo" className="imgLogo" />
                    </Col>
                </Row>
            </div>
        )
    }
}

export default Main;