import React from 'react';
import { withKnobs} from '@storybook/addon-knobs';
import CardVideoSymptoms from '../components/CardVideoSymptoms'
import {Box} from 'theme-ui'

export default {
  title: 'Card',
  decorators: [withKnobs],
};

export const WithACardVideoSymptoms = () => (
  <Box bg={'grey'} p = {20}>
    <CardVideoSymptoms
        video = "https://www.youtube.com/embed/bSnBrVmFoaQ"
        name = 'What Coronavirus Symptoms Look Like'
        description = 'After being exposed to the virus that cause COVID-19, it can take as 2 to 4 days to develop.'
    />
  </Box>
);