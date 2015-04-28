class BeneficiariesController < ApplicationController

	def index
		@beneficiaries = Beneficiary.all
		render json: @beneficiaries
	end

	def show
		@beneficiary = Beneficiary.find(params[:id])
	end

end
