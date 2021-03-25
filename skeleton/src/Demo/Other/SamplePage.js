import React, {Component} from 'react';
import {Row, Col} from 'react-bootstrap';

import Aux from "../../hoc/_Aux";
import Card from "../../App/components/MainCard";
import { Genograma } from './Genograma';

class SamplePage extends Component {
    render() {
        return (
            <Aux>
                <Row>
                    <Col>
                        <Card title='Hello Card' isOption>
                           <Genograma/>
                        </Card>
                    </Col>
                </Row>
            </Aux>
        );
    }
}

export default SamplePage;