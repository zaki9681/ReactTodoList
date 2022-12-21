import { FormControl, Input, Button, HStack } from "@chakra-ui/react";
import { AddIcon } from "@chakra-ui/icons";

const Form = ({ value, onChange, createTodo, updateTodo, editFlg }) => {
  return (
    <HStack spacing={5}>
      <FormControl>
        <Input
          type="text"
          value={value}
          onChange={onChange}
          placeholder="Todoを入力"
        />
      </FormControl>
      {editFlg ? (
        <Button colorScheme="teal" onClick={updateTodo}>
          更新
        </Button>
      ) : (
        <Button rightIcon={<AddIcon />} colorScheme="teal" onClick={createTodo}>
          追加
        </Button>
      )}
    </HStack>
  );
};

export default Form;
