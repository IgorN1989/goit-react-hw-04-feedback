import styled from 'styled-components';

const getBgColor = ({ $value, theme }) => {
  switch ($value) {
    case 'good':
      return theme.colors.good;
    case 'neutral':
      return theme.colors.neutral;
    case 'bad':
      return theme.colors.bad;
    default:
      return null;
  }
};

export const FeedbackOptionsContainer = styled.div`
  display: flex;
  gap: ${p => p.theme.spacing(8)};
`;

export const FeedbackBtn = styled.button`
  cursor: pointer;
  padding: ${p => p.theme.spacing(2)} ${p => p.theme.spacing(4)};
  border-radius: 5px;
  border: none;
  min-width: 75px;
  font-size: 18px;
  font-weight: bold;
  text-transform: capitalize;
  color: rgb(0, 0, 0, 0.7);
  background-color: rgb(187, 187, 187, 0.7);
  transition: background-color ${p => p.theme.transition},
    box-shadow ${p => p.theme.transition};

  &:hover {
    box-shadow: ${p => p.theme.shadow};
    background-color: ${getBgColor};
  }
`;
