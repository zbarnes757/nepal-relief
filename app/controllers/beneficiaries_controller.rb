class BeneficiariesController < ApplicationController

	def index
	  @beneficiaries = Beneficiary.all
    if request.xhr?
      render :json => @beneficiaries
    end
	end

end