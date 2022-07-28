Feature: Show/Hide an Event Details

Scenario: An event element is collapsed 
Given The user is on the main page
When an event is loaded
Then the event description is closed

Scenario: User can expand an event to see its details
Given the events are all loaded
When the user clicks on the show event details button
Then the event details will open

Scenario: User can collapse an event to hide its details
Given the user has opened an events' details
When the user clicks the hide event details button
Then the event details box should collapse