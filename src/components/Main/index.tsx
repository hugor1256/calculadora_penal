import React, {Dispatch, SetStateAction} from "react";

import PrisonTable from '../Table';
import Form from '../Form';
import PrisonResumeCard from '../PrisonResumeCard';

import { Crime } from '../../interfaces/crime';

import './styles.css';

interface MainProps {
    setCrimes: Dispatch<SetStateAction<Crime[]>>
    crimes: Crime[]
}

const Main = ({
    crimes,
    setCrimes
}: MainProps) => {
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