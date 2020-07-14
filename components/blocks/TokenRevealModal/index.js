import React from 'react'
import { Modal } from 'components/blocks'
import PropTypes from 'prop-types'
import { toggleTokenRevealModal,toggleLoggedIn } from '@actions'
import { useDispatch, useSelector } from 'react-redux'
import { InfoIcon } from 'components/vectors'
import Wobble from 'react-reveal/Wobble'
import { getUser } from 'utils'
import moment from 'moment'
import {Button} from 'components/blocks'
import Router from 'next/router'

const TokenRevealModal = () => {
  const showTokenRevealModal = useSelector((state) => state.showTokenRevealModal)
  const dispatch = useDispatch()
  const closeModal = (value) => dispatch(toggleTokenRevealModal(value))
  const resetLoggedIn = () => dispatch(toggleLoggedIn(false))
  const user = getUser()
  const logout = () => {
    resetLoggedIn()
    localStorage.clear()
    Router.reload('/')
  }
  return (
    showTokenRevealModal
      ? (<Modal onClose={() => { closeModal(false) }}>
        <div className="md:w-1/2 mx-auto">
          <h3 className="text-2xl text-white">Your Anon Public User Data</h3>
          <div className="rounded bg-gray-800 p-4 my-8">
            <Wobble >
              <span className="block text-lg text-white text-center">{user.name}</span>
            </Wobble>
          </div>
          <div className="rounded bg-gray-800 p-4 my-8">
            <Wobble >
              <span className="block text-lg text-white text-center"> { user.verified ? 'Verified User' : 'Unverified User'}</span>
            </Wobble>
          </div>
          <div className="rounded bg-gray-800 p-4 my-8">
            <Wobble>
              <span className="block text-lg text-white text-center">Joined on {moment(user.createdAt).format('dddd, MMMM Do YYYY')}</span>
            </Wobble>
          </div>
          <Button label= "Logout"  onClick={logout} />
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
