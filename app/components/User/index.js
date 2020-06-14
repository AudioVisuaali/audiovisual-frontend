import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { motion } from 'framer-motion';

import UserSVG from 'svgs/User';
import Wrapper from './Wrapper';
import SizeWrapper from './SizeWrapper';

const variants2 = {
  initial: { x: 20, opacity: 0 },
  animate: { x: 0, opacity: 1 },
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
    <motion.div positionTransition={isMounted}>
      <motion.div
        variants={variants2}
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
    </motion.div>
  );
};

User.propTypes = {
  user: PropTypes.shape({
    username: PropTypes.string.isRequired,
  }),
};

export default User;
