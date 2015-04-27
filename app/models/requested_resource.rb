class RequestedResource < ActiveRecord::Base
	belongs_to :beneficiary
	validates :name, :quantity, :urgency, presence: true
end
