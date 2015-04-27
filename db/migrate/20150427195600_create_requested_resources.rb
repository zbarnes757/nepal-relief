class CreateRequestedResources < ActiveRecord::Migration
  def change
    create_table :requested_resources do |t|
      t.string :name
      t.integer :quantity
      t.string :urgency
      t.boolean :fulfilled, default: false
      t.belongs_to :beneficiary, index: true

      t.timestamps null: false
    end
  end
end
