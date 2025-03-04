import { View, Text, Pressable, StyleSheet } from "react-native";
import { Ionicons } from '@expo/vector-icons';
import { useContext } from "react";
import { boardContext } from "contexts/BoardContextProvider";
import { useTrelloApi } from "hooks/useTrelloApi";
import usePromise from "react-promise-suspense";

interface MenuNavigationProps {
    collapsed: boolean;
    onToggleMenu: () => void;
}

export function MenuNavigation({ collapsed, onToggleMenu }: MenuNavigationProps) {
    const workspaceId = useContext(boardContext)[0];
    const api = useTrelloApi();

    async function getWorkspaceName(workspaceId: string | undefined) {
        if (!workspaceId) {
            return 'Select Workspace';
        }
        const response = await api.callTrelloApi('get_board', workspaceId);
        return response.data.name;
    }

    const workspaceName = usePromise(getWorkspaceName, [workspaceId]);

    return (
        <View style={styles.banner}>
            <Text style={styles.workspaceTitle}>
                {workspaceName}
            </Text>
            <Pressable 
                onPress={onToggleMenu}
                style={({ pressed }) => [
                    styles.menuButton,
                    !workspaceId && styles.menuButtonDisabled,
                    pressed && workspaceId && styles.menuButtonPressed
                ]}
                disabled={!workspaceId}
            >
                <Ionicons 
                    name={collapsed ? "menu" : "close"} 
                    size={24} 
                    color={workspaceId ? "white" : "#666666"} 
                />
            </Pressable>
        </View>
    );
}

export function LoadingNavigation() {
    return (
        <View style={styles.banner}>
            <Text style={styles.workspaceTitle}>Loading...</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    banner: {
        height: 60,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        paddingHorizontal: 16,
        backgroundColor: '#424242',
        borderBottomWidth: 1,
        borderBottomColor: '#616161',
        zIndex: 2,
    },
    workspaceTitle: {
        fontSize: 18,
        fontWeight: 'bold',
        color: '#ffffff',
    },
    menuButton: {
        padding: 8,
    },
    menuButtonDisabled: {
        opacity: 0.5,
    },
    menuButtonPressed: {
        opacity: 0.8,
    },
});