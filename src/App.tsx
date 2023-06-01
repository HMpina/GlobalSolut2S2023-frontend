import { BrowserRouter } from 'react-router-dom'
import Apps from './routes';
import Header from './components/Header';
function App() {
  return (
    <BrowserRouter>
      <Header />
      <Apps />
    </BrowserRouter>
  );
}
export default App;