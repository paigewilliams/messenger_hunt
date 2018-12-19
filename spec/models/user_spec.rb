
require 'rails_helper'

RSpec.describe User do
  it "sends a message between users" do
    user = User.new({name: 'user', password: 'password'})
    user.save
    user2 = User.new({name: 'user2', password: 'password'})
    user2.save
    user3 = User.new()
    message = Message.new({to_user: "#{user2.id}", from_user: "#{user.id}", body: "Here is a message.", read: false, msg_lat: 45.508597, msg_long: -122.649461})
    message.save
    expect(user.messages.length).to(eq(1))
  end

end
