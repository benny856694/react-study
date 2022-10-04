import { atom } from 'jotai'
import create from 'zustand'

 interface Store {
    loggedIn: boolean,
    login: () => void,
    logout: () => void,
}

export const useStore = create<Store>()((set=>({
    loggedIn: false,
    login: () => set(state=>({loggedIn: true})),
    logout: () => set(state=>({loggedIn: false})),
})))

export const countAtom = atom(0)