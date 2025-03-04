import { createContext, useState } from "react";

export type BoardContextType = [
    string | undefined,
    React.Dispatch<React.SetStateAction<string | undefined>>
]

export const boardContext = createContext<BoardContextType>([undefined, () => {}]);

export function BoardContextProvider({ children }: { children: React.ReactNode }) {

    const state = useState<string | undefined>();

    return (
        <boardContext.Provider value={state}>
            {children}
        </boardContext.Provider>
    )
}