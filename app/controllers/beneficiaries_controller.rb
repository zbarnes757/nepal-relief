class BeneficiariesController < ApplicationController

	def index
		@beneficiaries = Beneficiary.all
		render json: @beneficiaries
	end

end
