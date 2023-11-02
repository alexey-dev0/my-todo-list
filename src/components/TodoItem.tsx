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
      alignItems="center"
      borderRadius="md"
      borderWidth="1px"
      display="flex"
      justifyContent="space-between"
      p={2}
      width="100%"
    >
      <Checkbox isChecked={isDone} mr={2} onChange={onToggle} />
      {onEdit ? (
        <Input defaultValue={text} size="sm" variant="unstyled" />
      ) : (
        <Text textDecoration={isDone ? "line-through" : "none"}>{text}</Text>
      )}
      <IconButton
        aria-label={"Edit"}
        colorScheme="blue"
        icon={<EditIcon />}
        ml="auto"
        mr={2}
        onClick={onEdit}
      />
      <IconButton
        aria-label={"Delete"}
        colorScheme="red"
        icon={<DeleteIcon />}
        onClick={onDelete}
      />
    </Box>
  );
};

export default TodoItem;
