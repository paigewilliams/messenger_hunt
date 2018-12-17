class ChangeMessege < ActiveRecord::Migration[5.2]
  def change
    rename_table :messeges, :messages
  end
end
