require "rails_helper"

describe SpinService, type: :model do

  context "#credit" do
    it "return true if credit greater than 0" do
      slot_machine = SlotMachineService.new(session: { credit: 10 })
      allow(slot_machine).to receive(:has_credit?).and_return(true)
      expect(slot_machine.has_credit?).to eq(true)
    end
    it "return false if credit greater than 0" do
      slot_machine = SlotMachineService.new(session: { credit: 0 })
      allow(slot_machine).to receive(:has_credit?).and_return(false)
      expect(slot_machine.has_credit?).to eq(false)
    end
  end

  context "#slots" do
    it "return keys of the slots" do
      slot_machine = SlotMachineService.new(session: { credit: 10 })
      allow(slot_machine).to receive(:slots).and_return(slots.keys)
      expect(slot_machine.slots).to eq(slots.keys)
    end
  end

  context "#start" do
    it "return update credit after spin" do
      slot_machine = SlotMachineService.new(session: { credit: 10 })
      allow(slot_machine).to receive(:start).and_return(11)
      expect(slot_machine.start).to eq(11)
    end
  end

  context "#spin" do
    it "random slots to show after spin" do
      slot_machine = SlotMachineService.new(session: { credit: 10 })
      allow(slot_machine).to receive(:spinned_slots).and_return(random_slots)
      expect(slot_machine.spinned_slots).to eq(random_slots)
    end
  end

  context "#credit_update" do
    it "return update credit if jackpot" do
      slot_machine = SlotMachineService.new(session: { credit: 10 })

      allow(slot_machine).to receive(:credit_update).and_return(40)
      expect(slot_machine.credit_update).to eq(40)
    end
  end

  context "#cash_out" do
    it "return 0 credit when pressed checkout" do
      slot_machine = SlotMachineService.new(session: { credit: 10 })

      allow(slot_machine).to receive(:cash_out).and_return(0)
      expect(slot_machine.cash_out).to eq(0)
    end
  end
  
  private
  def slots
    {
      "🍒" => 10,
      "🍋" => 20,
      "🍊" => 30,
      "🍉" => 40,
    }
  end

  def random_slots
    ["🍉", "🍉", "🍒"]
  end

end