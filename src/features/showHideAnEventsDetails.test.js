import { loadFeature, defineFeature } from "jest-cucumber";
import React from "react";
import { mount } from "enzyme";
import App from "../App";

const feature = loadFeature('./src/features/showHideAnEventsDetails.feature');

defineFeature(feature, test => {
  test('An event element is collapsed', ({ given, when, then }) => {
    given('The user is on the main page', () => {

    });

    let AppWrapper;
    when('an event is loaded', () => {
      AppWrapper = mount(<App />);
    });

    then('the event description is closed', () => {
      AppWrapper.update();
      expect(AppWrapper.find('.event-description')).toHaveLength(0)
    });
  });

  test('User can expand an event to see its details', ({ given, 
  when, then }) => {
    let AppWrapper;
    given('the events are all loaded', () => {
      AppWrapper = mount(<App />);
    });

    when('the user clicks on the show event details button', () => {
      AppWrapper.update();
      AppWrapper.find('.event .description-button').at(0).simulate('click')
    });

    then('the event details will open', () => {
      AppWrapper.update()
      expect(AppWrapper.find('.event-description')).toHaveLength(1)
    });
  });

  test('User can collapse an event to hide its details', ({ given, when, then }) => {
    let AppWrapper;
    given('the user has opened an events\' details', async () => {  
      AppWrapper = await mount(<App />);
      AppWrapper.update();
      AppWrapper.find('.event .description-button').at(0).simulate('click')
    });

    when('the user clicks the hide event details button', () => {
      AppWrapper.update();
      AppWrapper.find('.event .description-button').at(0).simulate('click')
    });

    then('the event details box should collapse', () => {     
      AppWrapper.update();
      expect(AppWrapper.find('.event-description')).toHaveLength(0)
    });
  });
});