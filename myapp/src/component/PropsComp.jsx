import React from 'react'
var card={
    width:"300px",
    padding:"30px",
    margin:"30px",
    textAlign:"center",
    boxShadow:"0 0 10px black",
    

}

 function PropsComp({name,gender,img,post}) {
  return (
    <div style={card}>
        
      <img src={img} width='100%' height="300px"/>
      <h2>{name}</h2>
      <p>{gender}</p>
      <h4>{post}</h4>
      <button>Profile</button>
    </div>
  )
}
export default PropsComp