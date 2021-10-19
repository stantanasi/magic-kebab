import React, { useState } from 'react'
import { useHistory } from 'react-router';
import * as Styled from './home.styled';
import Button from '../../components/common/button'
import k, { Kebab } from '../../data/kebabs.data'
import Element from '../../components/common/element';

const Home = (props: {}) => {
  const history = useHistory();
  const [kebabs, setKebabs] = useState(k)

  return (
    <div>
      <Styled.PopularKebabs>
        {kebabs.map((kebab, index) => (
          <Element
            key={index}
            title={kebab.name || ''}
            image=""
            isSelected={false}
            onSelect={() => history.push(`/kebabs/${kebab.slug}`)} />
        ))}

        <Button
          name="Configurer votre kebab"
          onClick={() => history.push("/kebabs/config/breads")} />
      </Styled.PopularKebabs>

      <Styled.Cart>
        <h2>Total : {kebabs.reduce((acc, cur) => acc + (cur.price ?? 0), 0)} €</h2>
        <Button
          name="Passer la commande"
          onClick={() => { }} />

        <h2>Votre commande</h2>
        <Styled.CartItemList>
          {kebabs.map((kebab, index) => (
            <Styled.CartItem key={index}>
              <div>
                {kebab.name && <h4>{kebab.name}</h4>}
                {([] as string[])
                  .concat(`Kebab`)
                  .concat(kebab.bread?.name || [])
                  .concat(kebab.meat?.name || [])
                  .concat(kebab.fillings?.map(filling => filling.name).join(' & ') || [])
                  .concat(kebab.sauces?.map(sauce => sauce.name).join(' & ') || [])
                  .join(', ')}
              </div>
              <span>x1</span>
            </Styled.CartItem>
          ))}
        </Styled.CartItemList>
      </Styled.Cart>
    </div>
  )
}

export default Home
