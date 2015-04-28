class RequestedResource < ActiveRecord::Base
  has_many :claimed_resources
	belongs_to :beneficiary
	validates :name, :quantity, :urgency, presence: true
end
