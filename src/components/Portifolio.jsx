import React, { useEffect, useState } from 'react'
import PortifolioCard from './PortifolioCard'
import { Grid } from '@material-ui/core';

export default function Portifolio() {

  const [projects, setProjects] = useState([])

  useEffect(async function () {
    fetch('/api/teste')
      .then(async (response) => {
        const resp = await response.json()
        console.log(resp)
        setProjects(resp)
      })
  }, [])

  return (
    <Grid container spacing={2} >
      {
        projects.map((project) =>
          <Grid key={project.title} item xs={12} sm={4}>
            <PortifolioCard
              title={project.title}
              description={project.description}
              technologies={project.technologies}
              image={project.image}
              link={project.link}
            />
          </Grid>)
      }
    </Grid>
  )
}
