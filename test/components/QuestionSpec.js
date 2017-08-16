import App from '../../src/containers/App';
import Question from '../../src/components/Question';
import { mount } from 'enzyme';
import jasmineEnzyme from 'jasmine-enzyme';
import React from 'react';

describe('Question', () => {
  let wrapper,
      handleClickSpy,
      question,
      key,
      answers,
      selected;

  beforeEach(() => {

    handleClickSpy = jasmine.createSpy('handleClick Spy')
    wrapper = mount(
      <Question
        key='1'
        question= 'What is Launch Academy?'
        answer='Launch Academy is a 10-week, immersive bootcamp taking eager learners with little to no coding experience and giving them the tools to add value as a junior contributor to a software engineering team'
        selected={false}
        handleClick={handleClickSpy}
      />
    );
  });

  it('should render a div', () => {
    expect(wrapper.find('div').length).toEqual(2);
    // 2 divs because of App div in addition to this one
  });

  it('should recieve props from App', () => {
    expect(wrapper.prop('selected')).toEqual(false);
    expect(wrapper.prop('handleClick')).toEqual(handleClickSpy);
    expect(wrapper.prop('answer')).toEqual('Launch Academy is a 10-week, immersive bootcamp taking eager learners with little to no coding experience and giving them the tools to add value as a junior contributor to a software engineering team');
  })

  it('should render a Question component that has an h5 with question text', () => {
    expect(wrapper.find('h5')).toBePresent();
    expect(wrapper.find('h5').text()).toEqual('What is Launch Academy?');
  });

  it('displays answer <p> if className is "selected"', () => {
    wrapper.setProps({ selected: true });
    expect(wrapper.find('p')).toBePresent();
  })

  it('should invoke the onClick function from props when clicked', () => {
    wrapper.find('i').simulate('click');
    expect(handleClickSpy).toHaveBeenCalled();
  })

})
