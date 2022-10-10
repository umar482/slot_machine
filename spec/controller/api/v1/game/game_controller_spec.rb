require 'rails_helper'

describe Api::V1::GameController, type: :controller do
  describe "#initialize" do
    it "successfully renders" do
      get :initialize

      expect(response).to be_successful
    end

    it "get credit in response" do
      get :initialize
      parsed_response = JSON.parse(response.body)

      expect(parsed_response["credit"]).to eq(10)
    end
  end
  
  describe "#spin" do
    it "successfully renders" do
      get :spin, params: {}, session: valid_session

      expect(response).to be_successful
    end

    it "get updated credit and slots data in response" do
      get :spin, params: {}, session: valid_session

      parsed_response = JSON.parse(response.body)

      expect(parsed_response["credit"]).to eq(9)
      expect(parsed_response["slots"].size).to eq(3)

    end

    it "get no credit in response" do
      get :spin, params: {}, session: {credit: 0}

      parsed_response = JSON.parse(response.body)

      expect(parsed_response["message"]).to eq("You need to purchase credit to play")
    end
  end

  describe "#cashout" do
    it "successfully renders" do
      get :cashout

      expect(response).to be_successful
    end

    it "get updated credit in response" do
      get :cashout
      parsed_response = JSON.parse(response.body)

      expect(parsed_response["credit"]).to eq(0)
    end
  end

  private
  
  def valid_session
    { credit:10 }
  end
end
