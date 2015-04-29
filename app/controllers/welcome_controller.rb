class WelcomeController < ApplicationController
    def index
    @requested_resource = RequestedResource.all
  end
end
