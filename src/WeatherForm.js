import React, { Component } from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';

class WeatherForm extends Component {

    constructor(props) {
        super(props);

        this.initialState = {
            city: '',
            country: '',
            time: ''
        };

        this.state = this.initialState;
    }

    handleChange = event => {
        const { name, value } = event.target;

        this.setState({
            [name]: value,
            time: new Date()
        });
    }

    search = (event) => {
        event.preventDefault();

        this.props.search(this.state);
        this.setState(this.initialState);
    }

    clear = (event) => {
        event.preventDefault();
        this.setState(this.initialState);
    }

    render() {
        const { city, country } = this.state;

        return (
            <Form onSubmit={this.search}>
                <Form.Row className="align-items-center">
                    <Col sm={3}>
                        <Form.Label htmlFor="city" srOnly>City</Form.Label>
                        <Form.Control className="mb-2" id="city" name="city" placeholder="City" value={city} onChange={this.handleChange} required />
                    </Col>
                    <Col sm={6}>
                        <Form.Label htmlFor="country" srOnly>Country</Form.Label>
                        <Form.Control className="mb-2" id="country" name="country" placeholder="Country" value={country} onChange={this.handleChange} required />
                    </Col>
                    <Col xs="auto">
                        <Button type="submit" variant="primary" className="mb-2">Search</Button>
                    </Col>
                    <Col xs="auto">
                        <Button type="button" variant="secondary" className="mb-2" onClick={this.clear}>Clear</Button>
                    </Col>
                </Form.Row>
            </Form>
        );
    }
}

export default WeatherForm;