import { Workspace } from "ApiRoutes/Workspace";
import { TrelloApiResponse, useTrelloApi } from "hooks/useTrelloApi";
import { useUser } from "hooks/useUser";
import { View, Text, StyleSheet } from 'react-native';
import usePromise from "react-promise-suspense";
import { BoardCard } from "./BoardCard";

export function BoardList() {
    const api = useTrelloApi();
    const user = useUser();
    
    const response = usePromise(api.callTrelloApi, ['get_member_boards', user.id]);
    if (!response) return;

    const boards = response.data as Workspace[];

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Your Boards</Text>
            {boards.map((workspace) => (
                <BoardCard
                    key={workspace.id} 
                    workspace={workspace}
                />
            ))}
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        padding: 16,
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 16,
        color: '#ffffff',
    },
});