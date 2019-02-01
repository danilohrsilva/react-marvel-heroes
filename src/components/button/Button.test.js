import React from 'react';
import TestRenderer from 'react-test-renderer';
import Button from './Button';

describe('Given the <Button /> component with all params', () => {

  const mockClick = jest.fn();
  const component = TestRenderer.create(
    <Button className="button-class"
            text="Click Me"
            icon="button-icon"
            disabled={false}
            onClick={mockClick} />
  );

  describe('When it renders, then', () => {

    it('Should match the snapshot', () => {
      expect(component.toJSON()).toMatchSnapshot();
    })

  });


});