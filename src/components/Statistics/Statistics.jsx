import { StatisticsContainer, StatisticsValue } from './Statistics.styled';

export const Statistics = ({ stats, total, positivePercentage }) => (
  <StatisticsContainer>
    {Object.keys(stats).map(option => (
      <StatisticsValue key={option}>
        {option}: {stats[option]}
      </StatisticsValue>
    ))}

    <StatisticsValue>Total: {total}</StatisticsValue>
    <StatisticsValue>Positive feedback: {positivePercentage}%</StatisticsValue>
  </StatisticsContainer>
);
