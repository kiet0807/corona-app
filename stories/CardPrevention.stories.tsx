import React from 'react';
import { text, withKnobs, number} from '@storybook/addon-knobs';
import CardPrevention from '../components/CardPrevention'
import {Box} from 'theme-ui'

export default {
  title: 'Card',
  decorators: [withKnobs],
};

export const WithACardPrevention = () => (
  <Box bg={'grey'} p = {20}>
    <CardPrevention
        image = 'https://previews.123rf.com/images/inegvin/inegvin1701/inegvin170100077/69882112-user-sign-icon-person-symbol-human-avatar-.jpg'
        nameCard = {text('Name','Name')}
        description = {text('Description','Description')}
        numberDiscussions = {number('Number', 87)}
    />
  </Box>
);