
import { Grid, Box } from '@mui/material';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Select from '@mui/material/Select';
import InputLabel from '@mui/material/InputLabel';
import FormHelperText from '@mui/material/FormHelperText';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Container from '@mui/material/Container';

import {
  validateConfirmPassword,
  validateContactNumber,
  validateDay,
  validateEmail,
  validateFullName,
  validatePassword,
  validateYear,
  validateMonth
} from './validators'

export const FormFields = ({ form }) => {
  const lastYear = new Date().getFullYear() - 1;

  return (
    <>
      <Grid item xs={12}>
        <Box marginBottom={2} marginTop={3}>
          <InputLabel htmlFor="full-name" style={{ fontWeight: 'bold'}}>Full Name</InputLabel>
          <form.Field
            name="full_name"
            validators={{
              onSubmit: ({ value }) => validateFullName(value)
            }}
            children={(field) => (
              <FormControl fullWidth>
                <TextField
                  type="text"
                  label={<>Full Name <span style={{ color: "red" }}>*</span></>}
                  id="full-name"
                  name={field.name}
                  variant="outlined"
                  value={field.state.value}
                  onBlur={field.handleBlur}
                  onChange={(e) => field.handleChange(e.target.value)}
                  error={field.state.meta.errors.length > 0}
                  helperText={field.state.meta.errors.length > 0 ? field.state.meta.errors.join(', ') : null}
                  margin="normal"
                />
              </FormControl>
            )}
          />
        </Box>
      </Grid>
      <Grid item xs={12}>
        <Box marginBottom={2}>
          <InputLabel htmlFor="contact-number" style={{ fontWeight: 'bold'}}>Contact Number</InputLabel>
          <form.Field name="contact_number"
            validators={{
              onSubmit: ({ value }) => validateContactNumber(value)
            }}
            children={(field) => (
              <FormControl fullWidth>
                <TextField type="tel"
                  pattern="[0-9]{10}"
                  label={<>Contact Number <span style={{ color: "red" }}>*</span></>}
                  name={field.name}
                  variant="outlined"
                  value={field.state.value}
                  onBlur={field.handleBlur}
                  onChange={(e) => field.handleChange(e.target.value)}
                  error={field.state.meta.errors.length > 0}
                  helperText={field.state.meta.errors.length > 0 ?
                    field.state.meta.errors.join(', ') : null
                  }
                  margin='normal'
                />
              </FormControl>
            )}
          />
        </Box>
      </Grid>
      <Grid item xs={12}>
        <Box marginBottom={2}>
          <Box marginBottom={2}>
            <InputLabel htmlFor="birth-date" style={{ fontWeight: 'bold'}}>Birthate</InputLabel>
          </Box>
          <Grid container spacing={2}>
            <form.Field name="day"
              validators={{
                onSubmit: ({ value }) => validateDay(value)
              }}
              children={(field) => (
                <Grid item xs={4}>
                  <FormControl variant="outlined" sx={{ minWidth: 120 }} fullWidth
                    error={field.state.meta.errors.length > 0}
                  >
                    <InputLabel id="day-label">Day <span style={{ color: "red" }}>*</span></InputLabel>
                    <Select name={field.name}
                      labelId="day-label"
                      value={field.state.value}
                      onBlur={field.handleBlur}
                      onChange={(e) => field.handleChange(e.target.value)}
                      label="Day"
                    >
                      {[...Array(31)].map((_, index) => (
                        <MenuItem key={index + 1} value={index + 1}>{index + 1}</MenuItem>
                      ))}
                    </Select>
                    {field.state.meta.errors.length > 0 && (
                      <FormHelperText>{field.state.meta.errors.join(', ')}</FormHelperText>
                    )}
                  </FormControl>
                </Grid>
              )}
            />
            <form.Field name="month"
              validators={{
                onSubmit: ({ value }) => validateMonth(value)
              }}
              children={(field) => (
                <Grid item xs={4}>
                  <FormControl sx={{ minWidth: 120 }} variant="outlined" fullWidth
                    error={field.state.meta.errors.length > 0}
                  >
                    <InputLabel id="month-label">Month <span style={{ color: "red" }}>*</span></InputLabel>
                    <Select name={field.name}
                      labelId="month-label"
                      value={field.state.value}
                      onBlur={field.handleBlur}
                      onChange={(e) => field.handleChange(e.target.value)}
                      label="Month"
                    >
                      {[
                        'January',
                        'February',
                        'March',
                        'April',
                        'May',
                        'June',
                        'July',
                        'August',
                        'September',
                        'October',
                        'November',
                        'December'
                      ].map((month, index) => (
                        <MenuItem key={index} value={index + 1}>{month}</MenuItem>
                      ))}
                    </Select>
                    {field.state.meta.errors.length > 0 && (
                      <FormHelperText>{field.state.meta.errors.join(', ')}</FormHelperText>
                    )}
                  </FormControl>
                </Grid>
              )}
            />
            <form.Field name="year"
              validators={{
                onSubmit: ({ value }) => validateYear(value)
              }}
              children={(field) => (
                <Grid item xs={4}>
                  <FormControl sx={{ minWidth: 120 }} variant="outlined" fullWidth
                    error={field.state.meta.errors.length > 0}
                  >
                    <InputLabel id="year-label">Year <span style={{ color: "red" }}>*</span></InputLabel>
                    <Select name={field.name}
                      labelId="year-label"
                      value={field.state.value}
                      onBlur={field.handleBlur}
                      onChange={(e) => field.handleChange(e.target.value)}
                      label="Year"
                    >
                      {[...Array(63)].map((_, index) => (
                        <MenuItem key={index} value={lastYear - index}>{lastYear - index}</MenuItem>
                      ))}
                    </Select>
                    {field.state.meta.errors.length > 0 && (
                      <FormHelperText>{field.state.meta.errors.join(', ')}</FormHelperText>
                    )}
                  </FormControl>
                </Grid>
              )}
            />
          </Grid>
        </Box>
      </Grid>
      <Grid item xs={12}>
        <Box marginBottom={2}>
          <InputLabel htmlFor="email" style={{ fontWeight: 'bold'}}>Email Address</InputLabel>
          <form.Field name="email"
            validators={{
              onSubmit: ({ value }) => validateEmail(value)
            }}
            children={(field) => (
              <FormControl fullWidth>
                <TextField type="email"
                  label={<>Email Address <span style={{ color: "red" }}>*</span></>}
                  variant="outlined"
                  name={field.name}
                  value={field.state.value}
                  onBlur={field.handleBlur}
                  onChange={(e) => field.handleChange(e.target.value)}
                  error={field.state.meta.errors.length > 0}
                  helperText={field.state.meta.errors.length > 0 ?
                    field.state.meta.errors.join(', ') : null
                  }
                  margin='normal'
                />
              </FormControl>
            )} />
        </Box>
      </Grid>
      <Grid item xs={12}>
        <Box marginBottom={2}>
          <InputLabel htmlFor="password" style={{ fontWeight: 'bold'}}>Password</InputLabel>
          <form.Field name="password"
            validators={{
              onSubmit: ({ value }) => validatePassword(value)
            }}
            children={(field) => (
              <FormControl fullWidth>
                <TextField type="password"
                  label={<>Create Password <span style={{ color: "red" }}>*</span></>}
                  name={field.name}
                  variant="outlined"
                  value={field.state.value}
                  onBlur={field.handleBlur}
                  onChange={(e) => field.handleChange(e.target.value)}
                  error={field.state.meta.errors.length > 0}
                  helperText={field.state.meta.errors.length > 0 ?
                    field.state.meta.errors.join(', ') : null
                  }
                  margin='normal'
                />
              </FormControl>
            )} />
        </Box>
      </Grid>
      <Grid item xs={12}>
        <Box marginBottom={2}>
          <InputLabel htmlFor="confirm-password" style={{ fontWeight: 'bold'}}>Confirm Password</InputLabel>
          <form.Field name="confirm_password"
            validators={{
              onSubmit: ({ value, fieldApi }) => validateConfirmPassword(
                value,
                fieldApi.form.state.values.password)
            }}
            children={(field) => (
              <FormControl fullWidth>
                <TextField type="password"
                  label={<>Confirm Password <span style={{ color: "red" }}>*</span></>}
                  name={field.name}
                  variant="outlined"
                  value={field.state.value}
                  onBlur={field.handleBlur}
                  onChange={(e) => field.handleChange(e.target.value)}
                  error={field.state.meta.errors.length > 0}
                  helperText={field.state.meta.errors.length > 0 ?
                    field.state.meta.errors.join(', ') : null
                  }
                  margin='normal'
                />
              </FormControl>
            )} />
        </Box>
      </Grid>
    </>
  )
}

export const FormButtons = ({ form }) => {
  return (
    <Container style={{ paddingTop: "20px", paddingBottom: "20px" }} maxWidth="sm">
      <Grid container justifyContent="center" spacing={2}>
        <Grid item xs={12} sm={4}>
          <Box marginBottom={2}>
            <FormControl fullWidth>
              <Button type="reset" variant="outlined">Cancel</Button>
            </FormControl>
          </Box>
        </Grid>
        <Grid item xs={12} sm={4}>
          <form.Subscribe
            selector={(state) => [state.canSubmit, state.isSubmitting]}
            children={([canSubmit, isSubmitting]) => (
              <FormControl fullWidth>
                <Button
                  type="submit"
                  disabled={!canSubmit}
                  variant="contained">{isSubmitting ? '...' : 'Submit'}
                </Button>
              </FormControl>
            )} />
        </Grid>
      </Grid>
    </Container>
  )
}