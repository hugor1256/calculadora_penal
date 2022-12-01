import React, { useState } from 'react';

import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';

import { Crime } from '../../interfaces/crime';

import { applyDiscount } from '../../helper/applyDiscount';

import './styles.css';

interface FormProps {
    crimes: Crime[]
    isFisrtOffender: boolean
    confessed: boolean
}

const PrisonResumeCard = ({
    crimes,
    isFisrtOffender,
    confessed
}: FormProps) => {
    const [dioalogOpen, setDialogOpen] = useState<boolean>(false);
    const [prisonersName, setPrisonersName] = useState<string>('');
    const [prisonersPassaport, setPrisonersPassaport] = useState<string>('');

    const handleExportPrisonersData = async () => {
        const textToDiscord = `
            Prisioneiro: ${prisonersName},
            Passaporte: ${prisonersPassaport},
            Total da pena: ${resolveMonths()},
            Total de multa: ${resolveTrafficTicket().toLocaleString('pt-BR', {style: 'currency', currency: 'BRL'})},
            Prisão feita por:
            Policiais envolvidos:
        `;

        await navigator.clipboard.writeText(textToDiscord);
    }

    const resolveTrafficTicket = (): number => {
        const initalTrafficTicket = 20000;
        const totalTrafficTicket = crimes.reduce((acumulador, numero) => acumulador + numero.trafficTicket, 0);

        if (isFisrtOffender && confessed) {
            return totalTrafficTicket > 0 ? applyDiscount(60, totalTrafficTicket) : applyDiscount(60, initalTrafficTicket);
        }

        if (isFisrtOffender || confessed) {
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
        <>
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
                        <Button onClick={() => setDialogOpen(!dioalogOpen)} size="small">Exportar dados</Button>
                    </CardActions>
                </Card>
            </Box>

            <Dialog open={dioalogOpen}>
                <DialogTitle>Exportar dados do réu</DialogTitle>
                <DialogContent>
                    <DialogContentText>
                        Ao cliar em "EXPORTAR DADOS", os dados do réu será copiado para sua
                        área de transferência. Cole essas informaçoes no e-mail da policia.
                        Parabéns pela prisão, steve. A prefeitura agradece!
                    </DialogContentText>

                    <TextField
                        autoFocus
                        margin="dense"
                        id="name"
                        label="Nome do réu"
                        type="text"
                        fullWidth
                        variant="standard"
                        value={prisonersName}
                        onChange={e => setPrisonersName(e.target.value)}
                        required
                    />
                    <TextField
                        autoFocus
                        margin="dense"
                        id="passaport"
                        label="Passaporte do réu"
                        type="text"
                        fullWidth
                        variant="standard"
                        value={prisonersPassaport}
                        onChange={e => setPrisonersPassaport(e.target.value)}
                        required
                    />
                </DialogContent>

                <DialogActions>
                    <Button onClick={() => setDialogOpen(!dioalogOpen)}>Fechar</Button>
                    <Button disabled={!prisonersName || !prisonersPassaport} onClick={handleExportPrisonersData}>Exportar dados</Button>
                </DialogActions>
            </Dialog>
        </>
    );
}

export default PrisonResumeCard;