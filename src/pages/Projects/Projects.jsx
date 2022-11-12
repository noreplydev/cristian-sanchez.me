import React, { useEffect, useState } from 'react'

// STYLED COMPONENTS
import {
  Parent,
  Grid
} from './style'

// COMPONENTS
import { Cards } from '../../components/Projects/Cards/Cards.jsx'

export const Projects = () => {
  return (
    <Parent>
      <Grid>
        <Cards/>
      </Grid>
    </Parent>
  )
}
