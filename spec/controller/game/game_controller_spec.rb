require 'rails_helper'

describe GameController, type: :controller do
  describe "GET index" do
    it "renders the index template" do
      get :index
      expect(response).to be_successful
    end
  end
end
