import React from 'react';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField';

const Commission = (props) => {
  const { state, handleChange } = props;

  return (
    <div className="Commission">
      <Typography variant="h6" gutterBottom>
        Filling in the document Commission
      </Typography>
      <Grid container spacing={3}>
        <Grid item xs={12} sm={3}>
          <TextField
            onChange={handleChange}
            required
            id="chairman"
            name="chairman"
            label="Chairman"
            fullWidth
            autoComplete="chairman"
            value={state.chairman}
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
      </Grid>
    </div>
  );
};

export default Commission;
