import { render, screen } from '@testing-library/react';
import React from 'react';
import { Provider } from 'react-redux';
import { store } from 'store/store';
import CharacterItem from '../components/CharacterItem';

import lukeSkywalkerMock from './__mocks__/charactersMocks';

global.React = React;

const characterItem = render(
  <Provider store={store}>
    <CharacterItem character={lukeSkywalkerMock} />
  </Provider>,
);

describe('CharacterItem', () => {
  test('CharacterItem snapshot', () => {
    expect(characterItem).toMatchSnapshot();
  });

  test('CharacterItem snapshot', () => {
    expect(characterItem).toMatchSnapshot();
  });
});

export {};
