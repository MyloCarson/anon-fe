import React, { useState } from 'react'
import { SearchIcon } from 'components/vectors/index'
import Link from 'next/link'
import { toggleCreateReviewModal, toggleCreateAccountModal } from '../../../actions'
import { useDispatch } from 'react-redux'

const Header = () => {
  const dispatch = useDispatch()
  const openReviewModal = (value) => dispatch(toggleCreateReviewModal(value))
  const openAccountModal = value => dispatch(toggleCreateAccountModal(value))
  const searchClass = ''
  const searchHasClicked = false

  const [s, ss] = useState(false)

  const handleSearchClick = () => {
    ss(!s)
  }
  return (
    <header className="max-container">
      <div className="header-wrapper">
        <div className="main-container">
          <div className="header px-4 md:px-1 xl:px-0  ">
            <Link href="/">
              <a className="header-title mr-4">ANON</a>
            </Link>
            <nav className="nav">
              <div className="nav-item">
                <label htmlFor="search" className="sr-only">Search:</label>
                <input type="text" name="search" className={`md:w-56 px-2 nav-search-input ${s ? 'active' : 'inactive'}`} placeholder="Search for company"/>
              </div>
              <div className="nav-item cursor-pointer" onClick={() => {
                handleSearchClick()
              }}>
                <SearchIcon />
              </div>
              <div className="nav-item hidden md:block">
                <div className="button button--primary" onClick={() => { openAccountModal(true) }}>REVIEW COMPANY</div>
              </div>
            </nav>

          </div>
        </div>
      </div>
    </header>
  )
}

export default Header
