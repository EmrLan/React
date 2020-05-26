import React from 'react';
import { Card, CardImg, CardText, CardBody, CardTitle } from 'reactstrap';
import { mockComponent } from 'react-dom/test-utils';
import Moment from 'react-moment'
import { render } from '@testing-library/react';

function DishDetail(props){

    const dish = props.dish;

    if (dish != null)
    {
        const renderComments = (dish) =>{
            if(dish.comments != null)
            {
                return (dish.comments).map((comment) => {
                            return(
                                <div>
                                    <ul className = "list-unstyled">
                                        <li>{comment.comment}</li>
                                        <li>--{comment.author}, <Moment>{comment.date}</Moment></li>
                                    </ul>
                                </div>
                            );
                        });
            }
            else
            {
                return(
                    <div></div>
                );
            }
        };

        return(
            <div className="row">
                <div className="col-12 col-md-5 m-1">
                    <Card>
                        <CardImg top src={dish.image} alt={dish.name} />
                        <CardBody>
                            <CardTitle>{dish.name}</CardTitle>
                            <CardText>{dish.description}</CardText>
                        </CardBody>
                    </Card>
                </div>
                <div className="col-12 col-md-5 m-1 text-justify">
                    <h4>Comments</h4>
                    {renderComments(dish)}
                </div>
            </div>
        );
    }
    else
        return(
            <div></div>
        );

}

export default DishDetail;