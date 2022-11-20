import React, {useState} from 'react'
import '../components/css/Home.css';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import { Typography } from '@mui/material';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


function Home() {
const url = "https://us-central1-blinkapp-684c1.cloudfunctions.net/fakeAuth";
const [invite, setInvite] = React.useState([]);
const [post, setPosts] = React.useState([]);

const initialText = 'Send';
const [loading, setLoading] = useState(initialText)
const [status, setStatus] = useState(undefined);
const [alert, setAlert] = useState(true);


const [name, setName] = React.useState([]);
const [email, setEmail] = useState([]);
const [confirmEmail, setconfirmEmail] = useState('');

const warningMessage = () => {
  toast.error("Please fill all the fields", {
    position: toast.POSITION.TOP_RIGHT,
  });
};

const errorMessage = () => {
  toast.error("Please try again later", {
    position: toast.POSITION.TOP_RIGHT,
  });
};

const successMessage = () => {
  toast.success("Email added to our list", {
    position: toast.POSITION.TOP_RIGHT,
  });
};

const [open, setOpen] = React.useState(false);
const [openDialog, setOpenDialog] = React.useState(false);

const notify = () => {
  toast.error("Error Notification!", {
    position: toast.POSITION.TOP_CENTER,
    autoClose: 20000
  });
}

const handleClickOpen = () => {
    setOpen(true);
  };

const handleClose = () => {
    setOpen(false);
  };

  const handleCancel = () => {
    setOpenDialog(false);
  };

  const handleSend = (e) => {
    if (name.trim().length !== 0 && email.length !== 0 && confirmEmail.length !== 0) {
  e.preventDefault();
 setLoading("Sending, please wait")
    fetch(url, {
       method: 'POST',
       body: JSON.stringify({
          name: name,
          email: email,
          confirmEmail: confirmEmail,
       }),
       headers: {
          'Content-type': 'application/json; charset=UTF-8',
       },
    })
       .then((res) => res)
       .then((post) => {
      
          setLoading(initialText);
          setAlert(true);
          setStatus({ type: 'success' });
          setOpenDialog(true)
          successMessage();
       })
       .catch((err) => {
          console.log(err.message);
          setStatus({ type: 'error', err });
          setLoading(initialText)
          setAlert(false);
          setOpenDialog(false)
          notify(`Sorry, please try again later`);
          errorMessage();
       });
 }else {
  warningMessage();
}
};

  return (
   <>
     <div class="container">
  <div class="center" style={{textAlign: "center"}}>

    <Typography 
    variant='h2' 
    className='heading'>A better way to {"\n"} enjoy every day
    </Typography>
    <Typography 
    variant='h5' 
    className='sub-heading'>Be the first one to {"\n"} know when we launch
    </Typography>

    <Button variant="contained" 
    className='btn-request'
    onClick={handleClickOpen}>Request an Invite
    </Button>

{/* Invite Dialog */}


    <Dialog open={open} onClose={handleClose}  sx={{padding : "20px"}}>
      <DialogTitle className='txt' sx={{textAlign : "center", fontWeight: "bold"}}>Request an Invite</DialogTitle>
        <DialogContent>
       
          <TextField
            autoFocus
            required
            margin="dense"
            id="name"
            label="Full Name"
            type="email"
            fullWidth
            variant='outlined' 
            className='txt'
            onChange={(event) => setName(event.target.value)}
          />
            <TextField
            autoFocus
            required
            margin="dense"
            id="email"
            label="Email Address"
            type="email"
            fullWidth
            variant='outlined' 
            className='txt'
            onChange={(event) => setEmail(event.target.value)}
          />
            <TextField
            autoFocus
            required
            margin="dense"
            id="confirmEmail"
            label="Confirm Email Address"
            type="email"
            fullWidth
            className='txt'
            variant='outlined' 
            onChange={(event) => setconfirmEmail(event.target.value)}
          />
        </DialogContent>
        <DialogActions>
          <Button variant='contained' 
          className='btn-send' 
          sx={{justifyContent : "center", textTransform: "none"}} 
          onClick={handleSend}>{loading}
          
         </Button>
         <ToastContainer className={"toast-position"} />

        </DialogActions>
      </Dialog>


{/* Success or Error Dialog */}

      <Dialog
        open={openDialog}
        onClose={handleCancel}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">
          {"All Done !"}
        </DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
            You will be  one of the first to experience Broccoli & Co. when we launch. 
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button className='btn-request' onClick={handleCancel}>OK</Button>
        </DialogActions>
      </Dialog>


  </div>
</div>
</>

  )
}

export default Home