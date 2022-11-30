import React, {Dispatch, SetStateAction} from "react";

import PrisonTable from '../Table';
import Form from '../Form';

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
                crimes={crimes}
            />

            <Form
                setCrimes={setCrimes}
                crimes={crimes}
            />
        </main>
    )
}

export default Main;