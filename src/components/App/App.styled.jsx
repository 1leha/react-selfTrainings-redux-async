import styled from 'styled-components';

export const AppStyled = styled.div`
  width: 340px;

  border: ${p => p.theme.borders.none};
  border-radius: 30px;

  box-shadow: ${p => p.theme.shadows.standart};

  overflow: hidden;
`;
