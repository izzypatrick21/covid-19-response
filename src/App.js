import React, { Component } from 'react'

import Cards from './components/Cards/Cards';
import Chart from './components/Chart/Chart';
import CountryPicker from './components/CountryPicker/CountryPicker';

import styles from './App.module.css'
import { fetchData } from './api'

import coronaImage from './images/cov19.jpg'
import HowToStaySafe from './components/HowToStaySafe/HowToStaySafe';

class App extends Component {
  state = {
    data: {},
    country: '',
  }

  async componentDidMount() {
    const fetch_Data = await fetchData();
    this.setState({ data: fetch_Data });
  }

  handleCountryChange = async (country) => {
    const fetchedData = await fetchData(country);

    this.setState({ data: fetchedData, country: country });
  }

  render() {

    const { data, country } = this.state;

    return (
      <div className={styles.container} >
        <img className={styles.image} src={coronaImage} alt="COVID-19" />
        <HowToStaySafe />
        <Cards data={data} />
        <CountryPicker handleCountryChange={this.handleCountryChange} />
        <Chart data={data} country={country} />
      </div >
    )
  }
}

export default App;
