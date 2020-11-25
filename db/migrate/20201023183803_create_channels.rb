class CreateChannels < ActiveRecord::Migration[5.2]
  def change
    create_table :channels do |t|
      t.string   :ch_title, null: false
      t.integer  :server_id
      t.timestamps
    end
  end
end
