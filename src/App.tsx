import React, {useState} from 'react';

import Header from './components/Header';
import Main from './components/Main';

import { Crime } from './interfaces/crime';

import './styles/App.css';

function App() {
    const [crimes, setCrimes] = useState<Crime[]>([]);

    return (
        <>
            <Header/>
            <Main
                crimes={crimes}
                setCrimes={setCrimes}
            />
        </>
    );
}

export default App;
