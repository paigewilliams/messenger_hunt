require 'rails_helper'


describe "the add a new user" do
  it "adds a new user to the database" do
    visit signup_path
    fill_in 'user[name]', :with => 'User'
    fill_in 'user[password]', :with => 'password'
    fill_in 'user[password_confirmation]', :with => 'password'
    click_button 'Sign up'
    expect(page).to have_content 'Successful signup!'
  end

end

describe "the sign in path" do
  it "Sign in with an existing user" do
    visit signin_path
    user = User.new(:name => 'User', :password => '123')
    user.save
    fill_in 'name', :with => user.name
    fill_in 'password', :with => user.password
    click_button 'Continue'
    expect(page).to have_content 'New message'
  end

end

describe "the add a new message" do
  it "adds a new message to the database" do
    visit signin_path
    user = User.new(:name => 'User', :password => '123')
    user.save
    user2 = User.new(:name => 'User2', :password => '123')
    user2.save
    fill_in 'name', :with => user.name
    fill_in 'password', :with => user.password
    click_button 'Continue'
    click_link 'New message'
    select 'User2', :from => 'message[to_user]'
    fill_in 'message[body]', :with => 'hello there, friend'
    click_button 'Create Message'
    expect(page).to have_content 'Message successfully sent.'

  end

end

describe "the add a new message" do
  it "adds a new message to the database" do
    visit signin_path
    user = User.new(:name => 'User', :password => '123')
    user.save
    user2 = User.new(:name => 'User2', :password => '123')
    user2.save
    fill_in 'name', :with => user.name
    fill_in 'password', :with => user.password
    click_button 'Continue'
    click_link 'New message'
    select 'User2', :from => 'message[to_user]'
    fill_in 'message[body]', :with => 'hello there, friend'
    click_button 'Create Message'
    expect(page).to have_content 'Message successfully sent.'

  end

end


describe "the check-in to find message" do
  it "unlocks a hidden message on nearby check-in" do
    user = User.new({name: 'user', password: 'password'})
    user.save
    user2 = User.new({name: 'user2', password: 'password'})
    user2.save
    message = Message.new({to_user: "#{user2.id}", from_user: "#{user.id}", body: "Here is a message.", read: false, msg_lat: 45.520626, msg_long: -122.6795871})
    message.save
    visit signin_path
    fill_in 'name', :with => user2.name
    fill_in 'password', :with => user2.password
    click_button 'Continue'
    click_button 'Check In'
    expect(page).to have_content "You've unlocked a message!"
  end

end
