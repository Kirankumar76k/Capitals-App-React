import {Component} from 'react'
import './index.css'

const countryAndCapitalsList = [
  {
    id: 'NEW_DELHI',
    capitalDisplayText: 'New Delhi',
    country: 'India',
  },
  {
    id: 'LONDON',
    capitalDisplayText: 'London',
    country: 'United Kingdom',
  },
  {
    id: 'PARIS',
    capitalDisplayText: 'Paris',
    country: 'France',
  },
  {
    id: 'KATHMANDU',
    capitalDisplayText: 'Kathmandu',
    country: 'Nepal',
  },
  {
    id: 'HELSINKI',
    capitalDisplayText: 'Helsinki',
    country: 'Finland',
  },
]

// Write your code here
class Capitals extends Component {
  state = {intialCountry: countryAndCapitalsList[0].id}

  onChangeDistrict = event => {
    console.log(event.target.value)
    this.setState({intialCountry: event.target.value})
  }

  getCountry = () => {
    const {intialCountry} = this.state

    const activeCountryAndCapital = countryAndCapitalsList.find(
      eachItem => eachItem.id === intialCountry,
    )

    return activeCountryAndCapital.country
  }

  render() {
    const {intialCountry} = this.state
    const country = this.getCountry(intialCountry)

    return (
      <div className="bg-container">
        <div className="captial-container">
          <h1 className="heading">Countries And Capitals</h1>
          <div className="question-container">
            <select
              className="item-list"
              value={intialCountry}
              onChange={this.onChangeDistrict}
            >
              {countryAndCapitalsList.map(eachItem => (
                <option key={eachItem.id} value={eachItem.id}>
                  {eachItem.capitalDisplayText}
                </option>
              ))}
            </select>
            <p className="question">is capital of which Country?</p>
          </div>
          <h1 className="name">{country}</h1>
        </div>
      </div>
    )
  }
}
export default Capitals
