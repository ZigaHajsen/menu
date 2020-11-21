import React from 'react';
import { ItemsModel } from '../../models/items.model';
import {
  SectionCenter,
  MenuItem,
  Image,
  ItemInfo,
  Header,
  Title,
  Price,
  ItemText,
} from './MenuStyle';

interface MenuProps {
  items: ItemsModel[];
}

const Menu: React.FC<MenuProps> = ({ items }) => {
  return (
    <SectionCenter>
      {items.map((menuItem) => {
        const { id, title, img, desc, price } = menuItem;

        return (
          <MenuItem key={id}>
            <Image src={img} alt={title} />
            <ItemInfo>
              <Header>
                <Title>{title}</Title>
                <Price>${price}</Price>
              </Header>
              <ItemText>{desc}</ItemText>
            </ItemInfo>
          </MenuItem>
        );
      })}
    </SectionCenter>
  );
};

export default Menu;
