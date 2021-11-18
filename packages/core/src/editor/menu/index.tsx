import React from 'react';
import { Grid } from '@material-ui/core';
import * as menus from './components';

export const Menu = () => (
  <Grid
    container={true}
    direction={'row'}
    style={{
      padding: 20,
      height: '100%',
      boxSizing: 'border-box',
      borderLeft: '1px solid #99999966',
      borderRight: '1px solid #99999966',
    }}>
    {Object.values(menus).map((key, index) => {
      const MenuCom = key;

      return (
        <Grid key={index} item={true} md={6} lg={6}>
          <MenuCom />
        </Grid>
      );
    })}
  </Grid>
);
