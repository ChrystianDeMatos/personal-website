import React, { useEffect, useState } from 'react'
import PropTypes from 'prop-types';


const IconComponent = ({ name, width }) => {
  let [icon, setIcon] = useState('');

  useEffect(async () => {
    try {
      let importedIcon = await import(`../assets/icons/${name}.svg`);
      setIcon(importedIcon.default)
    } catch (e) {
      console.log("Missing icon: " + name)
      setIcon((<></>))
    }
  }, []);

  return <img alt='' src={icon} width={width} />;
};

export default function Icon({ icon = 'unity', width = 64 }) {
  return (
    <IconComponent
      name={icon}
      width={width}
      // fill="darkblue"
      // height="100"
    />
  )
}

Icon.propTypes = {
  iconName: PropTypes.string,
};
