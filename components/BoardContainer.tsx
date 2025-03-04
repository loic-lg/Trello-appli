// components/BoardContainer.tsx
import React, { useState } from 'react';
import { ScrollView } from 'react-native';
import { Board } from 'components/boards/Board';
import { Column, Card, initialData } from 'components/Interface';
import { MainMenu } from './menu/MainMenu';

export const BoardContainer = () => {
  const [columns, setColumns] = useState<Column[]>(initialData);
  const [newCardTitle, setNewCardTitle] = useState('');
  const [newCardDescription, setNewCardDescription] = useState('');
  const [addingToColumn, setAddingToColumn] = useState<string | null>(null);

  const addNewCard = (columnId: string) => {
    if (!newCardTitle) return;

    const newCard: Card = {
      id: Math.random().toString(),
      title: newCardTitle,
      description: newCardDescription,
    };

    setColumns(
      columns.map((col) => {
        if (col.id === columnId) {
          return {
            ...col,
            cards: [...col.cards, newCard],
          };
        }
        return col;
      })
    );

    setNewCardTitle('');
    setNewCardDescription('');
    setAddingToColumn(null);
  };

  return (
    <ScrollView horizontal showsHorizontalScrollIndicator={false}>
      <Board
        columns={columns}
        setColumns={setColumns}
        newCardTitle={newCardTitle}
        setNewCardTitle={setNewCardTitle}
        newCardDescription={newCardDescription}
        setNewCardDescription={setNewCardDescription}
        addingToColumn={addingToColumn}
        setAddingToColumn={setAddingToColumn}
        addNewCard={addNewCard}
      />
    </ScrollView>
  );
};
