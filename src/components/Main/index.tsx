import React, { useState } from "react";

import PrisonTable from '../Table';
import Form from '../Form';
import PrisonResumeCard from '../PrisonResumeCard';

import { Crime } from '../../interfaces/crime';

import './styles.css';

const Main = () => {
    const [crimes, setCrimes] = useState<Crime[]>([]);
    const [isFisrtOffender, setIsFisrtOffender] = useState<boolean>(false);
    const [confessed, setConfessed] = useState<boolean>(false);
    const [colabored, setColabored] = useState<boolean>(false);
    const [advogado, setAdvogado] = useState<boolean>(false);
    const [delacao, setDelacao] = useState<boolean>(false);
    const [houveAdvogado, setHouveAdvogado] = useState<boolean>(false);

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
                setConfessed={setConfessed}
                confessed={confessed}
                setColabored={setColabored}
                colabored={colabored}
                advogado={advogado}
                setAdvogado={setAdvogado}
                delacao={delacao}
                setDelacao={setDelacao}
            />

            <PrisonResumeCard
                isFisrtOffender={isFisrtOffender}
                houveAdvogado={houveAdvogado}
                advogado={advogado}
                delacao={delacao}
                confessed={confessed}
                crimes={crimes}
                colabored={colabored}
                setCrimes={setCrimes}
                setIsFisrtOffender={setIsFisrtOffender}
                setColabored={setColabored}
                setConfessed={setConfessed}
                setAdvogado={setAdvogado}
                setDelacao={setDelacao}
                setHouveAdvogado={setHouveAdvogado}
            />
        </main>
    )
}

export default Main;