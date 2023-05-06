import { create, StateCreator } from 'zustand';
import { persist } from 'zustand/middleware';

type CounterState = {
    count: number;
    increment: () => void;
    decrement: () => void;
};

const globalCounter: StateCreator<CounterState> = (set) => ({
    count: 0,
    increment: () => set((state) => ({ count: state.count + 1 })),
    decrement: () => set((state) => ({ count: state.count - 1 })),
});

export const usePersistentCounter = create<CounterState>(
    persist(globalCounter, {
        name: 'counter-storage',
    }) as StateCreator<CounterState>
);
