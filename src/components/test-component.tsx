import React, { useState } from "react";
import { 
    TextField, 
    InputAdornment, 
    Paper, 
    TableRow, 
    Table, 
    TableHead, 
    TableCell, 
    TableBody, 
    Toolbar, 
    Typography,
    IconButton,
    TablePagination,
    TableContainer } from "@material-ui/core";
import SearchIcon from '@material-ui/icons/Search';
import CancelIcon from '@material-ui/icons/Cancel';
import zcTestData from "../data/nyc/zcTest.json";

interface toolbarProps {
    title: string;
    search: string;
    onSearchChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
    placeholder: string;
    onClick: () => void;
}

const EnhancedTableToolbar = (props: toolbarProps) => {

    let cancelIcon: any = null;
    if(props.search !== "") {
        cancelIcon = (
            <InputAdornment position="end">
                <IconButton onClick={props.onClick}>
                    <CancelIcon color="disabled" />
                </IconButton>
            </InputAdornment>
        )   
    }

    return(
        <Toolbar>
            <Typography variant="h6" component="div" style={{flex: '1 1 90%'}}>
                <strong>{props.title}</strong>
            </Typography>
            <TextField 
                value={props.search}
                onChange={props.onSearchChange}
                id="input-search"
                placeholder={props.placeholder}
                InputProps={{
                    startAdornment: (
                        <InputAdornment position="start">
                            <SearchIcon />
                        </InputAdornment>
                    ),
                    endAdornment: cancelIcon
                }}
            />
        </Toolbar>
    )
}

const ZCTest = () => {

    const [search, setSearch] = useState("");
    const [page, setPage] = useState(0);
    const [rowsPerPage, setRowsPerPage] = React.useState(5);
    const [results, setResults] = React.useState(zcTestData);

    const onSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        let search = e.target ? e.target.value : "";
        let searchResults = zcTestData.filter(item => !search || item[0].indexOf(search) >= 0);
        setSearch(search);
        setResults(searchResults);
        setPage(0);
    }

    const onDoneClicked = () => {
        setSearch("");
        setResults(zcTestData);
    }

    const handleChangePage = (event: unknown, newPage: number) => {
        setPage(newPage);
    };

    const handleChangeRowsPerPage = (event: React.ChangeEvent<HTMLInputElement>) => {
        setRowsPerPage(parseInt(event.target.value, 10));
        setPage(0);
    };

    const emptyRows = rowsPerPage - Math.min(rowsPerPage, results.length - page * rowsPerPage);

    return(
        <Paper variant="outlined" style={{ marginTop: 10, padding: 30}}>
            <EnhancedTableToolbar 
                title={"Test Data by Zip Code"}
                search={search}
                onSearchChange={onSearchChange}
                placeholder={"Enter Zip Code"}
                onClick={onDoneClicked}
            />
            <TableContainer>
                <Table style={{marginTop: 20}}>
                    <TableHead>
                        <TableRow>
                            <TableCell variant="head" align="right" style={{fontSize: 16}}><strong>Zip Code</strong></TableCell>
                            <TableCell variant="head" align="right" style={{fontSize: 16}}><strong>Positive Cases</strong></TableCell>
                            <TableCell variant="head" align="right" style={{fontSize: 16}}><strong>Tested Cases</strong></TableCell>
                            <TableCell variant="head" align="right" style={{fontSize: 16}}><strong>Positive Rate</strong></TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {results
                            .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                            .map(item => {
                                return(
                                    <TableRow key={item[0]}>
                                        <TableCell 
                                            component="th" 
                                            scope="row" 
                                            align="right"
                                            style={{fontSize: 17}}
                                        >
                                            {item[0]}
                                        </TableCell>
                                        <TableCell align="right" style={{fontSize: 17}}>
                                            {item[1]}
                                        </TableCell>
                                        <TableCell align="right" style={{fontSize: 17}}>
                                            {item[2]}
                                        </TableCell>
                                        <TableCell align="right" style={{fontSize: 17}}>
                                            {item[3]}%
                                        </TableCell>
                                    </TableRow>
                                )
                            })
                        }
                        {emptyRows > 0 && (
                            <TableRow style={{ height: (57) * emptyRows }}>
                                <TableCell colSpan={6} />
                            </TableRow>
                        )}
                    </TableBody>    
                </Table>
            </TableContainer>
            <TablePagination
                rowsPerPageOptions={[5, 10, 25]}
                component="div"
                count={results.length}
                rowsPerPage={rowsPerPage}
                page={page}
                onChangePage={handleChangePage}
                onChangeRowsPerPage={handleChangeRowsPerPage}
            />
        </Paper>
    )
}

export default ZCTest;