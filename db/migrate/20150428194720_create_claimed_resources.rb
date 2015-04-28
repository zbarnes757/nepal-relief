class CreateClaimedResources < ActiveRecord::Migration
  def change
    create_table :claimed_resources do |t|
      t.integer :requested_resource_id, index: true
      t.integer :donor_id, index: true
      t.integer :quantity

      t.timestamps null: false
    end
  end
end
