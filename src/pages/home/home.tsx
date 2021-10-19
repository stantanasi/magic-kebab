import React, { useState } from 'react'
import { useHistory } from 'react-router';
import * as Styled from './home.styled';
import Button from '../../components/common/button'
import kebabs, { Kebab } from '../../data/kebabs.data'
import Element from '../../components/common/element';

interface Props {
  cart: {
    kebab: Kebab;
    quantity: number;
  }[];
}

const Home = (props: Props) => {
  const history = useHistory();
  const [cart, setCart] = useState(props.cart)

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
        <h2>Total : {cart.reduce((acc, cur) => acc + ((cur.kebab.price ?? 0) * cur.quantity), 0)} €</h2>
        <Button
          name="Passer la commande"
          onClick={() => { }} />

        <h2>Votre commande</h2>
        <Styled.CartItemList>
          {cart.map((item, index) => (
            <Styled.CartItem key={index}>
              <div>
                {item.kebab.name && <h4>{item.kebab.name}</h4>}
                {([] as string[])
                  .concat(`Kebab`)
                  .concat(item.kebab.bread?.name || [])
                  .concat(item.kebab.meat?.name || [])
                  .concat(item.kebab.fillings?.map(filling => filling.name).join(' & ') || [])
                  .concat(item.kebab.sauces?.map(sauce => sauce.name).join(' & ') || [])
                  .join(', ')}
              </div>
              <span>x{item.quantity}</span>
            </Styled.CartItem>
          ))}
        </Styled.CartItemList>
      </Styled.Cart>
    </div>
  )
}

export default Home
