import React from 'react';
import { Card, CardImg, CardText, CardBody, CardTitle, Breadcrumb, BreadcrumbItem } from 'reactstrap';
import Moment from 'react-moment'
import { Link } from 'react-router-dom'

function DishDetail(props){

    const dish = props.dish;

    if (dish != null)
    {
        const RenderComments = (comments) =>{
            if(comments != null)
            {
                return comments.map((comment) => {
                            return(
                                <div>
                                    <ul className = "list-unstyled">
                                        <li key={comment.id}>
                                            <p>{comment.comment}</p>
                                            <p>--{comment.author}, <Moment>{comment.date}</Moment> </p>
                                        </li>
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
            <div className="container">
                <div className="row">
                    <Breadcrumb>
                        <BreadcrumbItem><Link to="/menu">Menu</Link></BreadcrumbItem>
                        <BreadcrumbItem active>{props.dish.name}</BreadcrumbItem>
                    </Breadcrumb>
                    <div className="col-12">
                        <h3>{props.dish.name}</h3>
                        <hr />
                    </div> 
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
                        {RenderComments(props.comments)}
                    </div>
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