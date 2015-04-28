require 'rails_helper'

RSpec.describe RequestedResource, type: :model do
  it { should validate_presence_of :name }
  it { should validate_presence_of :quantity }
  it { should validate_presence_of :urgency }
  it { should belong_to :beneficiary }
end
