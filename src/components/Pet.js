import React from 'react'

class Pet extends React.Component {
  handleClick=(event)=>{
    this.props.onAdoptPet(this.props)

  }
  render() {
    
    return (
      <div className="card">
        <div className="content">
          <a className="header">
            {this.props.gender === 'male' ?
            '♂'
            :
            '♀'}
            {this.props.name}
          </a>
          <div className="meta">
            <span className="date">{this.props.type}</span>
          </div>
          <div className="description">
            <p>Age: {this.props.age}</p>
            <p>Weight: {this.props.weight}</p>
          </div>
        </div>
        <div className="extra content">
          {this.props.adopted !== true ?
          <button className="ui primary button" onClick={(event)=>this.handleClick(event)}>Adopt pet</button> 
          :
          <button className="ui disabled button">Already adopted</button>}
        </div>
      </div>
    )
  }
}

export default Pet
