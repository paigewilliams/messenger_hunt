class DropTablePlaces < ActiveRecord::Migration[5.2]
  def change
    add_column :messeges, :msg_lat, :decimal
    add_column :messeges, :msg_long, :decimal

    remove_column :messeges, :point_id
  end

  drop_table :places
end
