import React from 'react'

const Dashboard = (props) => {
  console.log("props", props.location.state)
  return (
    <div>
      <h3 style={{ textAlign: "center", margin: "5px" }}>{props.location.state.message}</h3>
      <h4> Full Name : {`${props.location.state.user.firstName} ${props.location.state.user.lastName}`}</h4>
      <h4> Email : {props.location.state.user.email }</h4>
      <h4> Username : {props.location.state.user.userName}</h4>
      <h4> Token : {props.location.state.token }</h4>
    </div>
  )
}

export default Dashboard
