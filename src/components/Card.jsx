import React from "react";
const Card = (props) => {
  return (
    <div className="card" style={{border:"1px solid black", backgroundColor: "black", padding: "1rem"}}>
      {/* <img src={logo} alt="" className="cardImg" />
      <hr />
      <p className="cardText">some random text about card</p> */}

      {/*bootstrap card*/}

      <a href={props.link} className="card-link" target="__blank">
      <div className="card" style={{width: "18rem", height: "18rem"}}>
        <img className="card-img-top" src={props.img} alt=""></img>
        <div className="card-body">
          <p className="card-text" style={{textAlign:"center"}}>
            {props.text}
          </p>
        </div>
      </div>
      </a>

    </div>
  );
};
export default Card;
