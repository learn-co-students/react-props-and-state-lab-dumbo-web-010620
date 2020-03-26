import React from 'react'

import Pet from './Pet'

class PetBrowser extends React.Component {
  // showPets = (meh) => {
  //   this.props.pets.map(petInfo => <Pet petInfo={petInfo}/> )
  // }

  render() {
    const petCards = this.props.pets.map( pet => (
      <Pet pet={pet} key={pet.id} onAdoptPet={this.props.onAdoptPet}/>
    ))

    return <div className="ui cards">
      {petCards}
      {/* {meh => this.showPets(meh)} */}
    </div>
  }
}

export default PetBrowser
