import React from "react";
import { shallow } from "enzyme";
import NumberOfEvents from "../NumberOfEvents";

describe('<NumberOfEvents /> component', () => {
  let NumberOfEventsWrapper
  beforeAll(() => {
    NumberOfEventsWrapper = shallow(<NumberOfEvents />);
  });

  test('label renders', () => {
    expect(NumberOfEventsWrapper.find('.number-of-events-label')).toHaveLength(1);
  });

  test('render text input box', () => {
    expect(NumberOfEventsWrapper.find('.number-of-events-input')).toHaveLength(1);
  });

  test('display 32 events by default', () => {
    expect(NumberOfEventsWrapper.find('.number-of-events-input').get(0).props.value).toEqual(32)
  })

  test('change amount displayed', () => {
    NumberOfEventsWrapper.setState({
      numberOfEvents: 16
    })

    expect(NumberOfEventsWrapper.state('numberOfEvents')).toBe(16)
  })

  test('user can change number of events displayed via textbox', () => {
    NumberOfEventsWrapper.find('#event-number').simulate('change', {
      target: { value: 16 }
    });

    expect(NumberOfEventsWrapper.state('numberOfEvents')).toEqual(16)
  })

  test('inputs less than 1 default to 32', () => {
    NumberOfEventsWrapper.setState({
      numberOfEvents: 32
    });

    NumberOfEventsWrapper.find('#event-number').simulate('change', {
      target: { value: -1 }
    });

    expect(NumberOfEventsWrapper.state('numberOfEvents')).toEqual(32)
  });

  test('inputs greater than 32 default to 32', () => {
    NumberOfEventsWrapper.setState({
      numberOfEvents: 32
    });

    NumberOfEventsWrapper.find('#event-number').simulate('change', {
      target: { value: 100 }
    });

    expect(NumberOfEventsWrapper.state('numberOfEvents')).toEqual(32)
  });

  test('non number inputs default to 32', () => {
    NumberOfEventsWrapper.setState({
      numberOfEvents: 32
    });

    NumberOfEventsWrapper.find('#event-number').simulate('change', {
      target: { value: 'test' }
    });

    expect(NumberOfEventsWrapper.state('numberOfEvents')).toEqual(32)
  })
  
  

});