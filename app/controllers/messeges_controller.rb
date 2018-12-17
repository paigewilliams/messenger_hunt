class MessegesController < ApplicationController
  before_action :set_messege, only: [:show, :destroy]

  def index
    @inbox = []
    @outbox = []
    if current_user
      @inbox = Messege.where("to_user = #{current_user.id}")
      @outbox = Messege.where("from_user = #{current_user.id}")
    end
  end

  def show
    @messege.read = true
    @messege.save
  end

  def new
    @messege = current_user.messeges.new
  end

  def create
    @messege = current_user.messeges.new(messege_params)
      if @messege.save
        redirect_to user_messeges_path, notice: 'Messege successfully sent.'
      else
        render :new
      end
  end

  def destroy
    @messege.destroy
    redirect_to user_messeges_path, notice: 'Messege successfully un-sent.'
  end

  private
  def set_messege
    @messege = Messege.find(params[:id])
  end

  def messege_params
    params[:messege][:read]=false
    params.require(:messege).permit(:to_user, :body, :read, :msg_lat, :msg_long)
  end

end
