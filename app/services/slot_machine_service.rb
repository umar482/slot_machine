class SlotMachineService
  attr_accessor :session, :spin_service, :spin

  def initialize(session)
    @session = session

  end

  def has_credit?
    session[:credit] > 0
  end

  def credit
    credit_service.intialize_credit
  end

  def slots
    SpinService::SLOTS.keys
  end

  def start
    @spin_service = SpinService.new(credit: credit)
    @spin = spin_service.spin
    credit_update
  end

  def spinned_slots
     spin
  end

  def credit_update
    credit_service.update_credit(spin_service.credit)
  end

  def cash_out
    credit_service.cash_out
  end

  
  private


  def credit_service
    CreditService.new(session)
  end
end
