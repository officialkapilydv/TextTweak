import React from 'react'

function Alert(props) {
    const capitalize = (word)=>{
        const lower = word.toLowerCase();
        return lower.charAt(0).toUpperCase() + lower.slice(1);
    }
  return (
    props.alert && <div className={`alert alert-${props.alert.type} alert-dismissible fade show`} role="alert">
        <strong>{capitalize(props.alert.type)}</strong>: {props.alert.msg}
        
        </div>
  )
}

export default Alert




{/* jo hamne "props.alert &&" likha h uska matlab h agar "props.alert" sahi h too && ke baad wala code 
    evaluate hoga , orr agar vo false hoo jati h to code exicute nhi hoga */}