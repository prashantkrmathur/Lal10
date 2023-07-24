import React from 'react'

const Dashboard = (props) => {
  console.log("props", props.location.state)
  return (
    <div style={{ textAlign: "-webkit-center", padding: "2em", backgroundColor: "azure" }}>
      <h3 style={{ textAlign: "center", margin: "5px" }}>{props.location.state.message}</h3>
      <h6> Full Name : {`${props.location.state.user.firstName} ${props.location.state.user.lastName}`}</h6>
      <h6> Email : {props.location.state.user.email }</h6>
      <h6> Username : {props.location.state.user.userName}</h6>
      <h6> Token : {props.location.state.token }</h6>
    </div>
  )
}

export default Dashboard
