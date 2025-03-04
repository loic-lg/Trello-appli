import React from 'react';
import { Text, TouchableOpacity } from 'react-native';
import { RenderItemParams } from 'react-native-draggable-flatlist';
import { Card } from '../../Interface';
import { styles } from '../../Style';
import { ScaleDecorator } from 'react-native-draggable-flatlist';

export const renderCard = ({ item, drag, isActive }: RenderItemParams<Card>) => {
  return (
    <ScaleDecorator>
      <TouchableOpacity
        onLongPress={drag}
        disabled={isActive}
        style={[styles.card, { opacity: isActive ? 0.5 : 1 }]}>
        <Text style={styles.cardTitle}>{item.title}</Text>
        <Text style={styles.cardDescription}>{item.description}</Text>
      </TouchableOpacity>
    </ScaleDecorator>
  );
};
