import 'react-native';
import React from 'react';
import Characters from '../src/pages/characters';
import renderer from 'react-test-renderer';
import { Provider } from 'react-redux';
import store from '../src/store';

test('Characters snapshop', () => {
    const snap = renderer.create(
        <Provider store={store}><Characters /></Provider>
    ).toJSON();
    expect(snap).toMatchSnapshot();
})