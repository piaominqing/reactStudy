import React from 'react';

function ConsumerPage ({themeColor}){
  console.log('themeColor', themeColor)
  return (
    <div>
      <h3 className={themeColor}>ConsumerPage</h3>
    </div>
  )
}
 
export default ConsumerPage;