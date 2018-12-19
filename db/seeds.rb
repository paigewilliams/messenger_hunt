# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)
users = ['User_1', 'User_2']

users.each do |user|
  new_user = User.new()
  new_user.name = user
  new_user.password = "password"
  new_user.save
end

db_users = User.all

check_ins = [["Ladd's Addition", 45.508597, -122.649289], ["Portland Art Museum", 45.516175, -122.683278], ["The Top of Mount Tabor", 45.512326, -122.592812], ["Vista House", 45.539806, -122.244254], ["The Central Park Zoo", 40.767828, -73.971787]]

db_users.length.times do |time|
  not_me_users = User.where("id != #{db_users[time].id}")
    not_me_users.each do |not_me|
      check_ins.each do |check_in|
        message = Message.new({to_user: not_me.id, from_user: db_users[time].id, body: "Hello from #{check_in[0]}!", read: false, msg_lat: check_in[1], msg_long: check_in[2]})
        message.save
    end
  end
end
