// Write your JS code here
import './index.css'

const CryptocurrencyItem = props => {
  const {cryptoCurrencyDetail} = props
  const {currencyLogo, currencyName, euroValue, usdValue} = cryptoCurrencyDetail

  return (
    <li className="item-container">
      <div className="logo-container">
        <img src={currencyLogo} alt={currencyName} className="logo-image" />
        <p className="currency-name">{currencyName}</p>
      </div>
      <div className="usd-container">
        <p className="usd">{usdValue}</p>
        <p className="euro">{euroValue}</p>
      </div>
    </li>
  )
}

export default CryptocurrencyItem
