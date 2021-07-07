import React, { Component } from 'react';
import WeatherTable from './WeatherTable';
import WeatherForm from './WeatherForm';
import WeatherResult from './WeatherResult';

class App extends Component {

    state = {
        weathers: [],
        currCity: "",
        currCountry: "",
        weather: null,
        time: ""
    };

    removeWeather = index => {
        const { weathers } = this.state;

        this.setState({
            weathers: weathers.filter((weather, i) => {
                return i !== index;
            })
        });
    }

    search = weather => {
        fetch(`https://api.openweathermap.org/data/2.5/weather?q=${weather.country},${weather.city}&units=metric&APPID=ed6a9cdf1450c17abea646a2589684de`)
            .then(response => response.json())
            .then(data => {
                if (data.cod === 200) {
                    this.setState({
                        weathers: [...this.state.weathers, weather],
                        currCity: weather.city,
                        currCountry: weather.country
                    });
                }
                this.setState({
                    weather: data,
                    time: weather.time
                });
            });
    }

    render() {
        const { weathers, weather, time } = this.state;

        return (
            <div className="container">
                <h1>Today's Weather</h1>
                <hr />
                <WeatherForm search={this.search} />
                <br />
                <WeatherResult weather={weather} time={time} />
                <br />
                <h3>Search History</h3>
                <WeatherTable weatherData={weathers} removeWeather={this.removeWeather} search={this.search} />
            </div>
        );
    }
}

export default App;