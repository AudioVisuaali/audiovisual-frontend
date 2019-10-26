import UserSVG from 'svgs/User';
import PlaySVG from 'svgs/Play';
import PauseSVG from 'svgs/Pause';
import SearchSVG from 'svgs/Search';
import ForwardSVG from 'svgs/Forward';
import ArrowRightSVG from 'svgs/ArrowRight';
import PlusSVG from 'svgs/Plus';
import TrashSVG from 'svgs/Trash';
import PenSVG from 'svgs/Pen';
import SignInAltSVG from 'svgs/SignInAlt';
import SignOutSVG from 'svgs/SignOut';
import ListSVG from 'svgs/List';
import RandomSVG from 'svgs/Random';
import SortAmountDownAltSVG from 'svgs/SortAmountDownAlt';
import SortAmountUpAltSVG from 'svgs/SortAmountUpAlt';

import {
  MESSAGE_USER,
  MESSAGE_VIDEO_IS_PLAYING,
  MESSAGE_VIDEO_SEEK,
  MESSAGE_VIDEO_SKIP,
  MESSAGE_VIDEO_NEXT,
  MESSAGE_VIDEO_ADD,
  MESSAGE_VIDEO_DELETE,
  MESSAGE_USER_USERNAME_CHANGE,
  MESSAGE_USER_JOIN,
  MESSAGE_USER_LEAVE,
  MESSAGE_VIDEO_PLAY_ORDER,
  MESSAGE_REORDER,
} from './constants';
import MessageUser from './MessageUser';
import MessageVideoSeek from './MessageVideoSeek';
import MessageVideoSkip from './MessageVideoSkip';
import MessageVideoNext from './MessageVideoNext';
import MessageVideoAdd from './MessageVideoAdd';
import MessageVideoDelete from './MessageVideoDelete';
import MessageUserUsernameChange from './MessageUserUsernameChange';
import MessageUserJoin from './MessageUserJoin';
import MessageUserLeave from './MessageUserLeave';
import MessageVideoPlayOrder from './MessageVideoPlayOrder';
import MessageReorder from './MessageReorder';

export const getTypeVariables = msg => {
  switch (msg.type) {
    case MESSAGE_USER:
      return {
        icon: UserSVG,
        content: MessageUser,
        userContent: true,
      };
    case MESSAGE_VIDEO_IS_PLAYING:
      return { icon: msg.content ? PlaySVG : PauseSVG };
    case MESSAGE_VIDEO_SEEK:
      return { icon: SearchSVG, content: MessageVideoSeek };
    case MESSAGE_VIDEO_SKIP:
      return { icon: ForwardSVG, content: MessageVideoSkip };
    case MESSAGE_VIDEO_NEXT:
      return { icon: ArrowRightSVG, content: MessageVideoNext };
    case MESSAGE_VIDEO_ADD:
      return { icon: PlusSVG, content: MessageVideoAdd };
    case MESSAGE_VIDEO_DELETE:
      return { icon: TrashSVG, content: MessageVideoDelete };
    case MESSAGE_USER_USERNAME_CHANGE:
      return { icon: PenSVG, content: MessageUserUsernameChange };
    case MESSAGE_USER_JOIN:
      return { icon: SignInAltSVG, content: MessageUserJoin };
    case MESSAGE_USER_LEAVE:
      return { icon: SignOutSVG, content: MessageUserLeave };
    case MESSAGE_VIDEO_PLAY_ORDER:
      return {
        icon: msg.content === 'linear' ? ListSVG : RandomSVG,
        content: MessageVideoPlayOrder,
      };
    case MESSAGE_REORDER: {
      const icon =
        msg.content.oldIndex < msg.content.newIndex
          ? SortAmountDownAltSVG
          : SortAmountUpAltSVG;
      return { icon, content: MessageReorder };
    }
    default:
      return { icon: UserSVG, content: MessageUser };
  }
};

export default getTypeVariables;
