require 'rails_helper'

RSpec.describe Beneficiary, type: :model do
	it { should validate_presence_of :name }
	it { should validate_uniqueness_of :name }
	it { should validate_presence_of :address }
	it { should validate_presence_of :latitude }
	it { should validate_presence_of :longitude }
	it { should validate_presence_of :contact_name }
	it { should validate_presence_of :email }
	it { should validate_presence_of :contact_number }
	it { should have_many :requested_resources }
end
