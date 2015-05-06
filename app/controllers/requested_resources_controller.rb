class RequestedResourcesController < ApplicationController

  def index
    @requested_resource = RequestedResource.all
  end

  def show
    @requested_resource = RequestedResource.find(params[:id])
  end

  def new
    @resource = RequestedResource.new()
    beneficiary = Beneficiary.find(params[:beneficiary_id])
    redirect_to root_path unless current_beneficiary == beneficiary
  end

  def destroy
    p params
    RequestedResource.find(params[:id]).destroy
    redirect_to new_beneficiary_requested_resource_path(current_beneficiary)
  end

  def update

    resource = RequestedResource.find(params[:beneficiary_id])
    if params[:fulfilled] == 'Yes'
      fulfilled = true
      Keen.publish(:resource_request, {fulfilled: true})
    else
      fulfilled = false
    end
    resource.update_attributes(
      name: params[:name],
      quantity: params[:quantity],
      urgency: params[:urgency],
      notes: params[:notes],
      fulfilled: fulfilled
      )

    render json: resource

  end

  def create
    resource = RequestedResource.new(resource_params)
    if resource.save
      current_beneficiary.requested_resources << resource
      Keen.publish(:resource_request, {fulfilled: false})
      redirect_to new_beneficiary_requested_resource_path(current_beneficiary)
    else
      redirect_to new_beneficiary_requested_resource_path(current_beneficiary)
    end
  end


  private

  def resource_params
    params.require(:requested_resource).permit(:name, :quantity, :urgency, :notes, :fulfilled)
  end


end

