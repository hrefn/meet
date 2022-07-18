import React from "react";
import { shallow } from "enzyme";
import Event from "../Event";
import { mockData } from "../mock-data";

describe('<Event /> component', () => {
  let eventWrapper
  beforeAll(() => {
    eventWrapper = shallow(<Event event={mockData[0]} />);
  });
  
  test('render event component', () => {
    expect(eventWrapper.find('.event')).toHaveLength(1);
  });

  test('render event title', () => {
    expect(eventWrapper.find('.event-title')).toHaveLength(1);
  });

  test('render event location', () => {
    expect(eventWrapper.find('.event-location')).toHaveLength(1);
  });

  test('render start time', () => {
    expect(eventWrapper.find('.start-time')).toHaveLength(1);
  });

  test('render end time', () => {
    expect(eventWrapper.find('.end-time')).toHaveLength(1);
  });

  test('render description toggle button', () => {
    expect(eventWrapper.find('.description-button')).toHaveLength(1);
  });

  test('description is off by default', () => {
    expect(eventWrapper.find('.event-description')).toHaveLength(0)
  })

  test('toggle description', () => {
    eventWrapper.find('.description-button').simulate('click');
    expect(eventWrapper.find('.event-description')).toHaveLength(1);
  });

});

