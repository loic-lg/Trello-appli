// Types
export interface Card {
  id: string;
  title: string;
  description: string;
}

export interface Column {
  id: string;
  title: string;
  cards: Card[];
}

export const initialData: Column[] = [
  {
    id: '1',
    title: 'To Do',
    cards: [
      { id: '1', title: 'Task 1', description: 'Complete the design' },
      { id: '2', title: 'Task 2', description: 'Review code' },
    ],
  },
  {
    id: '2',
    title: 'In Progress',
    cards: [{ id: '3', title: 'Task 3', description: 'Implement API' }],
  },
  {
    id: '3',
    title: 'Done',
    cards: [{ id: '4', title: 'Task 4', description: 'Setup project' }],
  },
];
