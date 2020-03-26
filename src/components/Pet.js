import React from 'react'

class Pet extends React.Component {
  render() {
    // {
    //   id: '5c142d9e-ea45-4231-8146-cccf71c704c0',
    //   type: 'dog',
    //   gender: 'male',
    //   age: 4,
    //   weight: 1,
    //   name: 'Trident',
    //   isAdopted: false,
    // }

    let {id, type, gender, age, weight, name, isAdopted} = this.props.pet

    return (
      <div className="card">
        <div className="content">
          <a className="header">
            {gender === "female" ? '♀' : '♂'}
            {name}
          </a>
          <div className="meta">
            <span className="date">{type}</span>
          </div>
          <div className="description">
            <p>Age: {age}</p>
            <p>Weight: {weight}</p>
          </div>
        </div>
        <div className="extra content">
        {isAdopted ? 
          <button className="ui disabled button">Already adopted</button>
          : <button 
            onClick={() => this.props.onAdoptPet(this.props.pet.id)}
            className="ui primary button" 
            >
            Adopt pet
          </button> }
        </div>
      </div>
    )
  }
}

export default Pet
