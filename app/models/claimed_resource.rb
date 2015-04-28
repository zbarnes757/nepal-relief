class ClaimedResource < ActiveRecord::Base
  belongs_to :donor
  belongs_to :requested_resource
end
