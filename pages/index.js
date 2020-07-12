import React, { useState } from 'react'
import App from './_app'
import { Card, MainReviews, MainCardHeader, UserCard, CompanyPill, ReviewButton, ErrorBoundary, Progress, Button } from 'components/blocks'
import DefaultLayout from 'components/layout/DefaultLayout'
import { getKey, getUser } from 'utils'
import { UserIcon } from 'components/vectors'
import { toggleTokenRevealModal, addSectors, addCompanies, addReviews } from '@actions'
import { useDispatch, useSelector } from 'react-redux'
import APIClient from '../utils/APIClient'
import PropTypes from 'prop-types'

export function Home ({ reviews, sectors, companies }) {
  const dispatch = useDispatch()
  dispatch(addReviews(reviews)) // add pre-fetched reviews
  dispatch(addSectors(sectors)) // add pre-fetched sectors
  dispatch(addCompanies(companies)) // add pre-fetched companies
  const toggleModal = (value) => dispatch(toggleTokenRevealModal(value))
  const loggedIn = useSelector(state => state.loggedIn)
  const [_reviews, reviewsSet] = useState(reviews)
  const [loading, loadingSet] = useState(false)
  const [pageNumber, pageNumberSet] = useState(1)
  const [pageSize, pageSizeSet] = useState(10)
  const [isLastPage, isLastPageSet] = useState(false)
  const fetchMoreReview = () => {
    loadingSet(true)
    const page = {
      size: pageSize,
      page: pageNumber + 1
    }
    APIClient.get(`reviews/${page.size}/${page.page}`)
      .then(response => {
        const metadata = response.data.data.metadata
        loadingSet(false)
        pageNumberSet(metadata.page)
        isLastPageSet(metadata.last)
        reviewsSet([..._reviews].concat(response.data.data.reviews))
      })
  }

  return (
    <DefaultLayout>
      <main className="w-screen pt-5 pb-16 px-4 xl:px-0">
        <div className="sm:max-w-full mx-auto md:max-w-screen-lg">
          <div className="grid grid-cols-1 md:grid-cols-3 md:gap-4">
            <div className="col-span-2">
              <div className="flex flex-row md:hidden mb-3">
                <div className="flex-grow">
                  <ReviewButton />
                </div>
                { (getUser() || loggedIn) && (
                  <div className="button button--primary ml-3">
                    <div onClick={() => { toggleModal(true) }}>
                      <UserIcon width={18} height={18} fill={'#fff'} />
                    </div>
                  </div>
                )}
              </div>
              <div className="flex flex-row flex-wrap mb-3 md:hidden">
                {
                  companies && companies.slice(0, 6).map(company => <CompanyPill key={getKey()} name={company.name} />)
                }
              </div>
              <Card>
                <MainCardHeader />
                <div className="w-full mt-2">
                  { _reviews && _reviews.length > 0 && <MainReviews reviews={_reviews} />}
                  { (!reviews || reviews.length < 1) && <ErrorBoundary message="No Reviews yet"/>}
                </div>
              </Card>
              {
                loading ? <Progress /> : !isLastPage && <div className="mx-auto w-1/2 md:w-1/3 mt-4"><Button label="Load More" onClick={fetchMoreReview} /></div>
              }
            </div>
            <div className="hidden md:flex flex-col col-span-1">
              <div>
                { (getUser() || loggedIn) && <UserCard/>}
              </div>
              <Card>
                <div className="">
                  <div className="w-full px-3 py-2 border-b-2 border-gray-700 mb-2 flex flex-row justify-between items-center">
                    <h6 className="text-lg text-white">Popular Companies</h6>
                  </div>
                  <div className="flex flex-row flex-wrap mb-3 px-2">
                    {
                      companies && companies.slice(0, 6).map(company => <CompanyPill key={getKey()} name={company.name} />)
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

Home.propTypes = {
  sectors: PropTypes.array.isRequired,
  companies: PropTypes.array.isRequired,
  reviews: PropTypes.array.isRequired
}

export default function DefaultApp (props) {
  return <App Component={Home} pageProps={props} />
}

export async function getStaticProps () {
  // pre-fetch reviews
  const page = {
    size: '10',
    page: '1'
  }
  const reviewsResource = await APIClient.get(`reviews/${page.size}/${page.page}`)
  const reviews = await reviewsResource.data.data.reviews
  // pre-fetch sector
  const sectorResource = await APIClient.get('sectors/all')
  const sectors = sectorResource.data.data

  // pre-fetch companies

  const companyResource = await APIClient.get('companies/all')
  const companies = companyResource.data.data

  return {
    props: {
      reviews,
      sectors,
      companies
    }
  }
}
