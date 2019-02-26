import React, { Component } from 'react';
import Moment from "react-moment";
import { Card, 
    CardTitle, 
    CardText, 
    CardImg, 
    CardImgOverlay,
    CardBody } from 'reactstrap';




const renderComments = (dish) =>{
    const comments = dish.comments.map( (comment) => {
        return(
            <div>
                <p>{comment.comment}</p>
                <p>--{comment.author}, &nbsp;
                <Moment format="MMM D, YYYY">{comment.date}</Moment> </p>
            </div>
        );
    });
    return comments;
}

export default function DishDetailComponent(props) {
    if(!props.dish){
        return null;
    }
  return (
    <div className="container" >
        <div className="row">
            <div className="col-md-5 col-12 m-1">
                <Card >
                    <CardImg width="100%" top src={props.dish.image} alt={props.dish.name} />
                    <CardBody>
                        <CardTitle>{props.dish.name}</CardTitle>
                        <CardText>{props.dish.description}</CardText>
                    </CardBody>
                </Card>
            </div>
            <div className="col-md-5 col-12 m-1">
                <h4>Comments</h4>
                {renderComments(props.dish)}
            </div>
        </div>
    </div>
  )
}

