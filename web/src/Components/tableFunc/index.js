import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';
import { lighten, makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TablePagination from '@material-ui/core/TablePagination';
import TableRow from '@material-ui/core/TableRow';
import TableSortLabel from '@material-ui/core/TableSortLabel';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Paper from '@material-ui/core/Paper';
import Tooltip from '@material-ui/core/Tooltip';

import { Link, useHistory } from 'react-router-dom'

import api from '../../services/api'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEye } from '@fortawesome/free-regular-svg-icons'
import { faPlusCircle, faTrash } from '@fortawesome/free-solid-svg-icons'

import ModalEmployee from '../modal/employee'
import ModalEmployeeSel from '../modal/employeeSel'

import AlertDialogDelete from '../dialog/dialogDelete'

export default function TableFunc() {

function createData(id, name, address, number, cpf) {
  return { id, name, address, number, cpf };
}

function descendingComparator(a, b, orderBy) {
  if (b[orderBy] < a[orderBy]) {
    return -1;
  }
  if (b[orderBy] > a[orderBy]) {
    return 1;
  }
  return 0;
}

function getComparator(order, orderBy) {
  return order === 'desc'
    ? (a, b) => descendingComparator(a, b, orderBy)
    : (a, b) => -descendingComparator(a, b, orderBy);
}

function stableSort(array, comparator) {
  const stabilizedThis = array.map((el, index) => [el, index]);
  stabilizedThis.sort((a, b) => {
    const order = comparator(a[0], b[0]);
    if (order !== 0) return order;
    return a[1] - b[1];
  });
  return stabilizedThis.map((el) => el[0]);
}

const headCells = [
  { id: 'id', numeric: false, disablePadding: true, label: 'Id' },
  { id: 'name', numeric: true, disablePadding: false, label: 'Nome' },
  { id: 'address', numeric: true, disablePadding: false, label: 'Endereço' },
  { id: 'number', numeric: true, disablePadding: false, label: 'Numero' },
  { id: 'cpf', numeric: true, disablePadding: false, label: 'CPF' },
  { id: 'view', numeric: true, disablePadding: false, label: 'Ver' },
  { id: 'trash', numeric: true, disablePadding: false, label: '' },

];

function EnhancedTableHead(props) {
  const { classes, onSelectAllClick, order, orderBy, numSelected, rowCount, onRequestSort } = props;
  const createSortHandler = (property) => (event) => {
    onRequestSort(event, property);
  };

  return (
    <TableHead>
      <TableRow>
        <TableCell padding="checkbox">

        </TableCell>
        {headCells.map((headCell) => (
          <TableCell
            key={headCell.id}
            align={headCell.numeric ? 'right' : 'left'}
            padding={headCell.disablePadding ? 'none' : 'default'}
            sortDirection={orderBy === headCell.id ? order : false}
          >
            <TableSortLabel
              active={orderBy === headCell.id}
              direction={orderBy === headCell.id ? order : 'asc'}
              onClick={createSortHandler(headCell.id)}
            >
              {headCell.label}
              {orderBy === headCell.id ? (
                <span className={classes.visuallyHidden}>
                  {order === 'desc' ? 'sorted descending' : 'sorted ascending'}
                </span>
              ) : null}
            </TableSortLabel>
          </TableCell>
        ))}
      </TableRow>
    </TableHead>
  );
}

EnhancedTableHead.propTypes = {
  classes: PropTypes.object.isRequired,
  numSelected: PropTypes.number.isRequired,
  onRequestSort: PropTypes.func.isRequired,
  onSelectAllClick: PropTypes.func.isRequired,
  order: PropTypes.oneOf(['asc', 'desc']).isRequired,
  orderBy: PropTypes.string.isRequired,
  rowCount: PropTypes.number.isRequired,
};

const useToolbarStyles = makeStyles((theme) => ({
  root: {
    paddingLeft: theme.spacing(2),
    paddingRight: theme.spacing(1),
  },
  highlight:
    theme.palette.type === 'light'
      ? {
        color: theme.palette.secondary.main,
        backgroundColor: lighten(theme.palette.secondary.light, 0.85),
      }
      : {
        color: theme.palette.text.primary,
        backgroundColor: theme.palette.secondary.dark,
      },
  title: {
    flex: '1 1 100%',
  },
}));

const [isOpen, setIsOpen] = useState(false)

const EnhancedTableToolbar = (props) => {
  const classes = useToolbarStyles();
  const { numSelected } = props;


  return (
    <Toolbar
      className={clsx(classes.root, {
        [classes.highlight]: numSelected > 0,
      })}
    >

      <Typography className={classes.title} variant="h6" id="tableTitle" component="div">
        Funcionarios
      </Typography>

      <Tooltip title="add" >
        <button onClick={() => setIsOpen(true)}
          style={{backgroundColor:'transparent', width:'auto', height:'auto'}}> 
          <FontAwesomeIcon className="iconCircle" icon={faPlusCircle} size="lg" color="#1C1C2D" /> 
        </button>

        
      </Tooltip>

    </Toolbar>
  );
};

EnhancedTableToolbar.propTypes = {
  numSelected: PropTypes.number.isRequired,
};

const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
  },
  paper: {
    width: '100%',
    marginBottom: theme.spacing(2),
  },
  table: {
    minWidth: 750,
  },
  visuallyHidden: {
    border: 0,
    clip: 'rect(0 0 0 0)',
    height: 1,
    margin: -1,
    overflow: 'hidden',
    padding: 0,
    position: 'absolute',
    top: 20,
    width: 1,
  },
}));



  const [employees, setEmployees] = useState([])

  useEffect(() => {
    api.get('funcionario').then(response => {
      setEmployees(response.data)
    })
  }, [])


  const classes = useStyles();
  const [order, setOrder] = React.useState('asc');
  const [orderBy, setOrderBy] = React.useState('calories');
  const [selected, setSelected] = React.useState([]);
  const [page, setPage] = React.useState(0);
  //   const [dense, setDense] = React.useState(false);

  const rowsPerPage = 8

  const handleRequestSort = (event, property) => {
    const isAsc = orderBy === property && order === 'asc';
    setOrder(isAsc ? 'desc' : 'asc');
    setOrderBy(property);
  };

  let newSelected = [];

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };


  const isSelected = (name) => selected.indexOf(name) !== -1;

  const emptyRows = rowsPerPage - Math.min(rowsPerPage, employees.length - page * rowsPerPage);

  const [isOpenE, setIsOpenE] = useState(false)

  const [dataSel, setDataSel] = useState([])

  const [idEmployee, setIdEmployee] = useState()

  const [isOpenAD, setIsOpenAD] = useState(false)

  const handleEmployeeSel = (open, dataSel) =>{
    setDataSel(dataSel)
    setIsOpenE(open)
  }

  const handleOpenAlert = (open, idEmployee) => {
    setIsOpenAD(open)
    setIdEmployee(idEmployee)
  }

  return (
    <div className={classes.root}>
      <Paper className={classes.paper}>
        <EnhancedTableToolbar numSelected={selected.length} />
        <TableContainer>
          <Table
            className={classes.table}
            aria-labelledby="tableTitle"
            size={'medium'}
            aria-label="enhanced table"
          >
            <EnhancedTableHead
              classes={classes}
              //   numSelected={selected.length}
              order={order}
              orderBy={orderBy}
              //   onSelectAllClick={handleSelectAllClick}
              onRequestSort={handleRequestSort}
              rowCount={employees.length}
            />
            <TableBody>
              {stableSort(employees, getComparator(order, orderBy))
                .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                .map((employee, index) => {
                  //   const isItemSelected = isSelected(row.name);
                  const labelId = `enhanced-table-checkbox-${index}`;

                  return (
                    <TableRow
                      hover
                      tabIndex={-1}
                      key={employee.id}
                    >
                      <TableCell padding="checkbox">

                      </TableCell>
                      <TableCell component="th" id={labelId} scope="employee" padding="none">
                        {employee.id}
                      </TableCell>
                      <TableCell align="right">{employee.name}</TableCell>
                      <TableCell align="right">{employee.address}</TableCell>
                      <TableCell align="right">{employee.number}</TableCell>
                      <TableCell align="right">{employee.cpf}</TableCell>
                      <TableCell align="right"> 
                        <button onClick={() => handleEmployeeSel(true, employee)}
                        style={{backgroundColor:'transparent', width:'auto', height:'auto'}}> 
                          <FontAwesomeIcon className="iconEye" icon={faEye} size="lg" color="#1C1C2D" /> 
                        </button> 
                      </TableCell>
                      <TableCell align="center">
                          <button onClick={() => handleOpenAlert(true, employee.id)}
                          style={{backgroundColor:'transparent', width:'auto', height:'auto'}}> 
                            <FontAwesomeIcon className="iconTrash" icon={faTrash} size="1x" color="#1C1C2D" /> 
                          </button>
                      </TableCell>

                    </TableRow>
                  );
                })}
             
            </TableBody>
          </Table>
        </TableContainer>
        <TablePagination
          rowsPerPageOptions={8}
          component="div"
          count={employees.length}
          rowsPerPage={rowsPerPage}
          page={page}
          onChangePage={handleChangePage}
        />
      </Paper>


      {
      isOpen ? <ModalEmployee 
      onclose={() => setIsOpen(false)} /> : null
      } 
      {
      isOpenE ? <ModalEmployeeSel 
      onclose={() => setIsOpenE(false)} data={dataSel}/> : null
      } 
      {
      isOpenAD ? <AlertDialogDelete
      onclose={() => setIsOpenAD(false)}
      delete={idEmployee}
      route={`/funcionario/${idEmployee}`}
      subTitle='O cliente será deletado definidamente!'
      /> : null
      }
  
    </div>
  );
}