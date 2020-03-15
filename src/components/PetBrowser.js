import React from 'react'

import Pet from './Pet'

class PetBrowser extends React.Component {


  mapPet=()=>{
    let {pets} = this.props
   return pets.map(pet => (
      <Pet key={pet.id} id={pet.id} name={pet.name} type={pet.type} age={pet.age} weight={pet.weight} gender={pet.gender} adopted={pet.isAdopted} onAdoptPet={this.props.onAdoptPet}/>
    ))
  }
  render() {
    return <div className="ui cards">
      {this.mapPet()}
    </div>
  }
}

export default PetBrowser
