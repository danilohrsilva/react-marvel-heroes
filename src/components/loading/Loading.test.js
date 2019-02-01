import React from 'react';
import TestRenderer from 'react-test-renderer';
import Loading from './Loading';

describe('Given the <Loading /> component', () => {

  const component = TestRenderer.create(<Loading />);

  describe('When it renders, then', () => {

    it('Should match the snapshot', () => {
      expect(component.toJSON()).toMatchSnapshot();
    })

  });

});