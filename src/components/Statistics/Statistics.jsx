import { StatisticsContainer, StatisticsValue } from './Statistics.styled';

export const Statistics = ({
  stats: { good, neutral, bad },
  total,
  positivePercentage,
}) => (
  <StatisticsContainer>
    <StatisticsValue>Good: {good}</StatisticsValue>
    <StatisticsValue>Neutral: {neutral}</StatisticsValue>
    <StatisticsValue>Bad: {bad}</StatisticsValue>
    <StatisticsValue>Total: {total}</StatisticsValue>
    <StatisticsValue>Positive feedback: {positivePercentage}%</StatisticsValue>
  </StatisticsContainer>
);
