import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import { withTheme } from '@emotion/react';

const styleBtn = {
  width: 200,
  height: 40,
  bgcolor: 'black',
  color: 'darkgray',
  border: '1px solid #000',
  p: 2,
}

const style = {
  position: 'absolute',
  top: '40%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'white',
  border: '1px solid #000',
  boxShadow: 24,
  p: 4,
};

export default function BasicModal() {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <div>
      <Button sx={styleBtn} onClick={handleOpen}>FINISH PURCHASE</Button>
      {/*<Button sx={styleBtn} onClick={handleOpen} className={g.btn}>FINISH PURCHASE</Button>*/}
      <Modal
        open={open}
        onClose={handleClose}>
        <Box sx={style}>
          <Typography id="modal-modal-title" variant="h6" component="h2">
            Thanks for your purchase!
          </Typography>
        </Box>
      </Modal>
    </div>
  );
}
