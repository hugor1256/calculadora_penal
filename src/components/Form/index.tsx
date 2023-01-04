import React, { Dispatch, SetStateAction, useState, useEffect } from 'react';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Button from '@mui/material/Button';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import { Crime } from "../../interfaces/crime";
import { allCrimes } from '../../data/allCrimes';
import './style.css';
import CustomAlert from "../Alert";
import { Checkbox, FormControlLabel, FormGroup } from "@mui/material";

interface FormProps {
    setCrimes: Dispatch<SetStateAction<Crime[]>>
    crimes: Crime[]
    setIsFisrtOffender: Dispatch<SetStateAction<boolean>>
    isFisrtOffender: boolean
    setConfessed: Dispatch<SetStateAction<boolean>>
    confessed: boolean
    setColabored: Dispatch<SetStateAction<boolean>>
    colabored: boolean
    setAdvogado: Dispatch<SetStateAction<boolean>>
    advogado: boolean
    setDelacao: Dispatch<SetStateAction<boolean>>
    delacao: boolean
}


interface AlertType {
    type: 'warning' | 'info' | 'error' | 'success';
    message: string;
    className?: string;
}

const Form = ({
    setCrimes,
    crimes,
    setIsFisrtOffender,
    isFisrtOffender,
    setConfessed,
    confessed,
    setColabored,
    colabored,
    setAdvogado,
    advogado,
    setDelacao,
    delacao
}: FormProps) => {
    const [crime, setCrime] = useState('');
    const [alert, setAlert] = useState({} as AlertType);

    useEffect(() => {
        if (Object.keys(alert).length > 0) {
            setTimeout(() => {
                setAlert({} as AlertType);
            }, 4000);
        }
    }, [alert]);

    const handleChange = (event: SelectChangeEvent) => {
        setCrime(event.target.value);
        setAlert({} as AlertType);
    };

    const handleSubmit = () => {
        if (!crime) {
            setAlert({
                type: 'warning',
                message: 'Selecione um crime antes de enviar.'
            });
            return;
        }

        setCrimes([...crimes, JSON.parse(crime)]);
        setCrime('');
    };

    const availableCrimes = allCrimes.filter(allCrime => {
        return crimes.every(crime => allCrime.crime !== crime.crime);
    });


    const ValidacaoCheckBox = () => {
        // if (advogado.valueOf() && colabored.valueOf()  && confessed.valueOf() === true && valorDescontoColaborou? + valorDescontoAdvogado? + ValorDescontoConfessou? > 50) {
        //     setAlert({
        //         type: 'warning',
        //         message: 'Redução ultrapassou 50%.'
        //     });

        // };

        if (confessed.valueOf() || colabored.valueOf() || isFisrtOffender.valueOf() || advogado.valueOf() === true  ) {
            setDelacao(false);
        };

        if(confessed.valueOf() && colabored.valueOf() && isFisrtOffender.valueOf()  === true  ) {
            setDelacao(false);
            setAdvogado(false);
        };

        if(isFisrtOffender.valueOf() === true){
            setDelacao(false);
            setAdvogado(false);
        }

        if(advogado.valueOf() && colabored.valueOf() === true){
            setIsFisrtOffender(false);
        }

        if(advogado.valueOf() && confessed.valueOf() === true){
            setIsFisrtOffender(false);
        }

        if(isFisrtOffender.valueOf() === true){
            setAdvogado(false);
        }

      
        if(advogado.valueOf() === true){
            setIsFisrtOffender(false);
        }
        
        if(delacao.valueOf() === true  ) {
            setAdvogado(false);
            setColabored(false);
            setIsFisrtOffender(false);
            setConfessed(false);
        };
    };

    return (
        <>
            {Object.keys(alert).length > 0 && (<CustomAlert type={alert.type} message={alert.message} className="formAlertWarning"  />)}
            <form className="form">
                <FormControl className="formControl">
                    <InputLabel id="crimes">Crimes</InputLabel>
                    <Select
                        labelId="crimes"
                        id="crimes"
                        value={crime}
                        label="Crimes"
                        onChange={handleChange}
                    >
                        {availableCrimes.map(crime => (
                            <MenuItem
                                key={crime.crime}
                                value={JSON.stringify(crime)}
                            >
                                {crime.crime}
                            </MenuItem>
                        ))}
                    </Select>

                    <Button
                        onClick={handleSubmit}
                        color="primary"
                        type="button"
                        variant="contained"
                    >
                        Adicionar
                    </Button>
                </FormControl>

                <FormGroup className="formGroupCheckbox" >
                    <FormControlLabel
                        control={<Checkbox checked={isFisrtOffender} onClick={() => setIsFisrtOffender(!isFisrtOffender)}/>}
                        label="Réu primário? (-30%)"
                        onChange={ValidacaoCheckBox}
                    />

                    <FormControlLabel
                        control={<Checkbox checked={confessed} onClick={() => setConfessed(!confessed)}/>}
                        label="Confessou? (-10%)"
                        onChange={ValidacaoCheckBox}
                    />

                    <FormControlLabel
                        control={<Checkbox checked={colabored.valueOf()} onClick={() => setColabored(!colabored)} />}
                        label="Colaborou? (-10%)"
                        onChange={ValidacaoCheckBox}
                    />

                    <FormControlLabel
                        control={<Checkbox checked={advogado} onClick={() => setAdvogado(!advogado)} />}
                        label=" Negociação com Advogado (-30%)"
                        className='WidthControll'
                        onChange={ValidacaoCheckBox}
                    />

                    <FormControlLabel
                        control={<Checkbox checked={delacao} onClick={() => setDelacao(!delacao)}  />}
                        label=" Delação Premiada(-50%)"
                        onChange={ValidacaoCheckBox}
                    />
                </FormGroup>
            </form>
        </>
        

    )
};

export default Form;