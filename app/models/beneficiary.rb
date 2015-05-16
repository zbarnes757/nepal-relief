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
    list_of_donors = [];
    self.requested_resources.each do |resource|
      resource.claimed_resources.each do |claimed|
        list_of_donors << claimed.donor.id
      end
    end
    list_of_donors.uniq.length
  end

  def all_fulfilled?
    if self.requested_resources.find_by(fulfilled: false)
      return false
    else
      return true
    end
  end

end
