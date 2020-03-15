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

  fetchPets=(url)=>{
    return fetch(url)
    .then(resp => resp.json())
    .then(pets => this.setState({pets: pets}))
  }

  onFindPetsClick=()=>{
    let {type} = this.state.filters
    let url
    if(type === 'all'){
      url = "/api/pets"}
    else if(type === 'cat'){
      url = "/api/pets?type=cat"}
    else if(type === 'dog'){
      url = "/api/pets?type=dog"
    }
    else{
      url ="/api/pets?type=micropig"
    }

      
      this.fetchPets(url)
  }
  

  onChangeType=(newType)=>{
    this.setState({filters:{type: newType}})
  }

  onAdoptPet=(newPet)=>{
    let {pets} = this.state
   
    let petArray = pets.map((petObj) => {
      if (petObj.id === newPet.id) {
        return {
          ...petObj,
          isAdopted: true
        }
      } else {
        return petObj
      }
    })
    this.setState({
      pets: petArray
    })
  
    
    console.log(petArray)
    
    
    
  }

  render() {
    
    return (
      <div className="ui container">
        <header>
          <h1 className="ui dividing header">React Animal Shelter</h1>
        </header>
        <div className="ui container">
          <div className="ui grid">
            <div className="four wide column">
              <Filters changeType={this.onChangeType} onFindPetsClick={this.onFindPetsClick}/>
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
