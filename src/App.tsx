import React, {useState} from 'react';

import Header from './components/Header';
import PrisonTable from './components/Table';

import { Crime } from './interfaces/crime';

import './styles/App.css';

function App() {
    const [crimes, setCrimes] = useState<Crime[]>([]);

    return (
        <>
            <Header/>
            <PrisonTable
                crimes={crimes}
            />
        </>
    );
}

export default App;
