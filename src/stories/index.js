import React from 'react';

import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { linkTo } from '@storybook/addon-links';
import { Button, Welcome } from '@storybook/react/demo';

import '../App.css';

import { Navbar, MastHead} from '../components/'


storiesOf('Welcome', module).add('to Storybook', () => <Welcome showApp={linkTo('Button')} />);

storiesOf('Navbar', module)
  .add('with text in props.title', () => (
    <Navbar
      onClick={action('clicked')}
      title="Hello Button">
    </Navbar>
  ));


storiesOf('MastHead', module)
  .add('with text in props.title', () => (
    <MastHead
      onClick={action('clicked')}
      title="Hello Button">
    </MastHead>
  ));
