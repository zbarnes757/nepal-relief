class Beneficiary < ActiveRecord::Base

  has_many :requested_resources

  # Include default devise modules. Others available are:
  # :confirmable, :lockable, :timeoutable and :omniauthable
  devise :database_authenticatable, :registerable,
         :recoverable, :rememberable, :trackable, :validatable
  validates :name, :address, :contact_name, :contact_number, :email, presence: true
  validates :name, uniqueness: true
  has_many :requested_resources

  def count_donors
    # self.requested_resources[0].claimed_resources[0].donor
    num_of_donors = 0
    self.requested_resources.each do |resource|
      resource.claimed_resources.each do |claimed|
        num_of_donors += 1 if claimed.donor
      end
    end
    num_of_donors
  end

end
