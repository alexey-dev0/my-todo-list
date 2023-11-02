import { Box, Checkbox, IconButton, Text } from "@chakra-ui/react";
import { EditIcon, DeleteIcon } from "@chakra-ui/icons";
import { TodoProps } from "../stores/TodoStore";

export type TodoItemActions = {
  onDelete: (id: number) => void;
  onToggle: (id: number) => void;
};

const TodoItem: React.FC<TodoProps & TodoItemActions> = ({ id, text, isDone, onDelete, onToggle }) => {
  return (
    <Box
      alignItems="center"
      borderRadius="md"
      borderWidth="1px"
      display="flex"
      justifyContent="space-between"
      p={2}
      width="100%"
    >
      <Checkbox isChecked={isDone} mr={2} onChange={() => onToggle(id)} />
      {/* {onEdit ? (
        <Input defaultValue={text} size="sm" variant="unstyled" />
      ) : ( */}
      <Text textDecoration={isDone ? "line-through" : "none"}>{text}</Text>
      {/* )} */}
      <IconButton
        aria-label={"Edit"}
        colorScheme="blue"
        icon={<EditIcon />}
        ml="auto"
        mr={2}
      />
      <IconButton
        aria-label={"Delete"}
        colorScheme="red"
        icon={<DeleteIcon />}
        onClick={() => onDelete(id)}
      />
    </Box>
  );
};

export default TodoItem;
