import PropTypes from 'prop-types';
const UserMessage = ({ message }) => message.content;

UserMessage.propTypes = {
  message: PropTypes.shape({
    content: PropTypes.string.isRequired,
  }),
};

export default UserMessage;
