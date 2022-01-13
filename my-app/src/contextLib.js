import { useContext, createContext } from "react";

export const WasherUserContext = createContext(null);

export function useWasherUserContext() {
        return useContext(WasherUserContext);
}

export const DryerUserContext = createContext(null);

export function useDryerUserContext() {
        return useContext(DryerUserContext);
}