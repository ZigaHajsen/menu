import styled from 'styled-components/macro';

export const SectionCenter = styled.div`
  width: 90vw;
  margin: 0 auto;
  max-width: 1170px;
  display: grid;
  gap: 3rem 2rem;
  justify-items: center;

  @media (min-width: 1200px) {
    width: 95vw;
    grid-template-columns: 1fr 1fr;
  }
`;

export const MenuItem = styled.article`
  display: grid;
  gap: 1rem 2rem;
  max-width: 25rem;

  @media (min-width: 768px) {
    grid-template-columns: 225px 1fr;
    gap: 0 1.25rem;
    max-width: 40rem;
  }
`;

export const Image = styled.img`
  object-fit: cover;
  height: 200px;
  width: 100%;
  border: 0.25rem solid var(--clr-gold);
  border-radius: var(--radius);
  display: block;

  @media (min-width: 768px) {
    height: 175px;
  }
`;

export const ItemInfo = styled.div``;

export const Header = styled.header`
  display: flex;
  justify-content: space-between;
  border-bottom: 0.5px dotted var(--clr-grey-5);
`;

export const Title = styled.h4`
  margin-bottom: 0.5rem;
`;

export const Price = styled.h4`
  color: var(--clr-gold);
`;

export const ItemText = styled.p`
  margin-bottom: 0;
  padding-top: 1rem;
`;
