class RequestedResourcesController < ApplicationController

  def index
    @requested_resource = RequestedResource.all
  end
end
