import React from 'react';

var divStyle = {
    width:250 + "px",
    "height":370 + "px",
    float: "left",
    margin: 5 + "px",
    "box-sizing": "border-box"
}

var imgStyle = {
    height: 300 + "px",
    overflow: "hidden"
}

function Card(props) {
    return (
<div className="card" id={props.id} style={divStyle}>
  <img src={props.image} style={imgStyle} className="card-img-top" alt={props.name} />
  <div className="card-body">
    <p className="card-text">{props.name}</p>
  </div>
</div>
    );
}

export default Card;

