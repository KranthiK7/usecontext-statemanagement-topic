import { create } from "zustand";

export const myStore = create((set) => (
    {
        counter: 0,
        incrementCount: ()=>set((status)=>({counter: status.counter+1})),
        decrementCount: ()=>set((status)=>({ counter: status.counter-1})),        

    }
))