class RequestedResource < ActiveRecord::Base
  include PublicActivity::Model
  tracked owner: Proc.new{ |controller, model| controller.current_beneficiary }

  # creates call backs for activity record

	belongs_to :beneficiary
	validates :name, :quantity, :urgency, presence: true
end
