import React, {useState} from 'react';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField';
import GenerateDocument from "./GenerateDocument";
import Button from "@material-ui/core/Button";
import { withStyles } from '@material-ui/core/styles';
import { green } from '@material-ui/core/colors';
import Checkbox from '@material-ui/core/Checkbox';
import FormControlLabel from '@material-ui/core/FormControlLabel';

const GreenCheckbox = withStyles({
  root: {
    color: green[400],
    '&$checked': {
      color: green[600],
    },
  },
  checked: {},
})((props) => <Checkbox color="default" {...props} />);

export default function Protocol(props) {
  const { startTime, state, handleChange, initials } = props;
  const [documentOutputName, setDocumentOutputName] = useState('');
  const [documentInputName, setDocumentInputName] = useState('');
  const [documentValue, setDocumentValue] = useState('');
  const [isChecked, setChecked] = useState(false);
  const [minuteQuestion, setMinuteQuestion] = useState(Date.now());

  const handleChangeMinQuest = () => {
    setChecked(!isChecked);
    if (isChecked === true) {
      const date = Date.now();
      setMinuteQuestion(date);
    }
  };

  const [fullName, setFullName] = useState({
    fullNameOfStudent: localStorage.getItem('fullName') || '',
    ShortNameOfStudent: initials(localStorage.getItem('fullName')) || ''
  });

  const fileName = documentInputName ? `Loaded ${documentInputName}` : 'Upload file';
  const colorButtonUpload = documentInputName ? 'primary' :  'default';

  const handleChangeFullName = (e) => {
    setFullName({
      fullNameOfStudent: e.target.value,
      ShortNameOfStudent: initials(e.target.value)});
  };

  const handleDocumentName = (e) => {
    setDocumentOutputName(e?.target.value);
  };

  const handleDocumentValue = (e) => {
    setDocumentInputName(`${e.target.value.replace(/^.*[\\\/]/, '')}`);
    setDocumentValue(e.target);
  };

  const handleGenerateDocument = () => {
    const result = {
      ...state, ...startTime, ...fullName, minuteQuestion
    };
    GenerateDocument({documentOutputName, documentValue, result});
  };

  const renderUploadButton = (value = '20px 0') => {
    return (
      <Button
        onChange={handleDocumentValue}
        variant="contained"
        color={colorButtonUpload}
        component="label"
        style={{ margin: `${value}`, padding: '10px 12px' }}
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

  return (
    <div className="Protocol">
      <Typography variant="h6" gutterBottom>
        Filling in the document Protocol
      </Typography>
      {renderUploadButton()}
      <Grid container spacing={3}>
        <Grid item xs={12}>
          <TextField
            onChange={handleChangeFullName}
            required
            id="fullName"
            name="fullName"
            label="Full name of student"
            fullWidth
            autoComplete="given-full-name"
            data-shrink="true"
            value={state.fullName}
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            onChange={handleChange}
            required
            id="themeDiplom"
            name="themeDiplom"
            label="Theme diplom"
            fullWidth
            autoComplete="theme-diplom"
            value={state.themeDiplom}
          />
        </Grid>
        <Grid item xs={12} sm={3}>
          <TextField
            onChange={handleChange}
            required
            id="chairman"
            name="chairman"
            label="Chairman"
            fullWidth
            autoComplete="chairman"
            value={initials(state.chairman)}
          />
        </Grid>
        <Grid item xs={12} sm={3}>
          <TextField
            onChange={handleChange}
            required
            id="secretary"
            name="secretary"
            label="Secretary"
            fullWidth
            autoComplete="secretary"
            value={state.secretary}
          />
        </Grid>
        <Grid item xs={12} sm={3}>
          <TextField
            onChange={handleChange}
            required
            id="firstMember"
            name="firstMember"
            label="First member"
            fullWidth
            autoComplete="firstMember"
            value={state.firstMember}
          />
        </Grid>
        <Grid item xs={12} sm={3}>
          <TextField
            onChange={handleChange}
            required
            id="secondMember"
            name="secondMember"
            label="Second member"
            fullWidth
            autoComplete="secondMember"
            value={state.secondMember}
          />
        </Grid>
        <Grid item xs={12} sm={3}>
          <TextField
            onChange={handleChange}
            required
            id="thirdMember"
            name="thirdMember"
            label="Third member"
            fullWidth
            autoComplete="thirdMember"
            value={state.thirdMember}
          />
        </Grid>
        <Grid item xs={12} sm={3}>
          <TextField
            onChange={handleChange}
            required
            id="fourthMember"
            name="fourthMember"
            label="Fourth member"
            fullWidth
            autoComplete="fourthMember"
            value={state.fourthMember}
          />
        </Grid>
        <Grid item xs={12} sm={3}>
          <TextField
            onChange={handleChange}
            required
            id="fifthMember"
            name="fifthMember"
            label="Fifth Member"
            fullWidth
            autoComplete="fifthMember"
            value={state.fifthMember}
          />
        </Grid>
        <Grid item xs={12} sm={3}>
          <TextField
            onChange={handleChange}
            required
            id="sixthMember"
            name="sixthMember"
            label="Sixth member"
            fullWidth
            autoComplete="sixthMember"
            value={state.sixthMember}
          />
        </Grid>
        <Grid item xs={12} sm={3}>
          <TextField
            onChange={handleChange}
            required
            id="seventhMember"
            name="seventhMember"
            label="Seventh member"
            fullWidth
            autoComplete="seventhMember"
            value={state.seventhMember}
          />
        </Grid>
        <Grid item xs={12} sm={3}>
          <TextField
            onChange={handleChange}
            required
            id="eighthMember"
            name="eighthMember"
            label="Eighth member"
            fullWidth
            autoComplete="eighthMember"
            value={state.eighthMember}
          />
        </Grid>
        <Grid item xs={12} sm={3}>
          <TextField
            onChange={handleChange}
            required
            id="ninthMember"
            name="ninthMember"
            label="Ninth member"
            fullWidth
            autoComplete="ninthMember"
            value={state.ninthMember}
          />
        </Grid>
        <Grid item xs={12} sm={3}>
          <TextField
            onChange={handleChange}
            required
            id="tenthMember"
            name="tenthMember"
            label="Tenth member"
            fullWidth
            autoComplete="tenthMember"
            value={state.tenthMember}
          />
        </Grid>
        <Grid item xs={12} sm={5}>
          <TextField
            onChange={handleChange}
            required
            id="headOfDiploma"
            name="headOfDiploma"
            label="Head of diploma"
            fullWidth
            autoComplete="headOfDiploma"
            value={state.headOfDiploma}
          />
        </Grid>
        <Grid item xs={12} sm={3}>
          <TextField
            onChange={handleChange}
            required
            id="diplomaConsultants"
            name="diplomaConsultants"
            label="Diploma consultants"
            fullWidth
            autoComplete="diplomaConsultants"
            value={state.diplomaConsultants}
          />
        </Grid>
        <Grid item xs={12} sm={2}>
          <TextField
            onChange={handleChange}
            required
            id="diplomaPage"
            name="diplomaPage"
            label="All page"
            autoComplete="diplomaPage"
            fullWidth
            value={state.diplomaPage}
          />
        </Grid>
        <Grid item xs={12} sm={2}>
          <TextField
            onChange={handleChange}
            required
            id="diplomaMaterialPage"
            name="diplomaMaterialPage"
            label="Material page"
            autoComplete="diplomaMaterialPage"
            fullWidth
            value={state.diplomaMaterialPage}
          />
        </Grid>
        <Grid item xs={12} sm={3}>
          <TextField
            onChange={handleChange}
            required
            id="reviewerMark"
            name="reviewerMark"
            label="Reviewer mark"
            autoComplete="reviewerMark"
            fullWidth
            value={state.reviewerMark}
          />
        </Grid>
        <Grid item xs={12} sm={7}>
          <TextField
            onChange={handleChange}
            required
            id="reviewer"
            name="reviewer"
            label="Reviewer"
            autoComplete="reviewer"
            fullWidth
            value={state.reviewer}
          />
        </Grid>
        <Grid item xs={12} sm={2}>
          {/*<TextField*/}
          {/*  onChange={handleChange}*/}
          {/*  required*/}
          {/*  id="minuteQuestion"*/}
          {/*  name="minuteQuestion"*/}
          {/*  label="Min quest"*/}
          {/*  autoComplete="minuteQuestion"*/}
          {/*  fullWidth*/}
          {/*  value={state.minuteQuestion}*/}
          {/*/>*/}
          <FormControlLabel
            style={{ margin: '18px 0 0 -10px' }}
            control={<GreenCheckbox checked={isChecked} onChange={handleChangeMinQuest} name="checkedG" />}
            label="Click if start question"
            name="minuteQuestion"
            value={minuteQuestion}
          />
        </Grid>

        <Grid item xs={12} sm={3}>
          <TextField
            onChange={handleChange}
            required
            id="qperson1"
            name="qperson1"
            label="Who ask question"
            autoComplete="qperson1"
            fullWidth
            value={state.qperson1}
          />
        </Grid>
        <Grid item xs={12} sm={9}>
          <TextField
            onChange={handleChange}
            required
            id="question1"
            name="question1"
            label="First question"
            autoComplete="question1"
            fullWidth
            value={state.question1}
          />
        </Grid>

        <Grid item xs={12} sm={3}>
          <TextField
            onChange={handleChange}
            required
            id="qperson2"
            name="qperson2"
            label="Who ask question"
            autoComplete="qperson2"
            fullWidth
            value={state.qperson2}
          />
        </Grid>
        <Grid item xs={12} sm={9}>
          <TextField
            onChange={handleChange}
            required
            id="question2"
            name="question2"
            label="Second question"
            autoComplete="question2"
            fullWidth
            value={state.question2}
          />
        </Grid>

        <Grid item xs={12} sm={3}>
          <TextField
            onChange={handleChange}
            required
            id="qperson3"
            name="qperson3"
            label="Who ask question"
            autoComplete="qperson3"
            fullWidth
            value={state.qperson3}
          />
        </Grid>
        <Grid item xs={12} sm={9}>
          <TextField
            onChange={handleChange}
            required
            id="question3"
            name="question3"
            label="Third question"
            autoComplete="question3"
            fullWidth
            value={state.question3}
          />
        </Grid>

        <Grid item xs={12} sm={3}>
          <TextField
            onChange={handleChange}
            required
            id="qperson4"
            name="qperson4"
            label="Who ask question"
            autoComplete="qperson4"
            fullWidth
            value={state.qperson4}
          />
        </Grid>
        <Grid item xs={12} sm={9}>
          <TextField
            onChange={handleChange}
            required
            id="question4"
            name="question4"
            label="Fourth question"
            autoComplete="question4"
            fullWidth
            value={state.question4}
          />
        </Grid>

        <Grid item xs={12} sm={3}>
          <TextField
            onChange={handleChange}
            required
            id="qperson5"
            name="qperson5"
            label="Who ask question"
            autoComplete="qperson5"
            fullWidth
            value={state.qperson5}
          />
        </Grid>
        <Grid item xs={12} sm={9}>
          <TextField
            onChange={handleChange}
            required
            id="question5"
            name="question5"
            label="Fifth question"
            autoComplete="question5"
            fullWidth
            value={state.question5}
          />
        </Grid>

        <Grid item xs={12} sm={3}>
          <TextField
            onChange={handleChange}
            required
            id="qperson6"
            name="qperson6"
            label="Who ask question"
            autoComplete="qperson6"
            fullWidth
            value={state.qperson6}
          />
        </Grid>
        <Grid item xs={12} sm={9}>
          <TextField
            onChange={handleChange}
            required
            id="question6"
            name="question6"
            label="Sixth question"
            autoComplete="question6"
            fullWidth
            value={state.question6}
          />
        </Grid>

        <Grid item xs={12} sm={12}>
          <TextField
            onChange={handleChange}
            required
            id="answer"
            name="answer"
            label="General characteristics of the performance"
            autoComplete="answer"
            fullWidth
            value={state.answer}
          />
        </Grid>

        <Grid item xs={12} sm={7}>
          <TextField
            onChange={handleChange}
            required
            id="training"
            name="training"
            label="Marks during training"
            autoComplete="training"
            fullWidth
            value={state.training}
          />
        </Grid>
        <Grid item xs={12} sm={5}>
          <TextField
            onChange={handleChange}
            required
            id="trainingDop"
            name="trainingDop"
            label="Additional marks during training"
            autoComplete="trainingDop"
            fullWidth
            value={state.trainingDop}
          />
        </Grid>

        <Grid item xs={12} sm={6}>
          <TextField
            onChange={handleChange}
            required
            id="mark"
            name="mark"
            label="Defended his thesis project with a mark"
            autoComplete="mark"
            fullWidth
            value={state.mark}
          />
        </Grid>

        <Grid item xs={12} sm={6}>
          <TextField
            onChange={handleChange}
            required
            id="noteThat"
            name="noteThat"
            label="Note that"
            autoComplete="noteThat"
            fullWidth
            value={state.noteThat}
          />
        </Grid>

        <Grid item xs={12} sm={8}>
          <TextField
            onChange={handleChange}
            required
            id="opinion"
            name="opinion"
            label="Dissenting opinions of commission members"
            autoComplete="opinion"
            fullWidth
            value={state.opinion}
          />
        </Grid>

        <Grid item xs={12} sm={2}>
          <TextField
            onChange={handleChange}
            required
            id="outputMark"
            name="outputMark"
            label="Output mark"
            autoComplete="outputMark"
            fullWidth
            value={state.outputMark}
          />
        </Grid>
        <Grid item xs={12} sm={2}>
          <TextField
            onChange={handleChange}
            required
            id="num"
            name="num"
            label="Number of protocol"
            autoComplete="num"
            fullWidth
            value={state.num}
          />
        </Grid>

        <Grid item xs={12} sm={6}>
          <TextField
            onChange={handleDocumentName}
            id="documentName"
            name="documentName"
            label="Document name"
            autoComplete="given-name"
            fullWidth
            style={{margin: '0 0 20px 0'}}
          />
        </Grid>

          <Grid item xs={12} sm={6}>
            {!documentInputName && renderUploadButton('0')}
            {documentInputName && (
              <Button
              onClick={handleGenerateDocument}
              variant="contained"
              color="primary"
              style={{padding: '10px 12px'}}
              >
                Download
              </Button>
            )}
          </Grid>
      </Grid>
    </div>
  );
}
