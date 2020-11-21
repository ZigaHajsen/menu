import React from 'react';
import { ButtonContainer, FilterButton } from './CategoriesStyle';

const Categories: React.FC<any> = ({ categories, filterItems }) => {
  return (
    <ButtonContainer>
      {categories.map((category: string, index: number) => {
        return (
          <FilterButton
            key={index}
            type='button'
            onClick={() => filterItems(category)}
          >
            {category}
          </FilterButton>
        );
      })}
    </ButtonContainer>
  );
};

export default Categories;
