import { ReactSetState } from "../types/utils";

type Input = {
  input: string;
  setInput: ReactSetState<string>;
};

const InputComponent = ({ input, setInput }: Input) => {
  return (
    <div>
      <input
        type="text"
        className="w-full p-2 rounded-sm mb-2 bg-gray-500"
        placeholder="todo-list...."
        value={input}
        onChange={(e) => setInput(e.target.value)}
      />
    </div>
  );
};

export default InputComponent;
