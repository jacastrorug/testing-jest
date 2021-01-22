import React from 'react';
import { mount } from 'enzyme';
import { create } from 'react-test-renderer';

import Footer from '../../components/Footer';

describe('Testing <Footer />', () => {
  const footer = mount(<Footer />);
  test('Render of footer component', () => {
    expect(footer.length).toEqual(1);
  });

  test('Test title render', () => {
    expect(footer.find('.Footer-title').text()).toEqual('Platzi Store');
  });
});

describe('Footer Snapshot', () => {
  test('Comprobar la UI del componente Footer', () => {
    const footer = create(<Footer />);
    expect(footer.toJSON()).toMatchSnapshot();
  });
});
