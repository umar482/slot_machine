class Api::V1::GameController < ApplicationController

  def intailize
    slot_machine = SlotMachineService.new(session)
    render json: { credit: slot_machine.credit }
  end

  def spin
    slot_machine = SlotMachineService.new(session)
    return  no_credit unless slot_machine.has_credit?
    slot_machine.start
    render json: {credit: session[:credit], slots: slot_machine.spinned_slots }, status: :ok
  end

  def cashout
    SlotMachineService.new(session).cashout
    render json: { credit: 0 }
  end

  private


  def no_credit
    render json:{message: "You need to purchase credit to play"}, status: :payment_required
  end


end
