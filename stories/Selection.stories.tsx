import React from 'react';
import { withKnobs, text, boolean, number } from '@storybook/addon-knobs';
import Selection from '../components/Selection'
import {Box} from 'theme-ui'

const Items = [
    {
        id: 1,
        label: 'Prevention',
        value: '1'
    },
    {
        id: 2,
        label: 'Symptoms',
        value: '2'
    },
    {
        id: 3,
        label: 'Diagnosis',
        value: '3'
    }
]

export default {
  title: 'Selection',
  decorators: [withKnobs],
};

export const withASelection = () => (
  <Box bg={'grey'} p = {20}>
    <Selection items={Items} onClick = {(value) => console.log(value)} selectedItem = {Items[0]}/>
  </Box>
);