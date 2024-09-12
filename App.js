import { PaperProvider } from 'react-native-paper';
import Home from "./Home"
import Signup from "./singup"
import Login from './login';

function App() {
  return (
    <PaperProvider>
      <Login />
    </PaperProvider>
  );
}

export default App