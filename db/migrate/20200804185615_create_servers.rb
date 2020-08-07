class CreateServers < ActiveRecord::Migration[5.2]
  def change
    create_table :servers do |t|
      t.string :server_title, null:false
      t.integer :host_id, null:false
      t.timestamps
    end
    add_index :servers, :host_id 
    add_index :servers, [:server_title, :host_id], unique:true
  end
end
