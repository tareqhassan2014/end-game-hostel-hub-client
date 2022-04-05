import { BrowserRouter } from 'react-router-dom';
import TheLayout from './views/TheLayout';

function App() {
    return (
        <BrowserRouter>
            <TheLayout />
        </BrowserRouter>
    );
}

export default App;
