class FruitsSymbols
  attr_reader :name

  SYMBOL_NAMES_AND_VALUES = {
    "🍒" => 10,
    "🍋" => 20,
    "🍊" => 30,
    "🍉" => 40,
  }

  def self.all
    SYMBOL_NAMES_AND_VALUES.keys
  end

  def initialize(name)
    @name = name
  end

  def value
    FruitsSymbols::SYMBOL_NAMES_AND_VALUES[name]
  end
end
