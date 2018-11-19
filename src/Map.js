import React, { Component } from 'react';
import './Map.css';

class Map extends Component {
  constructor(){
    super();
    this.state= {
      name: "Cafe 4",
      address: "20600 John Dr, Castro Valley, CA 94546",
      thumbnail: "https://images.unsplash.com/photo-1515215316771-2742baa337f4?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=34771350afee3d1f0eb9e27dfa7198a8&auto=format&fit=crop&w=668&q=80"
    }
  }
  render() {
    return (
      <div>
      </div>
    )
  }
}

export default Map;
