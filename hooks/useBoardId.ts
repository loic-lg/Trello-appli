import { boardContext } from "contexts/BoardContextProvider";
import { useContext } from "react";

export function useBoardId() {
    const context = useContext(boardContext);
    if (!context) {
        throw new Error('useWorkspaceId must be used within a WorkspaceContextProvider');
    }
    const [workspaceId, setWorkspaceId] = context;
    if (!workspaceId) {
        throw new Error('No workspaceId found in context');
    }
    return workspaceId;
}

export function useBoardSetter() {
    const context = useContext(boardContext);
    if (!context) {
        throw new Error('setWorkspaceId must be used within a WorkspaceContextProvider');
    }
    const [, setWorkspaceId] = context;
    return setWorkspaceId;
}