import {
  FeedbackOptionsContainer,
  FeedbackBtn,
} from './FeedbackOptions.styled';

export const FeedbackOptions = ({ options, onLeaveFeedback }) => (
  <FeedbackOptionsContainer>
    {options.map(option => (
      <FeedbackBtn
        key={option}
        $value={option}
        onClick={() => onLeaveFeedback(option)}
      >
        {option}
      </FeedbackBtn>
    ))}
  </FeedbackOptionsContainer>
);
