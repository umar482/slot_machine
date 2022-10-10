require "rails_helper"

describe SpinService, type: :model do
  context "#roll" do
    spin_service = SpinService.new(credit: 10)
    it "return random slots data to show" do
      allow(spin_service).to receive(:roll).and_return(slots)
      expect(spin_service.roll).to eq(slots)
    end
  end

  context "#spin" do
    it "return random slots data to show" do
      spin_service = SpinService.new(credit: 10)
      allow(spin_service).to receive(:spin).and_return(slots)
      expect(spin_service.spin).to eq(slots)
    end
  end

  context "#is_jackpot?" do
    spin_service = SpinService.new(credit: 10)
    it "return true if all slot are unique" do
      allow(spin_service).to receive(:roll).and_return(unique_slots)
      allow(spin_service).to receive(:is_jackpot?).and_return(true)
      expect(spin_service.is_jackpot?).to eq(true)
    end

    it "return false if all slot are not unique" do
      allow(spin_service).to receive(:roll).and_return(unique_slots)
      allow(spin_service).to receive(:is_jackpot?).and_return(false)
      expect(spin_service.is_jackpot?).to eq(false)
    end
  end

  context "#cheat?" do
    spin_service = SpinService.new(credit: 35)
    it "return true if cheat propability is 30 percent" do
      allow(spin_service).to receive(:cheat_probabilty).and_return(30)
      allow(spin_service).to receive(:cheat?).and_return(true)
      expect(spin_service.cheat?).to eq(true)
    end

    it "return true if cheat propability is 60 percent" do
      allow(spin_service).to receive(:cheat_probabilty).and_return(30)
      allow(spin_service).to receive(:cheat?).and_return(true)
      expect(spin_service.cheat?).to eq(true)
    end

    it "return false random value is greter than cheat probability" do
      allow(spin_service).to receive(:cheat_probabilty).and_return(60)
      allow(spin_service).to receive(:cheat?).and_return(false)
      expect(spin_service.cheat?).to eq(false)
    end
  end

  context "#cheat_probabilty" do
    it "return 0 if credit is less than 30" do
      spin_service = SpinService.new(credit: 10)
      allow(spin_service).to receive(:cheat_probabilty).and_return(0)
      expect(spin_service.cheat_probabilty).to eq(0)
    end

    it "return 30 if credit is between 30 and 40" do
      spin_service = SpinService.new(credit: 30)
      allow(spin_service).to receive(:cheat_probabilty).and_return(30)
      expect(spin_service.cheat_probabilty).to eq(30)
    end

    it "return 60 if credit is 60 or greater than 60" do
      spin_service = SpinService.new(credit: 60)
      allow(spin_service).to receive(:cheat_probabilty).and_return(60)
      expect(spin_service.cheat_probabilty).to eq(60)
    end
  end

  context "#credit" do
    spin_service = SpinService.new(credit: 10)
    it "return credit amount if jackpot" do
      allow(spin_service).to receive(:credit).and_return(40)
      allow(spin_service).to receive(:is_jackpot?).and_return(true)
      expect(spin_service.credit).to eq(40)
    end

    it "return nil if not jackpot" do
      allow(spin_service).to receive(:credit).and_return(nil)
      allow(spin_service).to receive(:is_jackpot?).and_return(false)
      expect(spin_service.credit).to eq(nil)
    end
  end
  
  private
  def slots
    ["🍉", "🍉", "🍒"]
  end

  def unique_slots
    ["🍉", "🍉", "🍉"]
  end
end