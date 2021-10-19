import React from 'react'

interface Props {
  match: {
    params: {
      name: string;
    }
  }
}

const Kebabs = (props: Props) => {
  console.log(props)
  return (
    <div>
      
    </div>
  )
}

export default Kebabs
