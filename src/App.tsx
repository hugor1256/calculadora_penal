import React from 'react';

import Header from './components/Header';
import Main from './components/Main';

import './styles/App.css';
import LabelBottomNavigation from "./components/Footer";

function App() {
    return (
        <>
            <Header />
            <Main />
            <LabelBottomNavigation />
        </>
    );
}

export default App;
