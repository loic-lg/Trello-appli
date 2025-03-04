import React from 'react';
import { Text, View, TextInput, TouchableOpacity, StyleSheet } from 'react-native';
import { List } from './list/List';
import { Column as ColumnType } from '../Interface';

interface ColumnProps {
  column: ColumnType;
  columns: ColumnType[];
  setColumns: React.Dispatch<React.SetStateAction<ColumnType[]>>;
  newCardTitle: string;
  setNewCardTitle: React.Dispatch<React.SetStateAction<string>>;
  newCardDescription: string;
  setNewCardDescription: React.Dispatch<React.SetStateAction<string>>;
  addingToColumn: string | null;
  setAddingToColumn: React.Dispatch<React.SetStateAction<string | null>>;
  addNewCard: (columnId: string) => void;
}

export function Column({
  column,
  columns,
  setColumns,
  newCardTitle,
  setNewCardTitle,
  newCardDescription,
  setNewCardDescription,
  addingToColumn,
  setAddingToColumn,
  addNewCard,
}: ColumnProps) {
  return (
    <View style={columnStyles.container}>
      <Text style={columnStyles.title}>{column.title}</Text>
      <View style={columnStyles.listContainer}>
        <List column={column} setColumns={setColumns} columns={columns} />
      </View>
      {addingToColumn === column.id ? (
        <View style={columnStyles.form}>
          <TextInput
            style={columnStyles.input}
            value={newCardTitle}
            onChangeText={setNewCardTitle}
            placeholder="Card title"
          />
          <TextInput
            style={columnStyles.input}
            value={newCardDescription}
            onChangeText={setNewCardDescription}
            placeholder="Description"
            multiline
          />
          <TouchableOpacity style={columnStyles.button} onPress={() => addNewCard(column.id)}>
            <Text style={columnStyles.buttonText}>Add Card</Text>
          </TouchableOpacity>
        </View>
      ) : (
        <TouchableOpacity
          style={columnStyles.addButton}
          onPress={() => setAddingToColumn(column.id)}>
          <Text style={columnStyles.addButtonText}>+ Add Card</Text>
        </TouchableOpacity>
      )}
    </View>
  );
}

const columnStyles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: 'white',
    borderRadius: 8,
    margin: 8,
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 12,
  },
  listContainer: {
    flex: 1,
  },
  form: {
    marginTop: 12,
  },
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 4,
    padding: 8,
    marginBottom: 8,
  },
  button: {
    backgroundColor: '#007AFF',
    padding: 12,
    borderRadius: 4,
    alignItems: 'center',
  },
  buttonText: {
    color: 'white',
    fontWeight: 'bold',
  },
  addButton: {
    marginTop: 12,
    padding: 12,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 4,
    alignItems: 'center',
  },
  addButtonText: {
    color: '#007AFF',
  },
});
