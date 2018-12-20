# Message Hunter

#### December 19th, 2018

## Contributors

### _Paige Williams, Ben Kirby, Jared Reando, Ralph Perdomo_

![alt-text](https://github.com/pseudoralph/messenger_hunt/blob/master/public/db_schema.png)

## Description

Message Hunter is a hot new geolocation social networking site that makes messaging _fun_ again.

Users can log in, check in anywhere in the world, and leave location-specific messages for other users to find.

A personal dashboard will show you a

If you check in near the location of a message sent to you by another user, a special notification will appear, granting you access to view and save your special hidden message.

What fun!!!

Travel the world with Message Hunter, leaving a trail of hidden messages for friends to discover as they embark on their own journey of global self-discovery.

**Happy hunting!**

(View the site hosted [HERE](http://message-hunter.herokuapp.com/) on Heroku)

## Setup and Installation

1. Clone the project from https://github.com/pseudoralph/messenger_hunt.git to a local directory
2. From the project directory, set up the database schema with:
 ```console
rails db:setup
```

3. From the terminal, go the project directory and start the Rails server with:
```console
rails s
```
4. In a web browser, go to the address **localhost:3000**

5. Run the tests with:
```console
rspec
```

## Specs  

View specs [here](https://github.com/pseudoralph/messenger_hunt/tree/master/spec).

## Database Schema

![alt-text](https://github.com/pseudoralph/messenger_hunt/blob/master/public/db_schema.png)

## Further Development

  ### Current Features
  - [x] Unique user authentication
  - [x] Ability to send a message to another user
  - [x] Ability to save a message at a specific location on a dynamic map
  - [x] Ability to 'check-in' at a specific location on a dynamic map
  - [x] Recipient of a message can read their message when within a certain distance of a message
  - [x] Link a message with map marker location

  ### Extra Functionality
  - [ ] Ability to review all previously sent messages in a dashboard list
  - [ ] Add form validations and more descriptive alert messages
  - [ ] Show pin locations of all found messages on map
  - [ ] User specific friends list
  - [ ] Ability to hide messages for multiple friends in one check in
  - [ ] A user will get a notification if they are getting closer or farther away from a message with consecutive check-ins (i.e. 'hotter'/'colder')
  - [ ] Reply back to messages to enable location-based conversation.
  - [ ] Prevent concurrent sessions for a single user
  - [ ] Mobile support

## Support and Contact Details

If you have any issues or questions, please email us at:
  - Paige: paw145@humboldt.edu


## Technologies used

1. **Ruby 2.5.1**
2. **Rails 5**
3. **JavaScript**
4. [**Google Maps API**](https://developers.google.com/maps/documentation/javascript/tutorial)

## Known Bugs
- No known bugs

## Legal

Copyright (c) 2018 Paige Williams, Ben Kirby, Jared Reando, Ralph Perdomo
