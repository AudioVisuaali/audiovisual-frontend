import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { motion } from 'framer-motion';

import UserSVG from 'svgs/User';
import Wrapper from './Wrapper';
import SizeWrapper from './SizeWrapper';

const variants1 = {
  initial: { x: 20, opacity: 0 },
  animate: {
    x: 0,
    opacity: 1,
    transition: {
      delay: 0.2,
    },
  },
  exit: {
    opacity: 0,
  },
};

const User = ({ user }) => {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  return (
    <motion.div
      positionTransition={isMounted}
      variants={variants1}
      initial="initial"
      animate="animate"
      exit="exit"
    >
      <SizeWrapper>
        <Wrapper>
          <UserSVG />
          {user.username}
        </Wrapper>
      </SizeWrapper>
    </motion.div>
  );
};

User.propTypes = {
  user: PropTypes.shape({
    username: PropTypes.string.isRequired,
  }),
};

export default User;
