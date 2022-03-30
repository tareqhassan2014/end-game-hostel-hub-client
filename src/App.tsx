import { Toolbar } from '@mui/material';
import { lazy, Suspense } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import PrivateRoute from './utility/PrivateRoute';
import Header from './views/components/common/Header';
import Contact from './views/pages/contact/Contact';
import Home from './views/pages/home/Home';
import Secure from './views/pages/secure/Secure';
import SignUp from './views/pages/signup/SignUp';

const SignIn = lazy(() => import('./views/pages/signIn/SignIn'));

function App() {
    return (
        <BrowserRouter>
            <Header />
            <Toolbar />

            <Suspense fallback={<div>loading</div>}>
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/login" element={<SignIn />} />
                    <Route path="/signup" element={<SignUp />} />
                    <Route path="/contact" element={<Contact />} />
                    <Route path="/*" element={<PrivateRoute />}>
                        <Route path="secure" element={<Secure />} />
                    </Route>
                </Routes>
            </Suspense>
        </BrowserRouter>
    );
}

export default App;
