class Beneficiary < ActiveRecord::Base

  has_many :requested_resources

  # Include default devise modules. Others available are:
  # :confirmable, :lockable, :timeoutable and :omniauthable
  devise :database_authenticatable, :registerable,
         :recoverable, :rememberable, :trackable, :validatable
  validates :name, :address, :latitude, :longitude, :contact_name, :contact_number, presence: true
  validates :name, uniqueness: true
  has_many :requested_resources
end
