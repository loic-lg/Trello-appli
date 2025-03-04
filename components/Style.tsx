import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f0f2f5',
  },
  board: {
    flexDirection: 'row',
    padding: 10,
  },
  column: {
    height: '100%',
    width: 300,
    backgroundColor: '#ebecf0',
    marginHorizontal: 8,
    borderRadius: 8,
    padding: 8,
    maxHeight: '100%',
  },
  columnTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 12,
    color: '#172b4d',
  },
  card: {
    backgroundColor: 'white',
    padding: 12,
    borderRadius: 6,
    marginVertical: 4,
    elevation: 2,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.2,
    shadowRadius: 2,
  },
  cardTitle: {
    fontSize: 14,
    fontWeight: '600',
    marginBottom: 4,
    color: '#172b4d',
  },
  cardDescription: {
    fontSize: 12,
    color: '#5e6c84',
  },
  addCardButton: {
    marginTop: 8,
    padding: 8,
  },
  addCardButtonText: {
    color: '#5e6c84',
    fontSize: 14,
  },
  addCardForm: {
    marginTop: 8,
  },
  input: {
    backgroundColor: 'white',
    padding: 8,
    borderRadius: 4,
    marginBottom: 8,
  },
  addButton: {
    backgroundColor: '#0079bf',
    padding: 8,
    borderRadius: 4,
    alignItems: 'center',
  },
  addButtonText: {
    color: 'white',
    fontWeight: '600',
  },
});
