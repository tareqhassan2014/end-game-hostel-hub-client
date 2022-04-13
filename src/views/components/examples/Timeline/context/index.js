import { createContext, useContext } from 'react';

// The Timeline main context
const Timeline = createContext();

// Timeline context provider
// eslint-disable-next-line react/prop-types
function TimelineProvider({ children, value }) {
    return <Timeline.Provider value={value}>{children}</Timeline.Provider>;
}

// Timeline custom hook for using context
function useTimeline() {
    return useContext(Timeline);
}

export { TimelineProvider, useTimeline };
/* eslint-enable react/prop-types */
