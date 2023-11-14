import styled from 'styled-components';

export const Container = styled.div`
  width: 480px;
  display: block;
  flex-direction: column;
  margin: ${p => p.theme.spacing(8)} auto;

  border: none;
  border-radius: ${p => p.theme.radius};
  box-shadow: ${p => p.theme.shadow};
  font-size: 16px;
  font-weight: 500;
`;
