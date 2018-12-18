# Messenger Hunt

#### December 19th, 2018

## Contributors

### _Paige Williams, Ben Kirby, Jared Reando, Ralph Perdomo_ 

## Description

Messenger Hunt is a geolocation social netwoking site. The user can set their location and can leave messages at specific locations. The recepient of a message can read their messages if they set their location within 1/10th of a mile of a message.

## Configuration and Design

(public/db_schema.png)

## Specs  

View specs [here](https://github.com/paigewilliams/providore-website/tree/master/spec/models).

## MVP

 [x] Unique user authentication
 [x] Ability to send a message to another user
 [x] Ability to save a message at a specific location on a dynamic map
 [x] Ability to 'check-in' at a specific location on a dynamic map
 [x] Recipient of a message can read their message when within a certain distance of a message

## Extra Functionality
 [x] Link a message with map marker location
 [ ] Ability to set public messages
 [ ] A user specific friends list
 [ ] A user will get a notification if they are getting closer or farther away from a message with consecutive check-in's


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

## Support and Contact Details

If you have any issues or questions, please email me at paw145@humboldt.edu

## Technologies used

1. **Ruby 2.5.1**
2. **Rails 5**
3. **JavaScript**
4. [**Google Maps API**](https://developers.google.com/maps/documentation/javascript/tutorial)

## Legal

Copyright (c) 2018 Paige Williams
