class DonorsController < ApplicationController

  def show
  	@donor = Donor.find(params[:id])
		unless @donor == current_donor
			redirect_to root_path
		end
  end

end
