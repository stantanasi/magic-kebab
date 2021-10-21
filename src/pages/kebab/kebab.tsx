import * as Styled from './kebab.styled';
import { useHistory } from "react-router-dom";
import Button from '../../components/common/button';
import Card from '../../components/common/card';
import kebabs, { Kebab as IKebab } from '../../data/kebabs.data';
import { ContainerWrapper } from '../../components/common/container.styled';

interface Props {
  match?: {
    params: {
      name: string;
    };
  };
  kebab?: IKebab;
  onOrder: (kebab: IKebab) => void;
}

const Kebab = (props: Props) => {
  const history = useHistory();
  const kebab = kebabs.find(kebab => kebab.slug === props.match?.params?.name) ?? props.kebab;

  return (
    <ContainerWrapper>
      <h1>On récapitule</h1>

      <Styled.SummaryElementWrapper>

        <Card
          title={kebab?.bread?.name ?? ''}
          image={kebab?.bread?.image ?? ''}
          isSelected={false}
          onSelect={() => { }} />

        <h2>+</h2>

        <Card
          title={kebab?.meat?.name ?? ''}
          image={kebab?.meat?.image ?? ''}
          isSelected={false}
          onSelect={() => { }} />

        <h2>+</h2>

        <Card
          title={kebab?.fillings?.map(filling => filling.name) ?? []}
          image={kebab?.fillings?.map(filling => filling.image) ?? []}
          isSelected={false}
          onSelect={() => { }} />

        <h2>+</h2>

        <Card
          title={kebab?.sauces?.map(sauce => sauce.name) ?? []}
          image={kebab?.sauces?.map(sauce => sauce.image) ?? []}
          isSelected={false}
          onSelect={() => { }} />

      </Styled.SummaryElementWrapper>

      <Button
        name="Commander"
        onClick={() => {
          props.onOrder(kebab!!)
          history.push(`${process.env.PUBLIC_URL}/`)
        }} />

    </ContainerWrapper>
  )
}

export default Kebab
