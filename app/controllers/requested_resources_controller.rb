class RequestedResourcesController < ApplicationController
  def show
  end

  def new
    @resource = RequestedResource.new()
  end

  def destroy
    p params
    RequestedResource.find(params[:id]).destroy
    redirect_to new_beneficiary_requested_resource_path(current_beneficiary)
  end

  def create
    p "%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%"
    p params
    p "%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%"

    resource = RequestedResource.new(resource_params)
    if resource.save
      current_beneficiary.requested_resources << resource
      p "saved"
      redirect_to new_beneficiary_requested_resource_path(current_beneficiary)
    else
      p "didn't save"
      redirect_to new_beneficiary_requested_resource_path(current_beneficiary)
    end
  end


  private

  def resource_params
    params.require(:requested_resource).permit(:name, :quantity, :urgency)
  end


end