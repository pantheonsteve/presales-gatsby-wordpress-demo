import React from "react"
import Button from "@material-ui/core/Button"
import TextField from "@material-ui/core/TextField"
import Dialog from "@material-ui/core/Dialog"
import DialogActions from "@material-ui/core/DialogActions"
import DialogContent from "@material-ui/core/DialogContent"
import DialogContentText from "@material-ui/core/DialogContentText"
import DialogTitle from "@material-ui/core/DialogTitle"
import { useFormik } from "formik"


const SubscribeModal = ({ props }) => {
  /* Modal Settings */
  const [open, setOpen] = React.useState(false)
  const handleClickOpen = () => {
    setOpen(true)
  }
  const handleClose = () => {
    setOpen(false)
  }

  const submitHandler = () => {
    setOpen(false)
    formik.handleSubmit
  }

  /* Formik Settings */
  const formik = useFormik({
    initialValues: {
      email: "",
    },
    onSubmit: (values) => {
      handleClose()
      alert("Thanks for your email: " + JSON.stringify(values, null, 2))
    },
  })

  return (
    <React.Fragment>
        <Button variant="contained" color="primary" onClick={handleClickOpen}>
          Subscribe
        </Button>
        <Dialog
          open={open}
          onClose={handleClose}
          aria-labelledby="form-dialog-title"
        >
          <DialogTitle id="form-dialog-title">
            Keep up to date with the research.
          </DialogTitle>
          <DialogContent>
            <DialogContentText>
              Sign up today for email updates on arthritis research, treatment
              options, and healthy living.
            </DialogContentText>
            <form
              noValidate
              onSubmit={formik.handleSubmit}
            >
              <TextField
                variant="outlined"
                margin="normal"
                required
                fullWidth
                id="email"
                label="Email Address"
                name="email"
                autoComplete="email"
                htmlFor="email"
                onChange={formik.handleChange}
                value={formik.values.email}
              />
            </form>
          </DialogContent>
          <DialogActions>
            <Button onClick={handleClose} color="primary">
              Cancel
            </Button>
            <Button type="submit" onClick={formik.handleSubmit} color="primary">
              Subscribe
            </Button>
          </DialogActions>
        </Dialog>

    </React.Fragment>
  )
}

export default SubscribeModal
