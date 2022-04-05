import { BrowserRouter } from 'react-router-dom';
import Cart from './views/components/common/Cart';
import TheLayout from './views/TheLayout';

function App() {
    return (
        <BrowserRouter>
            <TheLayout />
        </BrowserRouter>
    );
}

export default App;
