import { loadFeature, defineFeature } from "jest-cucumber";
import React from "react";
import { mount } from "enzyme";
import App from "../App";
import NumberOfEvents from "../NumberOfEvents";

const feature = loadFeature('./src/features/specifyNumberOfEvents.feature')

defineFeature(feature, test => {
  test('When user hasn\'t specified a number of events, 32 is the default', ({ given, when, then }) => {
    let AppWrapper;
    given('the user has opened the app', () => {
      AppWrapper = mount(<App />)
    });

    when('the user has not specified a number of results to display', () => {
      
      
    });

    then(/^(\d+) results are displayed by default$/, (arg0) => {
      AppWrapper.update();
      expect(AppWrapper.find('#event-number').instance().value).toBe('32')
    });
  });

  test('User can change the number of events displayed', ({ given, when, then }) => {
      let AppWrapper;
    given('the user has opened the app', () => {
      AppWrapper = mount(<App />);
    });

    when('the user enters a number in the number of events box', () => {
      AppWrapper.update();
      AppWrapper.find('.number-of-events-input').simulate('change', { target: 1 });
    }); 

    then('the page should show the number of events that they specify', () => {
      expect(AppWrapper.find('.EventList')).toHaveLength(1)
    });
  });

});