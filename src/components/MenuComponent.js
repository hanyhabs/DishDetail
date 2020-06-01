import React, { Component } from "react";
import { Card, CardImg, CardImgOverlay, CardBody, CardText, CardTitle } from "reactstrap";
import DishDetail from './DishDetailComponent.js';


export default class Menu extends Component {
  constructor(props) {
    super(props); 
    this.state = {
        selectedDish : null
    };
  }

  onDishSelect(dish){
    this.setState({
        selectedDish:dish
    });
  }

  

  render() {
    //this will return the corresponding view for the component
    const menu = this.props.dishes.map((dish) => {
      return (
        <div key={dish.id} className="col-12 col-md-5 m-1 ">
          <Card onClick ={() => this.onDishSelect(dish)}>
              <CardImg width="100%" src={dish.image} alt={dish.name} />
            <CardImgOverlay body className="ml-5">
              <CardTitle>{dish.name}</CardTitle>
             </CardImgOverlay>
          </Card>
        </div>
      );
    });

    return (
      <div className="container">
        <div className="row">
            {menu} {/*jsx element inside html tag */}
        </div>
        <div className="row">
        <DishDetail selectedDish={this.state.selectedDish}/>
      </div>
      </div>
      
    );
  }
}
