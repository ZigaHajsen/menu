import styled from 'styled-components/macro';

export const ButtonContainer = styled.div`
  margin-bottom: 4rem;
  display: flex;
  justify-content: center;
`;

export const FilterButton = styled.button`
  background: transparent;
  border-color: transparent;
  font-size: 1rem;
  text-transform: capitalize;
  margin: 0 0.5rem;
  letter-spacing: 1px;
  padding: 0.375rem 0.75rem;
  color: var(--clr-gold);
  cursor: pointer;
  transition: var(--transition);
  border-radius: var(--radius);

  &:hover {
    background: var(--clr-gold);
    color: var(--clr-white);
  }
`;
