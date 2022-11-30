import React, {useState} from "react";

import PrisonTable from '../Table';
import Form from '../Form';
import PrisonResumeCard from '../PrisonResumeCard';

import { Crime } from '../../interfaces/crime';

import './styles.css';

const Main = () => {
    const [crimes, setCrimes] = useState<Crime[]>([]);

    return (
        <main className="main">
            <PrisonTable
                setCrimes={setCrimes}
                crimes={crimes}
            />

            <Form
                setCrimes={setCrimes}
                crimes={crimes}
            />

            <PrisonResumeCard
                crimes={crimes}
            />
        </main>
    )
}

export default Main;