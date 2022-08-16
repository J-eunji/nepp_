import Box from "./components02/Box";
import { TodoProvider } from "./contexts/useTodoContext";

function App() {
  return (
    <TodoProvider>
      <Box />;
    </TodoProvider>
  );
}

export default App;
