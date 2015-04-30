class DonorsController < ApplicationController

  def show
  	@donor = Donor.find(params[:id])
		redirect_to root_path unless @donor == current_donor
  end

end
