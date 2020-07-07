import React from 'react'
import { Modal } from 'components/blocks'
import PropTypes from 'prop-types'
import { toggleTokenRevealModal } from '../../../actions'
import { useDispatch, useSelector } from 'react-redux'
import { InfoIcon } from 'components/vectors'
import Wobble from 'react-reveal/Wobble'

const TokenRevealModal = () => {
  const showTokenRevealModal = useSelector((state) => state.showTokenRevealModal)
  const dispatch = useDispatch()
  const closeModal = (value) => dispatch(toggleTokenRevealModal(value))
  return (
    showTokenRevealModal
      ? (<Modal onClose={() => { closeModal(false) }}>
        <div className="md:w-1/2 mx-auto">
          <h3 className="text-2xl text-white">Your Anon Token</h3>
          <div className="rounded bg-gray-800 p-4 my-8">
            <Wobble >
              <span className="block text-lg text-white text-center">78BD234</span>
            </Wobble>
          </div>
          <div className="flex flex-row mt-24">
            <InfoIcon width={24} height={24} fill="#fff" />
            <p className="text-sm text-white  ml-4">Keep your token safe, as it allows you reuse this anon account, together with your secret question and answer.</p>
          </div>
        </div>
      </Modal>) : <></>
  )
}

TokenRevealModal.propTypes = {}

export default TokenRevealModal
