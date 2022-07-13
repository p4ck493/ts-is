import NotWrapper from './not.wrapper';
import AllWrapper from './all.wrapper';
import OrWrapper from './or.connection.wrapper';

// TODO interfaces
const wrappers = {
    not: NotWrapper as any,
    all: AllWrapper as any,
    or: OrWrapper as any,
};

export default wrappers;
