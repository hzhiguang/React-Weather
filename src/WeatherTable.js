import React, { Component } from 'react';
import Table from 'react-bootstrap/Table';
import Button from 'react-bootstrap/Button';
import Alert from 'react-bootstrap/Alert';

class WeatherTable extends Component {

    search = (city, country) => {
        this.newState = ({
            city: city,
            country: country,
            time: new Date()
        });
        this.props.search(this.newState);
    }

    render() {
        const TableHeader = () => {
            return (
                <thead>
                    <tr>
                        <th>S/No.</th>
                        <th>City</th>
                        <th>Country</th>
                        <th>Time</th>
                        <th width="10px"></th>
                        <th width="10px"></th>
                    </tr>
                </thead>
            );
        };

        const TableBody = props => {
            const rows = props.weatherData.map((row, index) => {
                return (
                    <tr key={index}>
                        <td>{index + 1}</td>
                        <td>{row.city}</td>
                        <td>{row.country}</td>
                        <td>{row.time.toLocaleTimeString()}</td>
                        <td>
                            <Button onClick={() => this.search(row.city, row.country)}>
                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-search" viewBox="0 0 16 16">
                                    <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z" />
                                </svg>
                            </Button>
                        </td>
                        <td>
                            <Button variant="secondary" onClick={() => props.removeWeather(index)}>
                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-trash-fill" viewBox="0 0 16 16">
                                    <path d="M2.5 1a1 1 0 0 0-1 1v1a1 1 0 0 0 1 1H3v9a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2V4h.5a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1H10a1 1 0 0 0-1-1H7a1 1 0 0 0-1 1H2.5zm3 4a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-1 0v-7a.5.5 0 0 1 .5-.5zM8 5a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-1 0v-7A.5.5 0 0 1 8 5zm3 .5v7a.5.5 0 0 1-1 0v-7a.5.5 0 0 1 1 0z" />
                                </svg>
                            </Button>
                        </td>
                    </tr>
                );
            });

            return <tbody>{rows}</tbody>;
        };

        if (!this.props.weatherData.length) {
            return (
                <Alert variant='warning'>
                    No record found!
                </Alert>
            );
        } else {
            return (
                <Table>
                    <TableHeader />
                    <TableBody weatherData={this.props.weatherData} removeWeather={this.props.removeWeather} />
                </Table>
            );
        }
    }
}

export default WeatherTable;