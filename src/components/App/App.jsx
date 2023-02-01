import React, { Component } from 'react';

import { Box } from 'components/Box';
import { AppStyled } from './App.styled';

export class App extends Component {
  state = {};

  render() {
    return (
      <Box
        height="100vh"
        display="flex"
        flexDirection="column"
        alignItems="center"
        justifyContent="center"
        fontSize="xxl"
        color="primary"
      >
        <AppStyled>My React Boilerplate</AppStyled>
      </Box>
    );
  }
}
