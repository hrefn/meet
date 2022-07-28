Feature: Specify number of events

Scenario: When user hasn't specified a number of events, 32 is the default
Given the user has opened the app
When the user has not specified a number of results to display
Then 32 results are displayed by default

Scenario: User can change the number of events displayed
Given the user has opened the app
When the user enters a number in the number of events box
Then the page should show the number of events that they specify