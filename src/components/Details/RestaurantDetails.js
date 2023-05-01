import React from 'react';
import axios from 'axios';
import '../styles/details.css';

import Action from './Action';

class RestaurantDetails extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            restaurantData: [],
            locationValues: []
        }
    }

    componentDidMount() {
        axios(
            {
                method: 'GET',
                url: 'http://localhost:8087/restaurants',
                headers: { 'Content-Type': 'application/json' }
            }
        ).then(response => this.setState({ restaurantData: response.data[0] })).catch()
    }
  
    


    render() {
        const { restaurantData } = this.state;
        return (<div>
            <div>
                <img src={restaurantData.image} className="detailMainPic" alt="mainpic" />
            </div>
            <h1 className='DetailHeader'>{restaurantData.name}</h1>
            <div className='tabs'>
                <div className='tab'>
                    <input id="tab-1" type="radio" checked name="tab-group-1" />
                    <label for="tab-1">Overview</label>
                    <div class="content">
                        <div class="about">About this place</div>
                        <div class="Detailhead">Cuisine</div>
                        <div class="Detailvalue">{restaurantData.cuisine}</div>
                        <div class="Detailhead">Average Cost</div>
                        <div class="Detailvalue">{`${restaurantData.min_price} for two people (approx)`}</div>
                        <div class="Detailhead">Ratings:</div>
                        <div class="Detailvalue">{restaurantData.aggregate_rating}</div>
                    </div>
                </div>
                <div className='tab'>
                    <input id="tab-2" type="radio" name="tab-group-1" />
                    <label for="tab-2">Contact</label>
                    <div class="content">
                        <div class="Detailhead">Phone</div>
                        <div class="Detailvalue">{restaurantData.contact_number}</div>
                        <div class="Detailhead">Locality</div>
                        <div class="Detailvalue">{`${restaurantData.locality}`}</div>
                        <div class="Detailhead">City</div>
                        <div class="Detailvalue">{`${restaurantData.city}`}</div>
                    </div>
                </div>


                <div className='tab'>
                    <input id="tab-3" type="radio" checked name="tab-group-1"  />
                    <label for="tab-3">  Place Order </label>
                    <div class="content">
                        <div class="about">About Payment</div>
                        <div class="Detailhead">Online Mode:</div>
                        <Action keys={restaurantData}/>
                        
                    </div>
                </div>
               

            </div>
        </div>);
    }
}

export default RestaurantDetails;
