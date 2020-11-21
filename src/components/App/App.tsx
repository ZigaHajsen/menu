import React, { useState } from 'react';
import items from '../../data.json';
import { ItemsModel } from '../../models/items.model';
import { Categories, Menu } from '../';
import { Main, MenuSection, Title, TitleText, Underline } from './AppStyle';

const allCategories = ['all', ...new Set(items.map((item) => item.category))];

const App: React.FC = () => {
  const [menuItems, setMenuItems] = useState<ItemsModel[]>(items);
  const [categories, setCategories] = useState(allCategories);

  const filterItems = (category: string) => {
    if (category === 'all') {
      setMenuItems(items);
      return;
    }
    const newItems = items.filter((item) => item.category === category);
    setMenuItems(newItems);
  };

  return (
    <Main>
      <MenuSection>
        <Title>
          <TitleText>our menu</TitleText>
          <Underline></Underline>
        </Title>
        <Categories categories={categories} filterItems={filterItems} />
        <Menu items={menuItems} />
      </MenuSection>
    </Main>
  );
};

export default App;
