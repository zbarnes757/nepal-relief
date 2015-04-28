class RequestedResource < ActiveRecord::Base
  has_many :claimed_resources
	belongs_to :beneficiary
	validates :name, :quantity, :urgency, presence: true

  def quantity_remaining
    amount_left = self.quantity
    self.claimed_resources.each do |resource|
      amount_left -= resource.quantity
    end
    amount_left
     # = self.quantity - self.claimed_resources[0].quantity
  end
end
