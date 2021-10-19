import React from 'react'
import meats from '../../../data/meats.data'

interface Props {
  
}

const MeatsSelector = (props: Props) => {
  return (
    <div>
      <h2>Plutôt viande ou tofu ?</h2>
      {meats.map(meat => (
        <div>
          <p>{meat.name}</p>
          <img src={meat.image} alt={meat.name} />
        </div>
      ))}
    </div>
  )
}

export default MeatsSelector
