import React, { useEffect, useState } from 'react'
import { makeStyles, Tooltip } from '@material-ui/core';

const useStyles = makeStyles({
  color: {
    filter: 'invert(0)'
  }
});

export default function Icon({ icon: iconName = 'unity', width = 64, tooltip }) {
  const classes = useStyles()
  let [icon, setIcon] = useState('');

  useEffect(() => {
    async function findIcon(){
      try {
        let importedIcon = await import(`../assets/icons/${iconName}.svg`);
        setIcon(importedIcon.default)
      } catch (e) {
        console.log("Missing icon: " + iconName)
        setIcon((<></>))
      }
    }
    findIcon()
  }, []);

  return (
    <Tooltip title={tooltip} placement="top">
      <img className={classes.color} alt='' src={icon} width={width} />
    </Tooltip>
  );
};
