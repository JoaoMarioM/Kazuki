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
// import Checkbox from '@material-ui/core/Checkbox';
// import IconButton from '@material-ui/core/IconButton';
import Tooltip from '@material-ui/core/Tooltip';
// import FormControlLabel from '@material-ui/core/FormControlLabel';
// import Switch from '@material-ui/core/Switch';
// import DeleteIcon from '@material-ui/icons/Delete';
// import FilterListIcon from '@material-ui/icons/FilterList';

import { Link, useHistory } from 'react-router-dom'

import api from '../../services/api'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEye } from '@fortawesome/free-regular-svg-icons'
import { faPlusCircle, faArrowLeft, faTrash } from '@fortawesome/free-solid-svg-icons'

import Modal from '../modal/clientCad'
import ModalClientSel from '../modal/clientSel'

import AlertDialogDelete from '../dialog/dialogDelete'

import SnackSuccess from '../../Components/snackBar/success'

export default function TableFinancial() {

  const [isOpenS, setIsOpenS] = useState(false)
  const [isOpenAD, setIsOpenAD] = useState(false)

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
  { id: 'type', numeric: true, disablePadding: false, label: 'Tipo' },
  { id: 'date', numeric: true, disablePadding: false, label: 'Data de vencimento' },
  { id: 'value', numeric: true, disablePadding: false, label: 'Valor' },
  // { id: 'view', numeric: true, disablePadding: false, label: 'Ver' },
  // { id: 'trash', numeric: true, disablePadding: false, label: 'Excluir' },
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
            align='center'
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
const [isOpenSel, setIsOpenSel] = useState(false)
const [dataSel, setDataSel] = useState([])

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
        Contas a pagar
      </Typography>

      <Tooltip title="Back">
        <Link to="/dash"
          style={{backgroundColor:'transparent', width:'auto', height:'auto', marginRight:15, marginTop:10}}>
           <FontAwesomeIcon icon={faArrowLeft} size="lg" color="#1C1C2D"/>
        </Link>
      </Tooltip>

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



  const [clients, setClients] = useState([])
  // const [isOpen, setIsOpen] = useState(false)

  useEffect(() => {
    api.get('clientes').then(response => {
      setClients(response.data)
    })
  }, [])


  const classes = useStyles();
  const [order, setOrder] = React.useState('asc');
  const [orderBy, setOrderBy] = React.useState('calories');
  const [selected, setSelected] = React.useState([]);
  const [page, setPage] = React.useState(0);
  //   const [dense, setDense] = React.useState(false);

  const rowsPerPage = 7

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

  const handleModal = (isOpen, data) => {
    setIsOpenSel(isOpen)
    setDataSel(data)
  };

  const [idClient, setIdClient] = useState()

  const handleOpenAlert = (open, idClient) => {
    setIsOpenAD(open)
    setIdClient(idClient)
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
              rowCount={clients.length}
            />
            <TableBody>
              {stableSort(clients, getComparator(order, orderBy))
                .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                .map((client, index) => {
                  //   const isItemSelected = isSelected(row.name);
                  const labelId = `enhanced-table-checkbox-${index}`;

                  return (
                    <TableRow
                      hover
                      tabIndex={-1}
                      key={client.id}
                    >
                      <TableCell padding="checkbox">

                      </TableCell>
                      <TableCell component="th" id={labelId} scope="client" padding="none" align="center">
                        {client.id}
                      </TableCell>
                      <TableCell align="center">{client.name}</TableCell>
                      <TableCell align="center">{client.address}</TableCell>
                      <TableCell align="center">{client.number}</TableCell>
                      {/* <TableCell align="center">
                        <button onClick={() => handleModal(true, client)}
                        style={{backgroundColor:'transparent', width:'auto', height:'auto'}}
                        > 
                        <FontAwesomeIcon className="iconEye" icon={faEye} size="lg" color="#1C1C2D" />
                        </button> 
                      </TableCell>
                      <TableCell align="center">
                          <button onClick={() => handleOpenAlert(true, client.id)}
                          style={{backgroundColor:'transparent', width:'auto', height:'auto'}}> 
                            <FontAwesomeIcon className="iconEye" icon={faTrash} size="1x" color="#1C1C2D" /> 
                          </button>
                      </TableCell> */}

                    </TableRow>
                  );
                })}
             
            </TableBody>
          </Table>
        </TableContainer>
        <TablePagination
          rowsPerPageOptions={8}
          component="div"
          count={clients.length}
          rowsPerPage={rowsPerPage}
          page={page}
          onChangePage={handleChangePage}
        />
      </Paper>
      

      {
      isOpen ? <Modal 
      onclose={() => setIsOpen(false)} /> : null
      } 

      {
      isOpenSel ? <ModalClientSel 
      onclose={() => setIsOpenSel(false)} data={dataSel} /> : null
      } 

      {
      isOpenS ? <SnackSuccess 
      onclose={() => setIsOpenS(false)} title="Contrato deletado com sucesso!"/> : null
      }

      {
      isOpenAD ? <AlertDialogDelete
      onclose={() => setIsOpenAD(false)}
      delete={idClient}
      route={`/clientes/${idClient}`}
      subTitle='O cliente será deletado definidamente!'
      /> : null
      }
  
    </div>
  );
}