# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)


ActiveRecord::Base.transaction do 
  Server.destroy_all
  User.destroy_all
  Channel.destroy_all
  Subscription.destroy_all
  Message.destroy_all

  demo_user1 = User.create!(username:'carlos', email:'carlos', password:'carlos')
  demo_user2 = User.create!(username:"kihoon", email:"kihoon", password:"kihoon")

  demo_server1 = Server.create!(server_title: 'demo1', host_id: User.find(1).id)
  demo_server2 = Server.create!(server_title: 'demo2', host_id: User.find(1).id)
  demo_server3 = Server.create!(server_title: 'demo3', host_id: User.find(1).id)

  Server.all.each do |server|
    Channel.create!(server_id: server.id, channel_title: "General")
    User.all.each do |user|
      Subscription.create!(user_id: user.id , server_id: server.id)
    end
  end


end