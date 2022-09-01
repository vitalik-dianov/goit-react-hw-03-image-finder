import styled from 'styled-components';

export const SearchButton = styled.button`
  width: ${p => p.theme.sizes[4]};
  height: ${p => p.theme.sizes[2]};
  border: ${p => p.theme.borders.none};
  border-radius: ${p => p.theme.radii.sm};
  text-transform: uppercase;
  font-weight: 700;
`;
