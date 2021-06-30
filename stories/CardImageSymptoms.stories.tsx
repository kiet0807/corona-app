import React from 'react';
import { withKnobs} from '@storybook/addon-knobs';
import CardImageSymptoms from '../components/CardImageSymptoms'
import {Box} from 'theme-ui'

export default {
  title: 'Card',
  decorators: [withKnobs],
};

export const WithACardImageSymptoms = () => (
  <Box bg={'grey'} p = {20}>
    <CardImageSymptoms
        image = "https://previews.123rf.com/images/inegvin/inegvin1701/inegvin170100077/69882112-user-sign-icon-person-symbol-human-avatar-.jpg"
        name = 'Fever'
        description = 'He severity of COVID-19 symptoms can ran-ge from very mild to severe'
    />
  </Box>
);