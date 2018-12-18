class MessagesController < ApplicationController
  before_action :set_message, only: [:show, :destroy]

  def index
    @checkin = [session[:lat].to_f, session[:long].to_f]
    @inbox = []
    @outbox = []

    @has_read_history = []



    # @inbox = Message.where("to_user = #{current_user.id} AND read='true'")

    if current_user
      @inbox = Message.where("to_user = #{current_user.id}")
      @outbox = Message.where("from_user = #{current_user.id}")
    end

    @close_msg = []

    @inbox.each do |coor|
      distance = Haversine.distance(@checkin, [coor.msg_lat, coor.msg_long]).to_miles
      if distance < 0.1
        coor.read = 'true'
        coor.save
        @close_msg.push(coor)
        # binding.pry
        end
      end
  end



  def show
    @message.read = true
    @message.save

  end

  def new
    # @place = Place.new

    @message = current_user.messages.new
  end

  def create
    @message = current_user.messages.new(message_params)
      if @message.save
        redirect_to user_messages_path, notice: 'Message successfully sent.'
      else
        render :new
      end
  end

  def destroy
    @message.destroy
    redirect_to user_messages_path, notice: 'Message successfully un-sent.'
  end

  private
  def set_message
    @message = Message.find(params[:id])
  end

  def message_params
    params[:message][:read]=false
    params.require(:message).permit(:to_user, :body, :read, :msg_lat, :msg_long)
  end

end
