import { h } from 'preact';
import expect from 'expect';
import { mount, shallow } from 'enzyme';
import { spy } from 'sinon';

import Button from '..';

describe('<Button />', () => {
  it('should render correctly', () => {
    const wrapper = shallow(<Button>A Button</Button>);
    expect(wrapper.is('.topcoat-button')).toBe(true);
  });
  it('should render its children correctly', () => {
    expect(
      shallow(<Button>A Button</Button>)
      .contains('A Button')
    ).toBe(true);
    expect(
      shallow(<Button><span>A Button</span></Button>)
      .contains(<span>A Button</span>)
    ).toBe(true);
  });
  it('should fire its clickHandler on tap', () => {
    const clickHandler = spy();
    const wrapper = shallow(<Button clickHandler={ clickHandler }>Click me</Button>);
    wrapper.simulate('tap');
    expect((clickHandler).callCount).toBe(1);
  });
  it('should show a quiet button', () => {
    const wrapper = shallow(<Button quiet>Quiet button</Button>);
    expect(wrapper.is('.topcoat-button--quiet')).toBe(true);
  });
  it('should show a large button', () => {
    const wrapper = shallow(<Button large>Quiet button</Button>);
    expect(wrapper.is('.topcoat-button--large')).toBe(true);
  });
  it('should show a cta button', () => {
    const wrapper = shallow(<Button cta>Quiet button</Button>);
    expect(wrapper.is('.topcoat-button--cta')).toBe(true);
  });
  it('should show a large quiet button', () => {
    const wrapper = shallow(<Button large quiet>Quiet button</Button>);
    expect(wrapper.is('.topcoat-button--large--quiet')).toBe(true);
  });
  it('should show a large cta button', () => {
    const wrapper = shallow(<Button large cta>Quiet button</Button>);
    expect(wrapper.is('.topcoat-button--large--cta')).toBe(true);
  });
  it('should show a disabled button', () => {
    const wrapper = mount(<Button disabled>Quiet button</Button>);
    expect(wrapper.props().disabled).toBe(true);
  });
  it('should pass on other props to the button', () => {
    const wrapper = mount(<Button style={ { background: 'red' } }>Props</Button>);
    expect(wrapper.props().style).toEqual({ background: 'red' });
  });
});
