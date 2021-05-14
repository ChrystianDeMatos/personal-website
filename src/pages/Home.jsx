import React from 'react'
import profilePic from '../assets/profilePicture.jfif'
import { makeStyles } from '@material-ui/core/styles';

import Portfolio from '../components/Portfolio'
import { Box, Grid, Paper, Typography } from '@material-ui/core';

import Background from '../components/Background';
import SocialIcon from '../components/SocialIcon'

import { Email, GitHub, LinkedIn } from '@material-ui/icons';

const useStyles = makeStyles((theme) => ({
  root: {
    alignItems: 'center'
  },
  profilePicture: {
    height: '200px',
    borderRadius: '50%',
    border: `4px solid ${theme.palette.primary.main}`,
  },
  profileTitle: {
    color: theme.palette.primary.main,
    marginTop: '10px'
  },
  profileComponent: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    height: '100vh',
  },
  profileText: {
  },
  portfolioTitle: {
    color: theme.palette.primary.main,
  },
  socialIcon: {
    color: theme.palette.primary.main,
  }
}));

export default function Home() {
  const classes = useStyles();
  return (
    <React.Fragment>
      <Box className={classes.profileComponent}>

        {/* <Profile3D className={classes.profilePicture3D}/> */}

        <img className={classes.profilePicture} id="about" alt='Foto de perfil' src={profilePic}/>
        <Typography className={classes.profileTitle} variant="h4" component="h4" >Chrystian de Matos</Typography>

        <Grid justify="center" container spacing={2}>
          <Grid item>
            <SocialIcon
              iconComponent={<Email className={classes.socialIcon} fontSize="large" />}
              link='mailto:chrystiandematos@gmail.com'
              tooltip='chrystiandematos@gmail.com'
            />
          </Grid>
          <Grid item>
            <SocialIcon
              iconComponent={<GitHub className={classes.socialIcon} fontSize="large" />}
              link='https://github.com/CristianDrift'
              tooltip='CristianDrift'
            />
          </Grid>
          <Grid item>
            <SocialIcon
              iconComponent={<LinkedIn className={classes.socialIcon} fontSize="large" />}
              link='https://www.linkedin.com/in/chrystian-de-matos/'
              tooltip='Chrystian de Matos'
            />
          </Grid>

        </Grid>
        <Box mx={[0, 24, 36, 48]}>
          <Paper className={classes.profileText} elevation={3}>
            <Box m={2}>
              <Typography>Programador e desenvolvedor de jogos, apaixonado por tecnologia, atualmente fazendo projetos de programação em grupos e individuais. Buscando experiência na área, visto que meu sonho é trabalhar na industria do desenvolvimento de software.</Typography>
            </Box>
          </Paper>
        </Box>
        <Background />
      </Box>

      <Typography className={classes.portfolioTitle} id="portfolio" variant="h5" component="h5">Portfólio</Typography>

      <Portfolio />

    </React.Fragment>

  )
}