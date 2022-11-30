import React from 'react';

import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import Chip from '@mui/material/Chip';
import DeleteIcon from '@mui/icons-material/Delete';

import { Crime } from "../../interfaces/crime";

interface PrisonTableProps {
    crimes: Crime[]
}

const PrisonTable = ({
    crimes
}: PrisonTableProps) => {
    return (
        <TableContainer style={{marginTop: '20px'}} component={Paper}>
            <Table sx={{ minWidth: 650 }} size="small" aria-label="A table of crimes">
                <TableHead>
                    <TableRow>
                        <TableCell>Crime</TableCell>
                        <TableCell>Tipo</TableCell>
                        <TableCell>Meses</TableCell>
                        <TableCell>Multa</TableCell>
                        <TableCell>Remover</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {(crimes ?? []).map((crime) => (
                        <TableRow
                            key={crime.crime}
                            sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                        >
                            <TableCell component="th" scope="row">
                                {crime.crime}
                            </TableCell>
                            <TableCell>
                                <Chip  color="primary" label={crime.type} variant="outlined" />
                            </TableCell>
                            <TableCell>{crime.months}</TableCell>
                            <TableCell>{crime.trafficTicket.toLocaleString('pt-BR', {style: 'currency', currency: 'BRL'})}</TableCell>
                            <TableCell>
                                <DeleteIcon />
                            </TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </TableContainer>
    );
};

export default PrisonTable;