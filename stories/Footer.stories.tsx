import React from 'react';
import { text, withKnobs, number} from '@storybook/addon-knobs';
import Footer from '../components/Footer'
import {Box} from 'theme-ui'

export default {
  title: 'Footer',
  decorators: [withKnobs],
};

export const WithAFooter = () => (
  <Box bg={'grey'} p = {20}>
    <Footer/>
  </Box>
);