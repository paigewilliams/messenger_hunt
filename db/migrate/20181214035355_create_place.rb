class CreatePlace < ActiveRecord::Migration[5.2]
  def change
    create_table :places do |t|
      t.float :lat
      t.float :long
    end
  end
end
