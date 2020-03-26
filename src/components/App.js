import React from 'react'

import Filters from './Filters'
import PetBrowser from './PetBrowser'

class App extends React.Component {
  constructor() {
    super()

    this.state = {
      pets: [],
      filters: {
        type: 'all'
      }
    }
  }

  onChangeType = (event) => {
    this.setState({
      filters: {
        type: event.target.value
      }
    })
  }

  onFindPetsClick = (event) => {
    // console.log("event.target:", event.target, 
    // "you clicked the find pets button")
    // fetch appropriate pets based on this.state.filters.type

    let url = this.state.filters.type === 'all' ?
    '/api/pets' : `/api/pets?type=${this.state.filters.type}`
    
    fetch(url).then(resp=>resp.json())
    .then(jsonObj => this.setState({pets: jsonObj}))
  }

  onAdoptPet = (petId) => {
    const pets = this.state.pets.map(pet => {
      return pet.id === petId ? { ...pet, isAdopted: true } : pet 
    })
    this.setState({pets: pets})
  }
  
  // confused about how to get an event out of this callback
  // so I can reset the UI like I did in the obsolete version below

  // onAdoptPet = (event, id) => {
  //   event.target.className = event.target.className === "ui primary button" ? "ui disabled button" : "ui primary button"
  //   console.log(event.target)
  //   console.log(id)
  //   // event.target.className === "ui primary button" ? event.target.className = "ui disabled button" : 
  // }

  // componentDidMount

  render() {
    // console.log(this.state.pets)
    return (
      <div className="ui container">
        <header>
          <h1 className="ui dividing header">React Animal Shelter</h1>
        </header>
        <div className="ui container">
          <div className="ui grid">
            <div className="four wide column">
              <Filters onChangeType={this.onChangeType} onFindPetsClick={this.onFindPetsClick}/>
            </div>
            <div className="twelve wide column">
              <PetBrowser pets={this.state.pets} onAdoptPet={this.onAdoptPet}/>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default App
