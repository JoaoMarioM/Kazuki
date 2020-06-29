import React, {useState, useEffect} from 'react';
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

import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faEye} from '@fortawesome/free-regular-svg-icons'
import {faPlusCircle, faArrowLeft, faTrash} from '@fortawesome/free-solid-svg-icons'

import SnackSuccess from '../../Components/snackBar/success'

import AlertDialogDelete from '../dialog/dialogDelete'


export default function TableCont(props) {

  const [isOpenS, setIsOpenS] = useState(false)
  const [isOpenAD, setIsOpenAD] = useState(false)

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
  { id: 'id', disablePadding: true, label: 'Id' },
  { id: 'name', disablePadding: false, label: 'Nome' },
  { id: 'address', disablePadding: false, label: 'Data de ativação' },
  { id: 'number', disablePadding: false, label: 'Técnico responsavel' },
  { id: 'cpf', disablePadding: false, label: 'Valor' },
  { id: 'view', disablePadding: false, label: 'Ver' },
  { id: 'trash', disablePadding: false, label: '' },
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
            align="left"
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

const EnhancedTableToolbar = (props) => {
  const classes = useToolbarStyles();
  const { numSelected } = props;

  const handleNewCont = (id) =>{
    history.push('/clienteNewCont', {idClient: id})
    
  }

  return (
    <Toolbar
      className={clsx(classes.root, {
        [classes.highlight]: numSelected > 0,
      })}
    >
     
        <Typography className={classes.title} variant="h6" id="tableTitle" component="div">
          Contratos
        </Typography>
      
        <Tooltip title="Back">
        <Link to="/clientes"
          style={{backgroundColor:'transparent', width:'auto', height:'auto', marginRight:15, marginTop:10}}>
           <FontAwesomeIcon icon={faArrowLeft} size="lg" color="#1C1C2D"/>
        </Link>
      </Tooltip>

        <Tooltip title="add">
          <button onClick={() => handleNewCont(clientId)}
          style={{backgroundColor:'transparent', width:'auto', height:'auto'}}>
            <FontAwesomeIcon icon={faPlusCircle} size="lg" color="#333"/>
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

  const clientId = props.idClient

  // console.log(clientId)
  const [contracts, setContract] = useState([])

  useEffect(() => {
    api.get('profileContract', {
      headers:{
        Authorization: clientId ,
      }
    }).then(response => {
      setContract(response.data)
    })
  }, [clientId])

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

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

//   const handleChangeRowsPerPage = (event) => {
//     setRowsPerPage(parseInt(event.target.value, 10));
//     setPage(0);
//   };

//   const handleChangeDense = (event) => {
//     setDense(event.target.checked);
//   };

  const isSelected = (name) => selected.indexOf(name) !== -1;

  // const [dataCont, setDataCont] = useState([])

   const history = useHistory()


  const handleCont = (data) =>{
    history.push('/clienteContV', {idCo: data})
    
  }


  const [idContract, setIdContract] = useState([])

  const handleOpenAlert = (open, idContract) => {
    setIsOpenAD(open)
    setIdContract(idContract)
  }

  return (
    <div className={classes.root}>
      <Paper className={classes.paper}>
        <EnhancedTableToolbar numSelected={selected.length} />
        <TableContainer>
          <Table
            className={classes.table}
            aria-labelledby="tableTitle"
            size={ 'medium'}
            aria-label="enhanced table"
          >
            <EnhancedTableHead
              classes={classes}
            //   numSelected={selected.length}
              order={order}
              orderBy={orderBy}
            //   onSelectAllClick={handleSelectAllClick}
              onRequestSort={handleRequestSort}
              rowCount={contracts.length}
            />
            <TableBody>
              {stableSort(contracts, getComparator(order, orderBy))
                .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                .map((contract, index) => {
                //   const isItemSelected = isSelected(row.name);
                  const labelId = `enhanced-table-checkbox-${index}`;

                  return (
                    <TableRow
                      hover
                    //   onClick={(event) => handleClick(event, row.name)}
                    //   aria-checked={isItemSelected}
                      tabIndex={-1}
                      key={contract.id}
                    //   selected={isItemSelected}
                    >
                      <TableCell padding="checkbox">
                    
                      </TableCell>
                      <TableCell component="th" id={labelId} scope="row" padding="none">
                        {contract.id}
                      </TableCell>
                      <TableCell align="left">{contract.name}</TableCell>
                      <TableCell align="left">{contract.startDate}</TableCell>
                      <TableCell align="left">{contract.responsibleTechnician}</TableCell>
                      <TableCell align="left">
                        {Intl.NumberFormat('pt-BR', {style:'currency', currency: 'BRL'}).format(contract.value)}
                      </TableCell>
                      <TableCell align="left">
                          <button onClick={() => handleCont(contract)}
                          style={{backgroundColor:'transparent', width:'auto', height:'auto'}}> 
                            <FontAwesomeIcon className="iconEye" icon={faEye} size="lg" color="#1C1C2D" /> 
                          </button>
                      </TableCell>
                      <TableCell align="left">
                          <button onClick={() => handleOpenAlert(true, contract.id)}
                          style={{backgroundColor:'transparent', width:'auto', height:'auto'}}> 
                            <FontAwesomeIcon className="iconEye" icon={faTrash} size="1x" color="#1C1C2D" /> 
                          </button>
                      </TableCell>
                    </TableRow>
                  );
                })}
              {/* {emptyRows > 0 && (
                <TableRow style={{ height: (dense ? 33 : 53) * emptyRows }}>
                  <TableCell colSpan={6} />
                </TableRow>
              )} */}
            </TableBody>
          </Table>
        </TableContainer>
        <TablePagination
          rowsPerPageOptions={8}
          component="div"
          count={contracts.length}
          rowsPerPage={rowsPerPage}
          page={page}
          onChangePage={handleChangePage}
        //   onChangeRowsPerPage={8}
        />
      </Paper>
      
      {
      isOpenS ? <SnackSuccess 
      onclose={() => setIsOpenS(false)} 
      title="Contrato deletado com sucesso!"
      /> : null
      }
      {
      isOpenAD ? <AlertDialogDelete
      onclose={() => setIsOpenAD(false)}
      delete={idContract}
      route={`/contratos/${idContract}`}
      subTitle='O contrato será deletado definidamente!'
      /> : null
      }
    </div>
  );
}

