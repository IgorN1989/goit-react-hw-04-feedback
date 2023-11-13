import styled from 'styled-components';

export const StatisticsContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${p => p.theme.spacing(4)};
`;

export const StatisticsValue = styled.p`
  font-size: 18px;
  font-weight: bold;
  font-style: italic;
  color: rgb(0, 0, 0, 0.7);
`;
