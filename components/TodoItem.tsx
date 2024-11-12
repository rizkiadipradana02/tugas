// app/components/TodoItem.tsx
import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { Todo } from '@/types/Todo';

interface TodoItemProps {
  todo: Todo;
  onToggle: (id: string) => void;
}

const TodoItem: React.FC<TodoItemProps> = ({ todo, onToggle }) => {
  return (
    <TouchableOpacity onPress={() => onToggle(todo.id)}>
      <View style={styles.container}>
        <Text style={todo.completed ? styles.completed : styles.incomplete}>
          {todo.title}
        </Text>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 15,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
  },
  completed: {
    textDecorationLine: 'line-through',
    color: 'gray',
  },
  incomplete: {
    color: 'black',
  },
});

export default TodoItem;