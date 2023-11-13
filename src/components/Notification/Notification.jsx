import {
  NotificationContainer,
  NotificationMessage,
} from './Notification.styled';

export const Notification = ({ message }) => (
  <NotificationContainer>
    <NotificationMessage>{message}</NotificationMessage>
  </NotificationContainer>
);
