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
