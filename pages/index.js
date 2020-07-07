import React from 'react'
import App from './_app'
import { Card, ReviewItem, MainCardHeader, UserCard, CompanyPill } from 'components/blocks'
import DefaultLayout from 'components/layout/DefaultLayout'
import { getKey } from 'utils'
import { KeyIcon } from 'components/vectors'
import { toggleCreateReviewModal, toggleCreateAccountModal, toggleTokenRevealModal } from '../actions'
import { useDispatch } from 'react-redux'

export function Home () {
  const dispatch = useDispatch()
  const openReviewModal = (value) => dispatch(toggleCreateReviewModal(value))
  const openAccountModal = value => dispatch(toggleCreateAccountModal(value))
  const toggleModal = (value) => dispatch(toggleTokenRevealModal(value))

  return (
    <DefaultLayout>
      <main className="w-screen pt-5 pb-16 px-4 xl:px-0">
        <div className="sm:max-w-full mx-auto md:max-w-screen-lg">
          <div className="grid grid-cols-1 md:grid-cols-3 md:gap-4">
            <div className="col-span-2">
              <div className="flex flex-row md:hidden mb-3">
                <div className="button button--primary flex-grow" onClick={() => { openAccountModal(true) }}>REVIEW COMPANY</div>
                <div className="button button--primary ml-3">
                  <div onClick={() => { toggleModal(true) }}>
                    <KeyIcon width={18} height={18} fill={'#fff'} />
                  </div>
                </div>
              </div>
              <div className="flex flex-row flex-wrap mb-3 md:hidden">
                {
                  ['Konga', 'Jumia', 'MTN Nigeria', 'CarryFirst', 'Paystack', 'HNG'].map(name => <CompanyPill key={getKey()} name={name} />)
                }
              </div>
              <Card>
                <MainCardHeader />
                <div className="w-full mt-2">
                  {
                    [1, 22, 13, 894, 5, 64, 7, 8, 239].map(num => (<ReviewItem key={getKey()} comments={num} />))
                  }
                </div>
              </Card>
            </div>
            <div className="hidden md:flex flex-col col-span-1">
              <div className="mb-4">
                <UserCard/>
              </div>
              <Card>
                <div className="">
                  <div className="w-full px-3 py-2 border-b-2 border-gray-700 mb-2 flex flex-row justify-between items-center">
                    <h6 className="text-lg text-white">Popular Companies</h6>
                  </div>
                  {/* <ul className="px-3 py-3">
                    {
                      ['Konga', 'Jumia', 'MTN Nigeria', 'CarryFirst', 'Paystack', 'HNG'].map(name => <PopularCompany key={getKey()} name={name} />)
                    }
                  </ul> */}

                  <div className="flex flex-row flex-wrap mb-3 px-2">
                    {
                      ['Konga', 'Jumia', 'MTN Nigeria', 'CarryFirst', 'Paystack', 'HNG'].map(name => <CompanyPill key={getKey()} name={name} />)
                    }
                  </div>

                </div>
              </Card>
            </div>
          </div>
        </div>
      </main>
    </DefaultLayout>
  )
}

export default function DefaultApp (props) {
  return <App Component={Home} pageProps={props} />
}
