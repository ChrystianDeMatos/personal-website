import React, { useEffect } from 'react'
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import { CardMedia, Grid, Paper, Tooltip } from '@material-ui/core';

import Icon from './Icon'

const useStyles = makeStyles({
  root: {
    // minWidth: 275,
  },
  title: {
    fontSize: 14,
  },
  pos: {
    marginBottom: 12,
  },
  media: {
    height: 0,
    paddingTop: '56.25%', // 16:9
  },
});

export default function PortifolioCard({ title, description, technologies, image, link }) {
  const classes = useStyles()
  useEffect(() => {
    console.log(technologies)
  }, [])
  return (
    <Card item className={classes.root}>
      <CardMedia
        className={classes.media}
        image={image}
        title={title}
      />
      <CardContent>
        {/* <Typography className={classes.title} color="textSecondary" gutterBottom>
          Word of the Day
        </Typography> */}
        <Typography variant="h5" component="h2">
          {title}
        </Typography>
        {/* <Typography className={classes.pos} color="textSecondary">
          adjective
        </Typography> */}
        <Typography variant="body2" component="p">
          {description}
        </Typography>
      </CardContent>
      <CardActions>
        <Grid
          container
          direction="row"
          alignItems="center"
          justify="space-between"
        >
          {link ? <Button size="small">Link</Button> : null}
          <Paper>
            <Grid container>
              {
                technologies.map((technology) => (
                  <Tooltip title={technology.tooltip} placement="top">
                    <Grid item>
                      <Icon icon={technology.icon} width={43} />
                    </Grid>
                  </Tooltip>
                ))
              }
              {/* <Tooltip title="C#" placement="top">

                <Grid item>
                  <Icon iconName="csharp" width={43} />
                </Grid>
              </Tooltip>

              <Tooltip title="Unity" placement="top">

                <Grid item>
                  <Icon iconName="unity" width={43} />
                </Grid>
              </Tooltip> */}

            </Grid>
          </Paper>
        </Grid>

      </CardActions>
    </Card>

  )
}