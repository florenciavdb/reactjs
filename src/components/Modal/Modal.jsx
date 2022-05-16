import React, { useState, useContext } from 'react';
import { CartContext } from '../Cart/CartContext';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import { withTheme } from '@emotion/react';
import { collection, getFirestore, addDoc, serverTimestamp } from 'firebase/firestore';

const { totalValue, buyAll } = useContext(CartContext);

function finishPurchase() {
  
  const db = getFirestore();

  const ordersRef = collection (db, 'orders');

  let buyer = {
          buyer: {name, phone, email},
          total: totalValue,
          date: serverTimestamp(),
          items: cart,
      }

  console.log(buyer); 

  addDoc(ordersRef, buyer).then(({id}) => {
      console.log(buyer, id)
      buyAll()
  });
}

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
      <Button sx={styleBtn} onClick={handleOpen}>CONTINUE</Button>
      <Modal
        open={open}
        onClose={handleClose}>
        <Box sx={style}>

        <Button onClick={() => { finishPurchase()}}> FINISH PURCHASE </Button>

        </Box>
      </Modal>
    </div>
  );
}
