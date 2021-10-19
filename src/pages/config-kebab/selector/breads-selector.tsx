import React from 'react'
import breads from '../../../data/breads.data'

interface Props {
}

const BreadsSelector = (props: Props) => {

  return (
    <div>
      <h2>Pain ou galette ?</h2>
      {breads.map(bread => (
        <div>
          <p>{bread.name}</p>
          <img src={bread.image} alt={bread.name} />
        </div>
      ))}
    </div>
  )
}

export default BreadsSelector
