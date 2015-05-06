class ClaimedResourcesController < ApplicationController

  def create
    requested_resource = RequestedResource.find(params[:requested_resource_id])
    claimed_resource = ClaimedResource.new(claimed_resource_params)
    if claimed_resource.save!
      current_donor.claimed_resources << claimed_resource
      requested_resource.claimed_resources << claimed_resource
    end
    redirect_to beneficiary_requested_resource_path(requested_resource.beneficiary, requested_resource)
  end

  private

  def claimed_resource_params
    params.require(:claimed_resource).permit(:quantity)
  end

end
