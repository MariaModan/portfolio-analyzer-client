import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';


  
function createData(symbol, shares, avgCost, marketValue, dailyGain, totalGain) {
return { symbol, shares, avgCost, marketValue, dailyGain, totalGain };
}



const rows = [
    createData('SPY', 10,500, 550, 2, 10),
    createData('NAS', 5,100, 200, 5, 100)
]

function PortfolioSummaryTable() {
    const useStyles = makeStyles({
        table: {
          minWidth: 650,
        },
    });
    const classes = useStyles();

    return (
        <TableContainer component={Paper}>
            <Table className={classes.table} aria-label="simple table">
                <TableHead>
                <TableRow>
                    <TableCell>Symbol</TableCell>
                    <TableCell align="right">Shares</TableCell>
                    <TableCell align="right">Avg Cost/ Share</TableCell>
                    <TableCell align="right">Market Value</TableCell>
                    <TableCell align="right">Daily Gain</TableCell>
                    <TableCell align="right">Total Gain</TableCell>
                </TableRow>
                </TableHead>
                <TableBody>
                {rows.map((row) => (
                    <TableRow key={row.symbol}>
                    <TableCell component="th" scope="row">
                        {row.symbol}
                    </TableCell>
                    <TableCell align="right">{row.shares}</TableCell>
                    <TableCell align="right">{row.avgCost}</TableCell>
                    <TableCell align="right">{row.marketValue}</TableCell>
                    <TableCell align="right">{row.dailyGain}%</TableCell>
                    <TableCell align="right">{row.totalGain}%</TableCell>
                    </TableRow>
                ))}
                </TableBody>
            </Table>
            </TableContainer>
    )
}

export default PortfolioSummaryTable
