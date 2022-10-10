require "rails_helper"

describe SpinService, type: :model do

  context "#intialize_credit" do
    it "return credit that is in session" do
      credit_service = CreditService.new(session: { credit: 10 })
      allow(credit_service).to receive(:intialize_credit).and_return(10)
      expect(credit_service.intialize_credit).to eq(10)
    end
  end

  context "#cash_out" do
    it "update credit in session to zero" do
      credit_service = CreditService.new(session: { credit: 10 })
      allow(credit_service).to receive(:cash_out).and_return(0)
      expect(credit_service.cash_out).to eq(0)
    end
  end

  context "#update_credit" do
    it "increment session credit if jackpot" do
      credit_service = CreditService.new(session: { credit: 10 })
      allow(credit_service).to receive(:update_credit).and_return(40)
      expect(credit_service.update_credit(40)).to eq(40)
    end

    it "decrement session credit if jackpot" do
      credit_service = CreditService.new(session: { credit: 10 })
      allow(credit_service).to receive(:update_credit).and_return(9)
      expect(credit_service.update_credit(nil)).to eq(9)
    end
  end
end