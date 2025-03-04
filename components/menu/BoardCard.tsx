import React from 'react';
import { Text, Pressable, StyleSheet } from 'react-native';
import { Workspace } from 'ApiRoutes/Workspace';
import { useBoardSetter } from 'hooks/useBoardId';

interface BoardCardProps {
    workspace: Workspace;
}

export function BoardCard({ workspace }: BoardCardProps) {
    const setWorkspace = useBoardSetter();

    return (
        <Pressable
            style={({ pressed }) => [
                styles.boardName,
                pressed && styles.boardItemPressed
            ]}
            onPress={() => {
                setWorkspace(workspace.id);
                console.log('Workspace selected:', workspace.id);
            }}
        >
            <Text style={styles.boardName}>{workspace.name}</Text>
        </Pressable>
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
        color: '#ffffff', // White text
    },
    boardItemPressed: {
        backgroundColor: '#3d3d3d', // Slightly lighter when pressed
    },
    boardName: {
        textAlign: 'center',
        padding: 12,
        borderColor: '#aaaaaa',
        borderRadius: 16,
        borderWidth: 1,
        fontSize: 20,
        marginBottom: 12,
        backgroundColor: '#2d2d2d', // Dark gray background
        color: '#e0e0e0', // Light gray text
    },
});