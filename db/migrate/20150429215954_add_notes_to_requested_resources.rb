class AddNotesToRequestedResources < ActiveRecord::Migration
  def change
    add_column :requested_resources, :notes, :text
  end
end
