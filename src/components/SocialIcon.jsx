import { Tooltip } from '@material-ui/core'
import React from 'react'

export default function SocialIcon({ tooltip, link, iconComponent }) {
  return (
    <Tooltip title={tooltip}>
      <a
        target='_blank'
        href={link}
      >
        {iconComponent}
      </a>
    </Tooltip>
  )
}
