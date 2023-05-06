import {create} from 'zustand';

type CounterState = {
    count: number;
    increment: () => void;
};

export const useGlobalCounter = create<CounterState>((set) => ({
    count: 0,
    increment: () => set((state) => ({ count: state.count + 1 }))
}));
