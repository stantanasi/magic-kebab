import React from 'react'
import { useHistory } from 'react-router';
import Button from '../../components/common/button'
import kebabs from '../../data/kebabs.data'

const Home = (props: {}) => {
  const history = useHistory();

  return (
    <div>
      {kebabs.map(kebab => (
        <a href={`/kebabs/${kebab.slug}`}>{kebab.name}</a>
      ))}

      <Button
        name="Configurer son kebab"
        onClick={() => history.push("/kebabs/config/breads")} />
    </div>
  )
}

export default Home
