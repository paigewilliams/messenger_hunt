class RenameMessegesTable < ActiveRecord::Migration[5.2]
  def change
    rename_table :messages, :messeges

  end
end
