// Write your JS code here
import {Component} from 'react'
import Loader from 'react-loader-spinner'
import CryptocurrencyItem from '../CryptocurrencyItem'

import './index.css'
import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css'

class CryptocurrenciesList extends Component {
  state = {
    cryptoCurrenciesList: [],
    isLoading: true,
  }

  componentDidMount() {
    this.getCryptoCurrenciesList()
  }

  getCryptoCurrenciesList = async () => {
    const response = await fetch(
      'https://apis.ccbp.in/crypto-currency-converter',
    )
    const data = await response.json()
    console.log(data)
    const update = data.map(each => ({
      id: each.id,
      currencyLogo: each.currency_logo,
      currencyName: each.currency_name,
      euroValue: each.euro_value,
      usdValue: each.usd_value,
    }))
    this.setState({cryptoCurrenciesList: update, isLoading: false})
  }

  render() {
    const {cryptoCurrenciesList, isLoading} = this.state
    return (
      <>
        {isLoading ? (
          <div data-testid="loader">
            <Loader type="Rings" color="#ffffff" height={80} width={80} />
          </div>
        ) : (
          <div>
            <ul className="crypto-current-list">
              <li className="type-container">
                <p className="coin">Coin Type</p>
                <div className="usd-container">
                  <p className="usd">USD</p>
                  <p className="euro">EURO</p>
                </div>
              </li>
              {cryptoCurrenciesList.map(each => (
                <CryptocurrencyItem cryptoCurrencyDetail={each} key={each.id} />
              ))}
            </ul>
          </div>
        )}
      </>
    )
  }
}

export default CryptocurrenciesList
