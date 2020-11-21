import React, { useState } from 'react';
import items from '../../data.json';
import { ItemsModel } from '../../models/items.model';
import { Categories, Menu } from '../';
import { Main, MenuSection, Title, TitleText, Underline } from './AppStyle';

const App: React.FC = () => {
  const [menuItems, setMenuItems] = useState<ItemsModel[]>(items);
  const [categories, setCategories] = useState([]);

  return (
    <Main>
      <MenuSection>
        <Title>
          <TitleText>our menu</TitleText>
          <Underline></Underline>
        </Title>
        <Categories />
        <Menu items={menuItems} />
      </MenuSection>
    </Main>
  );
};

export default App;
