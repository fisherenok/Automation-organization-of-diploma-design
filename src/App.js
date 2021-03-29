import React, { useState } from 'react';
import Protocol from './Protocol';
import Commission from './Commission';
import SignIn from './SignIn'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import SignUp from "./SignUp";
import Students from "./Students";
import ProtectedList from "./ProtectedList";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
}));

const App = () => {
  const classes = useStyles();
  const startTime = {
    stH: new Date().getHours(),
    stM: new Date().getMinutes(),
  };

  const initials = (value) => {
    if (value) return value.split(/\s+/).map((w,i) => i ? w.substring(0,1).toUpperCase() + '.' : w).join(' ');
    return null;
  };

  const [state, setState] = useState({
    chairman: localStorage.getItem('chairman') || '',
    secretary: initials(localStorage.getItem('secretary')) || '',
    firstMember: initials(localStorage.getItem('firstMember')) || '',
    secondMember: initials(localStorage.getItem('secondMember')) || '',
    thirdMember: initials(localStorage.getItem('thirdMember')) || '',
    fourthMember: initials(localStorage.getItem('fourthMember')) || '',
    fifthMember: initials(localStorage.getItem('fifthMember')) || '',
    sixthMember: initials(localStorage.getItem('sixthMember')) || '',
    seventhMember: initials(localStorage.getItem('seventhMember')) || '',
    eighthMember: initials(localStorage.getItem('eighthMember')) || '',
    ninthMember: initials(localStorage.getItem('ninthMember')) || '',
    tenthMember: initials(localStorage.getItem('tenthMember')) || '',
    fullName: localStorage.getItem('fullName') || '',
    themeDiplom: localStorage.getItem('themeDiplom') || '',
    diplomaPage: localStorage.getItem('diplomaPage') || '',
    diplomaMaterialPage: localStorage.getItem('diplomaMaterialPage') || '',
    reviewerMark: localStorage.getItem('reviewerMark') || '',
    reviewer: localStorage.getItem('reviewer') || '',
    answer: localStorage.getItem('answer') || '',
    training: localStorage.getItem('training') || '',
    trainingDop: localStorage.getItem('trainingDop') || '',
    mark: localStorage.getItem('mark') || '',
    noteThat: localStorage.getItem('noteThat') || '',
    opinion: localStorage.getItem('opinion') || '',
    outputMark: localStorage.getItem('outputMark') || '',
    headOfDiploma: localStorage.getItem('headOfDiploma') || '',
    diplomaConsultants: localStorage.getItem('diplomaConsultants') || '',
    question1: localStorage.getItem('question1') || '',
    qperson1: localStorage.getItem('qperson1') || '',
    question2: localStorage.getItem('question2') || '',
    qperson2: localStorage.getItem('qperson2') || '',
    question3: localStorage.getItem('question3') || '',
    qperson3: localStorage.getItem('qperson3') || '',
    question4: localStorage.getItem('question4') || '',
    qperson4: localStorage.getItem('qperson4') || '',
    question5: localStorage.getItem('question5') || '',
    qperson5: localStorage.getItem('qperson5') || '',
    question6: localStorage.getItem('question6') || '',
    qperson6: localStorage.getItem('qperson6') || '',
    num: localStorage.getItem('num') || '',
  });

  const changeInfo = (key, value) => {
    setState(state => ({...state, [key]: value}));
    localStorage.setItem(key, value);
  };

  const isLogged = localStorage.getItem('isLogged') === 'true';

  const handleLogout = () => {
    localStorage.setItem('isLogged', 'false');
    window.location.reload()
  };

  const handleToProtocol = (data) => {
    localStorage.setItem('fullName', data.fullNameStudent || '');
    localStorage.setItem('reviewer', data.reviewer || '');
    localStorage.setItem('themeDiplom', data.themeDiplom || '');
    localStorage.setItem('headOfDiploma', data.headOfDiploma || '');
    localStorage.setItem('diplomaConsultants', data.diplomaConsultants || '');
  };

  const createData = (numberStudCard, fullNameStudent, formEducation, distributionStatus, company, reviewer,
                      headOfDiploma, diplomaConsultants, themeDiplom) => {
    return { numberStudCard, fullNameStudent, formEducation, distributionStatus,
      company, reviewer, headOfDiploma, diplomaConsultants, themeDiplom };
  };

  const handleChange= (e) => {
    const value = e?.target.value;
    const fieldName = e?.target.name;
    if (fieldName) {
      switch (fieldName) {
        case 'chairman': return changeInfo(fieldName, value);
        case 'secretary': return changeInfo(fieldName, value);
        case 'firstMember': return changeInfo(fieldName, value);
        case 'secondMember': return changeInfo(fieldName, value);
        case 'thirdMember': return changeInfo(fieldName, value);
        case 'fourthMember': return changeInfo(fieldName, value);
        case 'fifthMember': return changeInfo(fieldName, value);
        case 'sixthMember': return changeInfo(fieldName, value);
        case 'seventhMember': return changeInfo(fieldName, value);
        case 'eighthMember': return changeInfo(fieldName, value);
        case 'ninthMember': return changeInfo(fieldName, value);
        case 'tenthMember': return changeInfo(fieldName, value);
        case 'fullName': return changeInfo(fieldName, value);
        case 'themeDiplom': return changeInfo(fieldName, value);
        case 'diplomaPage': return changeInfo(fieldName, value);
        case 'diplomaMaterialPage': return changeInfo(fieldName, value);
        case 'reviewerMark': return changeInfo(fieldName, value);
        case 'reviewer': return changeInfo(fieldName, value);
        case 'answer': return changeInfo(fieldName, value);
        case 'training': return changeInfo(fieldName, value);
        case 'trainingDop': return changeInfo(fieldName, value);
        case 'mark': return changeInfo(fieldName, value);
        case 'noteThat': return changeInfo(fieldName, value);
        case 'opinion': return changeInfo(fieldName, value);
        case 'outputMark': return changeInfo(fieldName, value);
        case 'headOfDiploma': return changeInfo(fieldName, value);
        case 'diplomaConsultants': return changeInfo(fieldName, value);
        case 'question1': return changeInfo(fieldName, value);
        case 'qperson1': return changeInfo(fieldName, value);
        case 'question2': return changeInfo(fieldName, value);
        case 'qperson2': return changeInfo(fieldName, value);
        case 'question3': return changeInfo(fieldName, value);
        case 'qperson3': return changeInfo(fieldName, value);
        case 'question4': return changeInfo(fieldName, value);
        case 'qperson4': return changeInfo(fieldName, value);
        case 'question5': return changeInfo(fieldName, value);
        case 'qperson5': return changeInfo(fieldName, value);
        case 'question6': return changeInfo(fieldName, value);
        case 'qperson6': return changeInfo(fieldName, value);
        case 'num': return changeInfo(fieldName, value);
        default: return null;
      }
    }
  };

  return (
    <Router>
      <div className="App">
        <AppBar position="static">
          <Toolbar>
            <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
              <MenuIcon onClick={() => window.location.reload()} />
            </IconButton>
            {isLogged && <Link className="Link" to="/students">Students</Link>}

            {isLogged && <Link className="Link" to="/commission">Commission</Link>}

            {isLogged && <Link className="Link" to="/protectedList">Protected</Link>}

            {!isLogged && <Link className="SignIn Link" to="/">SignIn</Link>}

            {!isLogged && <Link className="SignIn Link" to="/signUp">SignUp</Link>}

            {isLogged && <Link onClick={handleLogout} className="Logout Link" to="/">Logout</Link>}
          </Toolbar>
        </AppBar>

        <Switch>
          {isLogged && (
            <Route exact path="/students">
              <Students initials={initials} createData={createData} handleToProtocol={handleToProtocol} />
            </Route>
          )}

          {!isLogged && (
            <Route path="/signUp">
              <SignUp />
            </Route>
          )}

          {isLogged && (
            <Route path="/commission">
              <Commission state={state} handleChange={handleChange} />
            </Route>
          )}

          {isLogged && (
            <Route path="/protocol">
              <Protocol startTime={startTime} state={state} handleChange={handleChange} initials={initials} />
            </Route>
          )}

          {isLogged && (
            <Route path="/protectedList">
              <ProtectedList initials={initials} state={state} createData={createData} handleToProtocol={handleToProtocol} />
            </Route>
          )}

          {!isLogged && (
          <Route path="/">
            <SignIn />
          </Route>
          )}

        </Switch>
      </div>
    </Router>
  );
};

function Home() {
  return <h2>Home</h2>;
}

export default App;
