declare type Handler = () => void;
export declare function useUpdateQueue(): {
    add: (fn: Handler) => void;
    nextTick: () => void;
};
export {};
