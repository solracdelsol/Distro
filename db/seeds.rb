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

  demo_user1 = User.create!(username:'carlos', email:'carlos', password:'carlos')
  demo_user2 = User.create!(username:"kihoon", email:"kihoon", password:"kihoon")
  
  demo_server1 = Server.create!(server_title: 'demo1', host_id: demo_user1.id)
  demo_server2 = Server.create!(server_title: 'demo2', host_id: demo_user1.id)
  demo_server3 = Server.create!(server_title: 'demo3', host_id: demo_user1.id)


  demo_users = [demo_user1, demo_user2]
  demo_servers = [demo_server1, demo_server_2, demo_server3]

  demo_users.each do |user| 
    demo_servers.each do |server|
      Subscription.create!(user_id: user.id , server_id: server.id)
    end
  end

  demo_servers.each do |server|
    Channel.create!(server_id: server.id, channel_title: "General")
  end

end