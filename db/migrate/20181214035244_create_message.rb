class CreateMessage < ActiveRecord::Migration[5.2]
  def change
    create_table :messages do |t|
      t.integer :point_id
      t.integer :to_user
      t.integer :from_user
      t.string :body
      t.boolean :read
    end
  end
end
