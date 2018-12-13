class PostsController < ApplicationController
  before_action :set_post, only: [:show, :edit, :update, :destroy]

  # GET /posts
  # GET /posts.json
  def index
    @inbox_messages = []
    @sent_messages = []
    if current_user
      @inbox_messages = Post.where("send_to = #{session[:user_id]}")
      @sent_messages = Post.where("created_by = #{session[:user_id]}")
    end
  end

  # GET /posts/1
  # GET /posts/1.json
  def show
  end

  # GET /posts/new
  def new
    @user_select = user_select

    @post = Post.new


    # @User.all.each
    #   {|user| [user.email, user.id]
    # # @users = @User.all
  end

  def user_select
    users = User.all
    users_array = []
    users.each do |user|
      temp_array = []
      temp_array.push(user.email)
      temp_array.push(user.id)
      users_array.push(temp_array)
    end
    users_array
  end

  # GET /posts/1/edit
  def edit
  end

  # POST /posts
  # POST /posts.json
  def create

    # this feesl hackey. refactor......LATER.
    temp_params = post_params
    temp_params[:created_by] = session[:user_id]
    # binding.pry
    @post = Post.new(temp_params)
    respond_to do |format|
      if @post.save
        format.html { redirect_to @post, notice: 'Post was successfully created.' }
        format.json { render :show, status: :created, location: @post }
      else
        format.html { render :new }
        format.json { render json: @post.errors, status: :unprocessable_entity }
      end
    end
  end

  # PATCH/PUT /posts/1
  # PATCH/PUT /posts/1.json
  def update
    respond_to do |format|
      if @post.update(post_params)
        format.html { redirect_to @post, notice: 'Post was successfully updated.' }
        format.json { render :show, status: :ok, location: @post }
      else
        format.html { render :edit }
        format.json { render json: @post.errors, status: :unprocessable_entity }
      end
    end
  end

  # DELETE /posts/1
  # DELETE /posts/1.json
  def destroy
    @post.destroy
    respond_to do |format|
      format.html { redirect_to posts_url, notice: 'Post was successfully destroyed.' }
      format.json { head :no_content }
    end
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_post
      @post = Post.find(params[:id])
    end

    # Never trust parameters from the scary internet, only allow the white list through.
    def post_params
      params.require(:post).permit(:title, :body, :send_to)
    end
end
