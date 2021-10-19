import React from 'react'

interface Props {
  match: {
    params: {
      name: string;
    }
  }
}

const Kebab = (props: Props) => {
  console.log(props)
  return (
    <div>
      
    </div>
  )
}

export default Kebab
