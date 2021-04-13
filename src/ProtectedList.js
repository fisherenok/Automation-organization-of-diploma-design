import React, {useState} from 'react';
import Button from "@material-ui/core/Button";
import { withStyles, makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import ClearIcon from '@material-ui/icons/Clear';
import Grid from "@material-ui/core/Grid";
import DateFnsUtils from '@date-io/date-fns';
import {
  MuiPickersUtilsProvider,
  KeyboardDatePicker,
} from '@material-ui/pickers';
import GenerateDocumentProtected from "./GenerateDocumentProtected";

const StyledTableCell = withStyles((theme) => ({
  head: {
    backgroundColor: '#3f51b5',
    color: theme.palette.common.white,
  },
  body: {
    fontSize: 14,
  },
}))(TableCell);

const useStyles = makeStyles({
  table: {
    minWidth: 650,
  },
});

const ProtectedList = (props) => {
  const { createData, handleToProtocol, state } = props;
  const protectionStudents = JSON.parse(localStorage.getItem('protection')) || [];
  const [arrProtection, setArrProtection] = useState(protectionStudents);
  const shouldShowProtection = !!arrProtection.length ? true : false;
  const [selectedDate, setSelectedDate] = React.useState(new Date());
  const [documentInputName, setDocumentInputName] = useState('');
  const [documentValue, setDocumentValue] = useState('');
  const fileName = shouldShowProtection ? `Upload file, count of students: ${arrProtection?.length}` : 'Add students for Protected List';
  const colorButtonUpload = documentInputName ? 'primary' :  'default';
  const dd = ('0' + selectedDate.getDate()).slice(-2);
  const mm = ('0' + (selectedDate.getMonth() + 1)).slice(-2);
  const date = `${dd}.${mm}.${selectedDate.getFullYear()}`;

  const handleDocumentValue = (e) => {
    setDocumentInputName(`${e.target.value.replace(/^.*[\\\/]/, '')}`);
    setDocumentValue(e.target);
  };

  const handleGenerateDocument = () => {
    const allStudents =  arrProtection.map((student, i) => ({ ...student, num: i + 1 }));
    const result = { chairman: state.chairman, secretary: state.secretary };
    GenerateDocumentProtected({ date, documentValue, result, allStudents });
  };

  const handleDeleteFromProtection = (data) => {
    const result = protectionStudents.filter((item) => data.numberStudCard !== item.numberStudCard);
    setArrProtection(result);
    localStorage.setItem('protection', JSON.stringify([...new Set(result)]));
  };

  const handleDateChange = (date) => setSelectedDate(date);

  const rows = [
    ...arrProtection?.map(i => createData(
      i.numberStudCard, i.fullNameStudent, i.formEducation, i.distributionStatus, i.company, i.reviewer,
      i.headOfDiploma, i.diplomaConsultants, i.themeDiplom))
  ];

  const renderUploadButton = () => {
    return (
      <Button
        disabled={!shouldShowProtection}
        onChange={handleDocumentValue}
        variant="contained"
        color={colorButtonUpload}
        component="label"
        style={{ margin: '20px 0 0 80px', padding: '10px 12px' }}
      >
        {fileName}
        <input
          required
          type="file"
          style={{ display: "none" }}
        />
      </Button>
    );
  };

  const classes = useStyles();
  return (
    <div className="ProtectedList">
      <div className='DatePicker'>
        <MuiPickersUtilsProvider utils={DateFnsUtils}>
            <KeyboardDatePicker
              margin="normal"
              id="date-picker-dialog"
              label="Click for choose date"
              format="dd.MM.yyyy"
              value={selectedDate}
              onChange={handleDateChange}
              KeyboardButtonProps={{
                'aria-label': 'change date',
              }}
            />
        </MuiPickersUtilsProvider>
        <Grid item xs={12} sm={6}>
          {!documentInputName && renderUploadButton('0')}
          {documentInputName && (
            <Button
              onClick={handleGenerateDocument}
              variant="contained"
              color="primary"
              style={{ margin: '20px 0 0 80px', padding: '10px 12px' }}
            >
              Download
            </Button>
          )}
        </Grid>
      </div>
      <div className='ProtectedTable'>
        {shouldShowProtection && (
          <TableContainer key={arrProtection} style={{ marginTop: '-230px' }} component={Paper}>
            <Table className={classes.table} aria-label="simple table">
              <TableHead>
                <TableRow>
                  <StyledTableCell style={{ width: '1px' }}>Delete</StyledTableCell>
                  <StyledTableCell style={{ width: '120px' }}>Number Card</StyledTableCell>
                  <StyledTableCell style={{ width: '270px' }} align="left">Full name of Students</StyledTableCell>
                  <StyledTableCell style={{ width: '140px' }} align="left">Form education</StyledTableCell>
                  <StyledTableCell style={{ width: '150px' }} align="left">Distribution status</StyledTableCell>
                  <StyledTableCell style={{ width: '170px' }} align="left">Reviewer</StyledTableCell>
                  <StyledTableCell  align="left">Company</StyledTableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {rows.map((row) => (
                  <TableRow key={row.numberStudCard}>
                    <TableCell>
                      <ClearIcon
                        onClick={() => handleDeleteFromProtection(row)}
                        className="ClearIcon"
                      />
                    </TableCell>
                    <TableCell component="th" scope="row">
                      {row.numberStudCard}
                    </TableCell>
                    <TableCell onClick={() => handleToProtocol(row)} align="left">
                      <a
                        className="FullName"
                        href="/protocol"
                      >
                        {row.fullNameStudent}
                      </a>
                    </TableCell>
                    <TableCell align="left">{row.formEducation}</TableCell>
                    <TableCell align="left">{row.distributionStatus}</TableCell>
                    <TableCell align="left">{row.reviewer}</TableCell>
                    <TableCell align="left">{row.company}</TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
        )}
      </div>
    </div>
  );
};

export default ProtectedList;
