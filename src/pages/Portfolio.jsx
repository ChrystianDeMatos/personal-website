import React, { useEffect, useState } from 'react';
import PortifolioCard from '../components/PortifolioCard'

import { makeStyles } from '@material-ui/core/styles';
import { Container, Button, Grid } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
}));

function Portfolio() {
  const classes = useStyles();
  const [cards, setCards] = useState()

  useEffect(()=>{
    async function getCards(){
      const res = await fetch('/api/teste');
      const newCards = await res.json()
      console.log(newCards)
      setCards(newCards)
    }
    getCards()
  },[])

  return (
    <Grid container spacing={2} >
      {
        Array(10).fill(1).map(() =>
          <Grid item xs={12} sm={4}>
            <PortifolioCard />
          </Grid>)
      }
    </Grid>
  )
}

export default Portfolio