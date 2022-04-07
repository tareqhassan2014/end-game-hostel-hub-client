import { BrowserRouter } from 'react-router-dom';
import { ColorContextProvider } from './theme/ColorContextProvider ';
import TheLayout from './views/TheLayout';

function App() {
    return (
        <BrowserRouter>
            <ColorContextProvider>
                <TheLayout />
            </ColorContextProvider>
        </BrowserRouter>
    );
}

export default App;
