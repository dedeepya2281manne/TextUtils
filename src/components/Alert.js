import React from 'react'

export default function Alert(props) {
  return (
    <div style={{height:'100px'}}>
      {props.alert && 
      <div class={`alert alert-${props.alert.type} alert-dismissible fade show`} role="alert">
      <strong>{props.alert.msg}</strong>
      {/* <p>{props.showAlert("Hey","danger")}</p> */}
    </div>}
</div>
  )
}
