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
          thumbnail: "https://images.unsplash.com/photo-1484251065541-c9770829890f?ixlib=rb-0.3.5&s=b394df867cb8cbc0acd47e542700cea6&auto=format&fit=crop&w=800&q=60"
        },
        {
          name: "Peets'",
          address: "20600 John Dr, Castro Valley, CA 94546",
          thumbnail: "https://images.unsplash.com/photo-1529892485617-25f63cd7b1e9?ixlib=rb-0.3.5&s=53af5303625320d0667e67913708bcfc&auto=format&fit=crop&w=800&q=60"
        },
        {
          name: "Phil's Coffee",
          address: "20600 John Dr, Castro Valley, CA 94546",
          thumbnail: "https://images.unsplash.com/photo-1498603645763-1005915e0abe?ixlib=rb-0.3.5&s=507ab002a103bb449319740203fcec5c&auto=format&fit=crop&w=800&q=60"
        }
      ]
    }
  }
  render() {
    let businessList= this.state.businesses.map((business,index)=>{
      return (
        <div key={index} className="business">
          <img src={business.thumbnail} alt="business thumbnail" />
          <div>
            <h3>{business.name}</h3>
            <p>{business.address}</p>
          </div>
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
