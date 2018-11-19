import React, { Component } from 'react';
import './BusinessInfo.css';

class BusinessInfo extends Component {
  constructor(){
    super();
    this.state={
      businesses: [
        {
          name: "Cafe 4",
          address: "20600 John Dr, Castro Valley, CA 94546",
          thumbnail: "https://images.unsplash.com/photo-1515215316771-2742baa337f4?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=34771350afee3d1f0eb9e27dfa7198a8&auto=format&fit=crop&w=668&q=80"
        },
        {
          name: "Starbucks",
          address: "20600 John Dr, Castro Valley, CA 94546",
          thumbnail: "https://images.unsplash.com/photo-1515215316771-2742baa337f4?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=34771350afee3d1f0eb9e27dfa7198a8&auto=format&fit=crop&w=668&q=80"
        },
        {
          name: "Peets",
          address: "20600 John Dr, Castro Valley, CA 94546",
          thumbnail: "https://images.unsplash.com/photo-1515215316771-2742baa337f4?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=34771350afee3d1f0eb9e27dfa7198a8&auto=format&fit=crop&w=668&q=80"
        },
        {
          name: "Phil's Coffee",
          address: "20600 John Dr, Castro Valley, CA 94546",
          thumbnail: "https://images.unsplash.com/photo-1515215316771-2742baa337f4?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=34771350afee3d1f0eb9e27dfa7198a8&auto=format&fit=crop&w=668&q=80"
        }
      ]
    }
  }
  render() {
    let businessList= this.state.businesses.map((business,index)=>{
      return (
        <div key={index} className="business">
          <img src={business.thumbnail} alt="business thumbnail" />
          <h3>{business.name}</h3>
          <p>{business.address}</p>
        </div>
      )
    })
    return (
      <div>
        {businessList}
      </div>
    )
  }
}

export default BusinessInfo;
