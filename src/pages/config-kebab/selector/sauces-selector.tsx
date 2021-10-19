import React from 'react'
import sauces from '../../../data/sauces.data'

interface Props {
  
}

const SaucesSelector = (props: Props) => {
  return (
    <div>
      <h2>Quelques sauces ?</h2>
      {sauces.map(sauce => (
        <div>
          <p>{sauce.name}</p>
          <img src={sauce.image} alt={sauce.name} />
        </div>
      ))}
    </div>
  )
}

export default SaucesSelector
