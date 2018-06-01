class AddIndexToUsers < ActiveRecord::Migration[5.1]
  def change
    remove_column :users, :username
    remove_column :users, :password_digest
    remove_column :users, :session_token
    add_column :users, :username, :string, null: false
    add_column :users, :password_digest, :string, null: false
    add_column :users, :session_token, :string, null: false
    add_index :users, :username
  end
end
