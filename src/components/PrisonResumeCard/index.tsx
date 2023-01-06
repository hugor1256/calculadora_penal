import React, { Dispatch, SetStateAction, useState, useEffect } from 'react';

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
import { DiscountCalculator } from '../../DiscountsCalculator/DiscountCalculator';
import CustomAlert from '../Alert';

import './styles.css';

interface PrisonResumeCardProps {
    houveAdvogado: boolean
    crimes: Crime[]
    isFisrtOffender: boolean
    advogado: boolean
    delacao: boolean
    confessed: boolean
    colabored: boolean
    setCrimes: Dispatch<SetStateAction<Crime[]>>;
    setIsFisrtOffender: Dispatch<SetStateAction<boolean>>;
    setColabored: Dispatch<SetStateAction<boolean>>;
    setConfessed: Dispatch<SetStateAction<boolean>>;
    setAdvogado: Dispatch<SetStateAction<boolean>>;
    setDelacao: Dispatch<SetStateAction<boolean>>;
    setHouveAdvogado: Dispatch<SetStateAction<boolean>>;
}

const PrisonResumeCard = ({
    crimes,
    isFisrtOffender,
    advogado,
    delacao,
    confessed,
    colabored,
    setCrimes,
    setIsFisrtOffender,
    setAdvogado,
    setConfessed,
    setColabored,
    setDelacao,
}: PrisonResumeCardProps) => {
    const [dioalogOpen, setDialogOpen] = useState<boolean>(false);
    const [showSuccessAlert, setShowSuccessAlert] = useState<boolean>(false);
    const [prisonersName, setPrisonersName] = useState<string>('');
    const [prisonersPassaport, setPrisonersPassaport] = useState<string>('');
    const [reducaoAplicada, setReducaoAplicada] = useState<string>('');
    const [nomeAdvogado, setnomeAdvogado] = useState<string>('');
    const [houveAdvogado, setHouveAdvogado] = useState<string>('');

    useEffect(() => {
        if (showSuccessAlert) {
            setTimeout(() => {
                setShowSuccessAlert(!showSuccessAlert)
            }, 4000);
        }
    }, [showSuccessAlert]);

    const INITAL_TRAFFIC_TICKET = 20000;

    const handleExportPrisonersData = async () => {
        if (!prisonersName || !prisonersPassaport || !reducaoAplicada || !houveAdvogado) {
            return;
        }

        const crimeFormatado = crimes.map(crime => `${crime.crime}`).join(",  ")

        const textToClipboard = `
Prisioneiro: ${prisonersName},
Passaporte: ${prisonersPassaport},
Redução aplicada: ${reducaoAplicada}% ,
Total da pena: ${resolveMonths()} meses,
Total de multa: ${(resolveTrafficTicket()! + INITAL_TRAFFIC_TICKET).toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })},
Valor da Fiança: ${(fianca()!).toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })},
Crimes Cometidos: ${crimeFormatado},
Houve Advogado: ${houveAdvogado}
Nome do Advogado: ${nomeAdvogado.toUpperCase()},
Prisão feita por:
Policiais envolvidos:
        `;

        await navigator.clipboard.writeText(textToClipboard);

        setShowSuccessAlert(!showSuccessAlert);
        resetAll();
    }

    const resetAll = (): void => {
        setColabored(false);
        setConfessed(false);
        setIsFisrtOffender(false);
        setAdvogado(false);
        setDelacao(false);
        setCrimes([]);
        setDialogOpen(!dioalogOpen);
    }

    const resolveTrafficTicket = (): number | undefined => {
        const totalTrafficTicket = crimes.reduce((acumulador, numero) => acumulador + numero.trafficTicket, 0) + INITAL_TRAFFIC_TICKET;

        const discountCalulator = new DiscountCalculator();
        return discountCalulator.calculateDiscount(totalTrafficTicket);
    }


    const resolveMonths = (): number | undefined => {
        const totalMonths = crimes.reduce((acumulador, numero) => acumulador + numero.months, 0);

        const discountCalulator = new DiscountCalculator();
        return discountCalulator.calculateDiscount(totalMonths, isFisrtOffender, advogado, delacao, confessed, colabored);
    }

    const fianca = (): number | undefined | string => {
        if (crimes.some(crime => !crime.haveBail))
            return "Crime Inafiançavel"
        const totalFianca = crimes.reduce((acumulador, numero) => acumulador + numero.fianca, 0);

        const discountCalulator = new DiscountCalculator();
        return discountCalulator.calculateDiscount(totalFianca, isFisrtOffender, advogado, delacao, confessed, colabored);
    }


    return (
        <>
            {showSuccessAlert && <CustomAlert message="Dados exportados com sucesso!" type="success" className="prisonResumeSuccessAlert" />}
            <Box className="featherDescriptionCard" sx={{ minWidth: 275 }}>
                <Card variant="outlined">
                    <CardContent className="background">
                        <div className='Width'>
                            <div className='Underline'>
                                <Typography sx={{ fontSize: 20 }} fontFamily="fantasy" gutterBottom>
                                    Resumo da prisão
                                </Typography>
                            </div>
                        </div>
                        <div className='totalPena'>
                            <Typography variant="h5" component="div">
                                Tempo total da pena: {resolveMonths()} meses
                            </Typography>
                        </div>
                        <div className='totalMulta'>
                            <Typography variant="h5">
                                Total de multa: {resolveTrafficTicket()!.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })}
                            </Typography>
                        </div>
                        <div className='totalFianca'>
                            <Typography variant="h5">
                                Total de Fiança: {fianca()!.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })}
                            </Typography>
                        </div>
                        <div className='Reducao'>
                            <Typography sx={{ fontSize: 16, color: "#FF0000;" }} fontFamily="fantasy" gutterBottom>
                                OBS: REDUÇÃO MAXIMA DA PENA = 50%
                            </Typography>
                        </div>
                    </CardContent>
                    <div className='ExportDados'>
                        <CardActions>
                            <Button onClick={() => setDialogOpen(!dioalogOpen)} size="small">Exportar dados</Button>
                        </CardActions>
                    </div>
                </Card>
            </Box>

            <Dialog open={dioalogOpen}>
                <DialogTitle>Exportar dados do réu</DialogTitle>
                <DialogContent>
                    <DialogContentText>
                        Ao cliar em "EXPORTAR DADOS", os dados do réu será copiado para sua
                        área de transferência. Cole essas informaçoes no e-mail da policia.
                        Parabéns pela prisão, Steve. A prefeitura agradece!
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
                        type="number"
                        fullWidth
                        variant="standard"
                        value={prisonersPassaport}
                        onChange={e => setPrisonersPassaport(e.target.value)}
                        required
                    />
                    <TextField
                        autoFocus
                        margin="dense"
                        id="reducao"
                        label="Redução aplicada"
                        type="number"
                        fullWidth
                        variant="standard"
                        value={reducaoAplicada}
                        onChange={e => setReducaoAplicada(e.target.value)}
                        required
                    />

                    <TextField
                        autoFocus
                        margin="dense"
                        id="reducao"
                        label="Réu pagou fiança? (Sim/Não)"
                        type="text"
                        fullWidth
                        variant="standard"
                        value={houveAdvogado}
                        onChange={e => setHouveAdvogado(e.target.value)}
                        required
                    />


                    <TextField
                        autoFocus
                        margin="dense"
                        id="reducao"
                        label="Nome do Advogado (Se houver)"
                        type="text"
                        fullWidth
                        variant="standard"
                        value={nomeAdvogado}
                        onChange={e => setnomeAdvogado(e.target.value)}
                        required
                    />
                </DialogContent>

                <DialogActions>
                    <Button onClick={() => setDialogOpen(!dioalogOpen)}>Fechar</Button>
                    <Button disabled={!prisonersName || !prisonersPassaport || !reducaoAplicada || !houveAdvogado} onClick={handleExportPrisonersData}>Exportar dados</Button>
                </DialogActions>
            </Dialog>
        </>
    );
}

export default PrisonResumeCard;