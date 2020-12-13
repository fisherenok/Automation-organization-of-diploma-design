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
import XLSX from 'xlsx';
import AddIcon from '@material-ui/icons/Add';
import ClearIcon from '@material-ui/icons/Clear';
import TextField from "@material-ui/core/TextField/TextField";
import Grid from "@material-ui/core/Grid";

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

const Students = (props) => {
  const { initials, createData, handleToProtocol } = props;
  const [countOfStudents, setCountOfStudents] = useState(0);
  const [numberGroup, setNumberGroup] = useState(721701);
  const [allStudentsValue, setAllStudentsValue] = useState([]);
  const [shouldDisplayProtection, setDisplayProtection] = useState(false);
  const groups = JSON.parse(localStorage.getItem('groups'));
  const protectionStudents = JSON.parse(localStorage.getItem('protection'));
  const [arrProtection, setArrProtection] = useState(protectionStudents);

  const handleLoadSelectGroup = (e) => {
    const selectGroup = e.target.textContent;
    setAllStudentsValue(JSON.parse(localStorage.getItem(selectGroup)))
  };

  const handleChangeDisplayProtection = () => setDisplayProtection(!shouldDisplayProtection);

  const handleAddToProtection = (data) => {
    const items = localStorage.getItem('protection')?.length
      ? [...JSON.parse(localStorage.getItem('protection')), data]
      : [data];
    setArrProtection(items);
    localStorage.setItem('protection', JSON.stringify(items));
  };

  const handleDeleteFromProtection = (data) => {
    const result = protectionStudents.filter((item) => data.numberStudCard !== item.numberStudCard);
    setArrProtection(result);
    localStorage.setItem('protection', JSON.stringify([...new Set(result)]));
  };

  const handleFile = (e) => {
    const files = e.target.files, f = files[0];
    const reader = new FileReader();
    reader.onload = function(e) {
      const data = new Uint8Array(e.target.result);
      const workbook = XLSX.read(data, {type: 'array'});
      const value = workbook.Sheets[`${numberGroup}`];
      const maxValue = +countOfStudents + 8;
      const arr = [];
      for (let i = 8; i < maxValue; i++) {
        arr.push({
          numberStudCard: value[`C${i}`]?.h || '',
          fullNameStudent: value[`D${i}`]?.h || '',
          formEducation: value[`E${i}`]?.h || '',
          distributionStatus: value[`F${i}`]?.h || '',
          company: value[`G${i}`]?.h || '',
          reviewer: value[`K${i}`]?.h || '',
          headOfDiploma: value[`I${i}`]?.h || '',
          diplomaConsultants: value[`J${i}`]?.h || '',
          themeDiplom: value[`H${i}`]?.h || '',
        });
      }
      setAllStudentsValue(arr);
      const stateGroups = localStorage.getItem('groups')?.length
        ? [...JSON.parse(localStorage.getItem('groups')), numberGroup]
        : [numberGroup];
      localStorage.setItem('groups', JSON.stringify([...new Set(stateGroups)]));
      localStorage.setItem(`${numberGroup}`, JSON.stringify(arr));
    };
    reader.readAsArrayBuffer(f);
  };

  const rows = [
    ...allStudentsValue?.map(i => createData(
      i.numberStudCard, i.fullNameStudent, i.formEducation, i.distributionStatus, i.company, i.reviewer,
      i.headOfDiploma, i.diplomaConsultants, i.themeDiplom ))
  ];

  const classes = useStyles();

  return (
   <div className="Students">
     {shouldDisplayProtection && (
       <div className='ProtectionPopup'>
         {(arrProtection || []).map((item) => (
           <div className='ProtectionContainer' key={item.numberStudCard}>
             <ClearIcon
               onClick={() => handleDeleteFromProtection(item)}
               className="ClearIcon"
             />
             {item.numberStudCard} {initials(item.fullNameStudent)}
           </div>
         ))}
         {arrProtection && (
             <Button
               variant="contained"
               color="primary"
               component="label"
               style={{ marginLeft: '22%' }}
             >
               <a className="LinkProtectedList" href="/protectedList">Create protected list</a>
             </Button>
         )}
        </div>
     )}
     {allStudentsValue.length ? (
       <TableContainer key={allStudentsValue} style={{ marginTop: '-145px' }} component={Paper}>
         <Table className={classes.table} aria-label="simple table">
           <TableHead>
             <TableRow>
               <StyledTableCell style={{ width: '1px' }}>Add</StyledTableCell>
               <StyledTableCell style={{ width: '120px' }}>Number Card</StyledTableCell>
               <StyledTableCell style={{ width: '270px' }} align="left">Full name of Students</StyledTableCell>
               <StyledTableCell style={{ width: '140px' }} align="left">Form education</StyledTableCell>
               <StyledTableCell style={{ width: '150px' }} align="left">Distribution status</StyledTableCell>
               <StyledTableCell style={{ width: '170px' }} align="left">Reviewer</StyledTableCell>
               <StyledTableCell  align="left">Company</StyledTableCell>
               <StyledTableCell align="right">
                 <Button
                  onClick={handleChangeDisplayProtection}
                  variant="contained"
                  color="primary"
                  component="label"
                  style={{ border: '2px solid white' }}
                 >
                   {shouldDisplayProtection ? 'Hide Prot. list' : 'Show Prot. list'}
                 </Button>
               </StyledTableCell>
             </TableRow>
           </TableHead>
           <TableBody>
             {rows.map((row) => (
               <TableRow key={row.numberStudCard}>
                 <TableCell>
                   <AddIcon
                     className="AddIcon"
                     onClick={() => handleAddToProtection(row)}
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
                 <TableCell align="left"></TableCell>
               </TableRow>
             ))}
           </TableBody>
         </Table>
       </TableContainer>
     ) : (
       <>
         <Grid container spacing={3}>
           <Grid item xs={12} sm={2}>
             <TextField
               onChange={(e) => setNumberGroup(e.target.value)}
               required
               id="numberGroup"
               name="numberGroup"
               label="Number of Group"
               fullWidth
               autoComplete="group"
             />
           </Grid>
           <Grid item xs={12} sm={2}>
             <TextField
               onChange={(e) => setCountOfStudents(e.target.value)}
               required
               id="countOfStudents"
               name="countOfStudents"
               label="Count of students"
               fullWidth
               autoComplete="countOfStudents"
             />
           </Grid>
         </Grid>
         <Button
           onChange={handleFile}
           variant="contained"
           color="default"
           component="label"
           style={{ margin: '20px 0', padding: '10px 12px' }}
         >
           Upload file with students
           <input
             required
             type="file"
             style={{ display: "none" }}
           />
         </Button>
       </>
     )}
    <div>
      {(groups || []).map(group => {
        return (
          <Button
            key={group}
            onClick={handleLoadSelectGroup}
            variant="contained"
            color="primary"
            component="label"
            style={{ margin: '10px 10px', padding: '10px 12px' }}
          >
            {group}
          </Button>
        )
      })}
    </div>
   </div>
  );
};

export default Students;
