import * as Styled from './kebab.styled';
import Button from '../../components/common/button';
import Element from '../../components/common/element';
import kebabs from '../../data/kebabs.data';
import { ContainerWrapper } from '../../components/common/container.styled';

interface Props {
  match: {
    params: {
      name: string;
    }
  }
}

const Kebab = (props: Props) => {
  const kebab = kebabs.find(kebab => kebab.slug === props.match.params.name);

  return (
    <ContainerWrapper>
      <h1>On récapitule</h1>

      <Styled.SummaryElementWrapper>

        <Element
          title={kebab?.bread?.name ?? ''}
          image={kebab?.bread?.image ?? ''}
          isSelected={false}
          onSelect={() => { }} />

        <h2>+</h2>

        <Element
          title={kebab?.meat?.name ?? ''}
          image={kebab?.meat?.image ?? ''}
          isSelected={false}
          onSelect={() => { }} />

        <h2>+</h2>

        <Element
          title={kebab?.fillings?.map(filling => filling.name) ?? []}
          image={kebab?.fillings?.map(filling => filling.image) ?? []}
          isSelected={false}
          onSelect={() => { }} />

        <h2>+</h2>

        <Element
          title={kebab?.sauces?.map(sauce => sauce.name) ?? []}
          image={kebab?.sauces?.map(sauce => sauce.image) ?? []}
          isSelected={false}
          onSelect={() => { }} />

      </Styled.SummaryElementWrapper>

      <Button
        name="Commander"
        onClick={() => console.log('Commander')} />

    </ContainerWrapper>
  )
}

export default Kebab
