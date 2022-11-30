import * as React from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

import { Crime } from "../../interfaces/crime";

import './styles.css';
import {applyDiscount} from "../../helper/applyDiscount";

interface FormProps {
    crimes: Crime[]
    isFisrtOffender: boolean
}

const PrisonResumeCard = ({
    crimes,
    isFisrtOffender
}: FormProps) => {
    const resolveTrafficTicket = (): number => {
        const initalTrafficTicket = 20000;
        const totalTrafficTicket = crimes.reduce((acumulador, numero) => acumulador + numero.trafficTicket, 0);

        if (isFisrtOffender) {
            return totalTrafficTicket > 0 ? applyDiscount(30, totalTrafficTicket) : applyDiscount(30, initalTrafficTicket);
        }

        return totalTrafficTicket > 0 ? totalTrafficTicket : initalTrafficTicket;
    }

    const resolveMonths = (): number => {
        const initalMonth = 0;
        const totalMonths = crimes.reduce((acumulador, numero) => acumulador + numero.months, 0)

        return totalMonths > 0 ? totalMonths : initalMonth;
    }

    return (
        <Box className="featherDescriptionCard" sx={{ minWidth: 275 }}>
            <Card variant="outlined">
                <CardContent>
                    <Typography sx={{ fontSize: 20 }} color="text.secondary" gutterBottom>
                        Resumo da prisão
                    </Typography>

                    <Typography variant="h5" component="div">
                        Tempo total da pena: {resolveMonths()} meses
                    </Typography>

                    <Typography variant="h5">
                        Total de multa: {resolveTrafficTicket().toLocaleString('pt-BR', {style: 'currency', currency: 'BRL'})}
                    </Typography>
                </CardContent>

                <CardActions>
                    <Button size="small">Exportar dados</Button>
                </CardActions>
            </Card>
        </Box>
    );
}

export default PrisonResumeCard;