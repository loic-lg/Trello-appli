import React from 'react';
import DraggableFlatList from 'react-native-draggable-flatlist';

import { renderCard } from './AddNewCards';
import { Column } from '../../Interface';

interface ListProps {
  column: Column;
  setColumns: React.Dispatch<React.SetStateAction<Column[]>>;
  columns: Column[];
}

export function List({ column, setColumns, columns }: ListProps) {
  const handleDragEnd = ({ data }: { data: any[] }) => {
    // Create a new array with the updated card order
    const updatedCards = [...data];

    // Create a new column object with the updated cards
    const updatedColumn = { ...column, cards: updatedCards };

    // Create a new array of columns with the updated column
    const updatedColumns = columns.map((col) => (col.id === column.id ? updatedColumn : col));

    // Update the state with the new columns array
    setColumns(updatedColumns);
  };

  return (
    <>
      <DraggableFlatList
        data={column.cards}
        onDragEnd={handleDragEnd}
        keyExtractor={(item: any) => item.id}
        renderItem={renderCard}
      />
    </>
  );
}
