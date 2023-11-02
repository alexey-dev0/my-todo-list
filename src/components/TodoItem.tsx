import { Box, Checkbox, IconButton, Input, Text } from "@chakra-ui/react";
import { EditIcon, DeleteIcon } from "@chakra-ui/icons";


export type TodoItemProps = {
  isDone: boolean;
  text: string;
  onDelete?: () => void;
  onToggle?: () => void;
  onEdit?: () => void;
};

const TodoItem: React.FC<TodoItemProps> = ({ text, isDone, onDelete, onToggle, onEdit }) => {
  return (
    <Box
      display="flex"
      justifyContent="space-between"
      alignItems="center"
      borderWidth="1px"
      borderRadius="md"
      p={2}
      width="100%"
    >
      <Checkbox isChecked={isDone} onChange={onToggle} mr={2} />
      {onEdit ? (
        <Input defaultValue={text} size="sm" variant="unstyled" />
      ) : (
        <Text textDecoration={isDone ? "line-through" : "none"}>{text}</Text>
      )}
      <IconButton
        icon={<EditIcon />}
        colorScheme="blue"
        onClick={onEdit}
        ml="auto"
        mr={2}
        aria-label={"Edit"}
      />
      <IconButton
        icon={<DeleteIcon />}
        colorScheme="red"
        onClick={onDelete}
        aria-label={"Delete"}
      />
    </Box>
  );
};

export default TodoItem;
