class CreditService
  attr_accessor :session
  INITIAL_CREDIT = 10.freeze
  PER_ROLL_COST = 1.freeze

  def initialize(session)
    @session = session
  end

  def intialize_credit
    session[:credit] ||= INITIAL_CREDIT
  end

  def cash_out
    session[:credit] = 0
  end

  def update_credit(jackpot_credit)
   return session[:credit] = session[:credit] + jackpot_credit if jackpot_credit
   session[:credit] = session[:credit] - PER_ROLL_COST
  end
end
