import React, {useState} from "react";

import PrisonTable from '../Table';
import Form from '../Form';
import PrisonResumeCard from '../PrisonResumeCard';

import { Crime } from '../../interfaces/crime';

import './styles.css';

const Main = () => {
    const [crimes, setCrimes] = useState<Crime[]>([]);
    const [isFisrtOffender, setIsFisrtOffender] = useState<boolean>(false);

    return (
        <main className="main">
            <PrisonTable
                setCrimes={setCrimes}
                crimes={crimes}
            />

            <Form
                setCrimes={setCrimes}
                crimes={crimes}
                setIsFisrtOffender={setIsFisrtOffender}
                isFisrtOffender={isFisrtOffender}
            />

            <PrisonResumeCard
                isFisrtOffender={isFisrtOffender}
                crimes={crimes}
            />
        </main>
    )
}

export default Main;