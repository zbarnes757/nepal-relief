class RequestedResourcesController < ApplicationController
  def show
  end

  def create
    p "%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%"
    p params
    p "%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%"

    resource = RequestedResource.new(resource_params)
    if resource.save
      current_beneficiary.requested_resources << resource
      p "saved"
      redirect_to action: "show", id: current_beneficiary.id
    else
      p "didn't save"
      redirect_to action: "show", id: current_beneficiary.id
    end
  end


  private

  def resource_params
    params.require(:beneficiary_requested_resource).permit(:name, :quantity, :urgency)
  end


end