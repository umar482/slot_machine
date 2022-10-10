class SpinService
  attr_accessor :credit, :new_roll
  SLOTS = {
    "🍒" => 10,
    "🍋" => 20,
    "🍊" => 30,
    "🍉" => 40,
  }

  def initialize(credit:)
    @credit = credit
  end

  
  def spin
    roll
    if is_jackpot? && cheat?
      roll
    end
    new_roll
  end

  def roll
    @new_roll = ([1, 2, 3]).map { SLOTS.keys.shuffle[0, 1].join }
  end

  def is_jackpot?
    new_roll.uniq.size == 1
  end

  def cheat_probabilty
    return 30 if credit >= 40 && credit <= 60
    return 60 if credit > 60
    return 0
  end

  def cheat?
    rand <= cheat_probabilty / 100.0
  end

  def credit
    SLOTS[new_roll.first] if is_jackpot?
  end
end