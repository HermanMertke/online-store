import React, { Component } from 'react'
import ItemModal from './ItemModal'

export default class ItemDetails extends Component {
    constructor(props){
        super(props)
        this.state = {
            name: props.location.state.name,
            id: props.location.state.id
        }
    }

  render() {
    return (
      <div>
          <h1>{this.state.name}</h1>
          <p>What is Lorem Ipsum? <br/> Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
          <ItemModal itemId={this.state.id} name={this.state.name}/>
      </div>
    )
  }
}


