import React from 'react'

export default function Alert(prop) {
    const capitalizeWords = (str) => {
        return str
          .toLowerCase()
          .split(' ')
          .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
          .join(' ');
      };
  return (
    prop.alert.type && 
    <div>
     <div class={`alert alert-${prop.alert.type} alert-dismissible fade show`} role="alert">
  <strong>{capitalizeWords(prop.alert.type)}!</strong> {prop.alert.msg}.
  
  </div>
    </div>
  )
}
