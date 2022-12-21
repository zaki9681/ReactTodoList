import {
  Flex,
  Spacer,
  Stack,
  Button,
  Card,
  CardBody,
  StackDivider,
  Heading,
  Box
} from "@chakra-ui/react";
import { EditIcon, CheckCircleIcon } from "@chakra-ui/icons";

const TodoList = ({ todos, editTodo, deleteTodo }) => {
  return (
    <Card>
      <CardBody>
        <Stack divider={<StackDivider />} spacing="4">
          {todos.map((todo) => (
            <Box key={todo.id}>
              <Flex minWidth="max-content" alignItems="center" gap="2">
                <Heading size="md">
                  {todo.id}：{todo.content}
                </Heading>
                <Spacer />
                <Stack direction="row" spacing={3} gap="1">
                  <Button
                    rightIcon={<EditIcon />}
                    colorScheme="blue"
                    onClick={() => editTodo(todo.id)}
                  >
                    編集
                  </Button>
                  <Button
                    rightIcon={<CheckCircleIcon />}
                    colorScheme="green"
                    onClick={() => deleteTodo(todo.id)}
                  >
                    完了
                  </Button>
                </Stack>
              </Flex>
            </Box>
          ))}
        </Stack>
      </CardBody>
    </Card>
  );
};

export default TodoList;
