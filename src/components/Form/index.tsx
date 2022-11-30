import React,  {Dispatch, SetStateAction, useState } from 'react';

import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Button from '@mui/material/Button';
import Select, { SelectChangeEvent } from '@mui/material/Select';

import { Crime } from "../../interfaces/crime";

import { allCrimes } from '../../data/allCrimes';

import './style.css';

interface FormProps {
    setCrimes: Dispatch<SetStateAction<Crime[]>>
    crimes: Crime[]
}

const Form = ({
    setCrimes,
    crimes,
}: FormProps) => {
    const [crime, setCrime] = useState('');
    const handleChange = (event: SelectChangeEvent) => setCrime(event.target.value);

    const handleSubmit = () => {
        setCrimes([...crimes, JSON.parse(crime)]);
        setCrime('');
    };

    const availableCrimes = allCrimes.filter(allCrime => {
        return crimes.every(crime => allCrime.crime !== crime.crime);
    });

    return (
        <form className="form">
            <FormControl>
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
            </FormControl>
            <Button
                color="primary"
                type="button"
                variant="contained"
            >
                Adicionar
            </Button>
        </form>
    )
};

export default Form;