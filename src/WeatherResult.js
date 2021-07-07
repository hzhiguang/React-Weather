import React, { Component } from 'react';
import Alert from 'react-bootstrap/Alert';

class WeatherResult extends Component {

    render() {
        if (this.props.weather === null) {
            return (
                <div></div>
            );
        }
        else if (this.props.weather.cod === 200) {
            return (
                <div>
                    <p>
                        {this.props.weather.name},{this.props.weather.sys.country}
                        {<br />}
                        <img className="img-fluid" src={`/images/${this.props.weather.weather[0].icon}.png`} alt="weather" />
                        {<br />}
                        Description: {this.props.weather.weather[0].description}
                        {<br />}
                        Temperature: {this.props.weather.main.temp_min}&deg;C ~ {this.props.weather.main.temp_max}&deg;C
                        {<br />}
                        Humidity: {this.props.weather.main.humidity}%
                        {<br />}
                        Time: {this.props.time.toLocaleString()}
                    </p>
                </div>
            );
        } else {
            return (
                <Alert variant='danger'>
                    Invalid city/country!
                </Alert>
            );
        }
    }
}

export default WeatherResult;