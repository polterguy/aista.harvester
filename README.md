
# Aista Harvester

A _"wait for release"_ type of Angular SPA, allowing users to subscribe to a newsletter, while waiting
for some artefact or service to be release.

## Abstract

The system should display a counter with large fonts saying something such as; _"175 days, 22 hours, 15 minutes and 11 seconds"_.
The counter should count down to that time, live, ticking once every second, giving it a feeling of a countdown. The time
the counter counts down to needs to be configurable.

Below the system should display 4 form elements.

1. **Name** - Text box allowing user to type his or her name.
2. **Email** - Text box allowing user to type his or her email address.
3. **Accept** - Checkbox that displays configured text saying for instance _"I accept that Aista, Ltd can send me marketing emails about relevant products and services ..."_.
4. **Submit** - Button that allows the user to submit the form, which implies invoking a configured HTTP POST endpoint, passing in the name and email address of the user.

When the form is submitted, and endpoint returns success (status code 200), a persistent cookie needs to be stored on the client/browser
which prohibits the user from sending the form again. If this cookie exists as the form is initially loaded, the above 4 form elements
should _not_ be displayed, but rather a configured text saying e.g. _"We will notify you when the counter reaches zero ..."_.

## Configurations

The following parts needs to be possible to configure for the application.

1. HTTP POST endpoint to invoke to subscribe to newsletter.
2. The date and time for when the counter reaches zero.
3. The accept checkbox text.
4. The text displayed to users already having subscribed.

## Technologies

The system should be implemented using the following technologies and constructs.

1. Angular.
2. Angular Material.
3. GitHub Actions, using CI/CD to automatically deploy changes to its master branch to some pre configured DigitalOcean droplet. If possible, this is low priority, but if it's possible to achieve within the timeframe for the project would be considered a _"bonus"_.

## Additional information

1. The system needs to be thoroughly documented.
2. This GitHub repository can be used to store its code.
3. The system can be released under the terms of the MIT license as published by the Open Source Initiative (OSI).
4. The system needs to be responsive, implying it works on devices such as cell phones, tablets, etc.
5. Besides from Angular and Material, and the fact that the system needs to be responsive, the system doesn't need much design elements, as long as fonts, font size, and other layout parts can be easily configured. Make sure it's tested for all resolutions.


