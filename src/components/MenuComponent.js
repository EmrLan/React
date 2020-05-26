import React, { useState } from 'react';
import { Card, CardImg, CardImgOverlay, CardText, CardBody, CardTitle } from 'reactstrap';
import DishDetail from './DishDetailComponent';

function Menu(props) {
    const [selectedDish, setSelectedDish] = useState(null);

    const menu = props.dishes.map((dish) => {
        return (
            <div  className="col-12 col-md-5 m-1">
                    <Card key={dish.id}
                        onClick={() => setSelectedDish(dish)}>
                    <CardImg width="100%" src={dish.image} alt={dish.name} />
                    <CardImgOverlay>
                        <CardTitle>{dish.name}</CardTitle>
                    </CardImgOverlay>
                </Card>
            </div>
        );
    });

    return(
        <div className="container">
            <div className="row">
                    {menu}
            </div>
            < DishDetail dish = {selectedDish} />
        </div>
    );
}

export default Menu;