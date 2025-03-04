import React, { useRef, useState, useEffect } from 'react';
import {
  View,
  Dimensions,
  NativeSyntheticEvent,
  NativeScrollEvent,
  StyleSheet,
} from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import { Column as ColumnType } from '../Interface';
import { Column } from './Column';

interface BoardProps {
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

export function Board({ columns, setColumns, ...props }: BoardProps) {
  const screenWidth = Dimensions.get('window').width;
  const [currentColumnIndex, setCurrentColumnIndex] = useState(0);
  const scrollViewRef = useRef<ScrollView>(null);

  const handleScroll = (event: NativeSyntheticEvent<NativeScrollEvent>) => {
    const scrollX = event.nativeEvent.contentOffset.x;
  };

  const handleScrollEnd = (event: NativeSyntheticEvent<NativeScrollEvent>) => {
    const scrollX = event.nativeEvent.contentOffset.x;

    const newIndex = Math.round(scrollX / screenWidth);

    if (newIndex !== currentColumnIndex && newIndex >= 0 && newIndex < columns.length) {
      setCurrentColumnIndex(newIndex);
    }
  };

  return (
    <View style={styles.container}>
      <ScrollView
        ref={scrollViewRef}
        horizontal
        pagingEnabled
        showsHorizontalScrollIndicator={true}
        onScroll={handleScroll}
        onMomentumScrollEnd={handleScrollEnd}
        onScrollEndDrag={handleScrollEnd}
        scrollEventThrottle={16}
        style={[styles.scrollView, { width: screenWidth }]}
        contentContainerStyle={{
          width: screenWidth * columns.length,
          flexDirection: 'row',
        }}
        alwaysBounceHorizontal={false}
        bounces={false}
        overScrollMode="never">
        {columns.map((column, index) => (
          <View
            key={column.id}
            style={{
              width: screenWidth,
              height: '100%',
              backgroundColor: index === currentColumnIndex ? '#f5f5f5' : '#ffffff',
              paddingHorizontal: 16,
            }}>
            <Column column={column} columns={columns} setColumns={setColumns} {...props} />
          </View>
        ))}
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    overflow: 'hidden',
  },
  scrollView: {
    flex: 1,
  },
});
