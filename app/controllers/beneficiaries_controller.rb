class BeneficiariesController < ApplicationController

	def index
	  @beneficiaries = Beneficiary.all
    if request.xhr?
      render :json => @beneficiaries
    end
	end

	def show
		@beneficiary = Beneficiary.find(params[:id])
	end

end
