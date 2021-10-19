import React from 'react'
import fillings from '../../../data/fillings.data'

interface Props {
  
}

const FillingsSelector = (props: Props) => {
  return (
    <div>
      <h2>Salade, tomate, oignons ?</h2>
      {fillings.map(filling => (
        <div>
          <p>{filling.name}</p>
          <img src={filling.image} alt={filling.name} />
        </div>
      ))}
    </div>
  )
}

export default FillingsSelector
