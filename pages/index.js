import React, { useState, useEffect } from 'react'
import App from './_app'
import { Card, MainReviews, MainCardHeader, UserCard, CompanyPill, ReviewButton, ErrorBoundary, Progress, Button, ReviewItem } from 'components/blocks'
import DefaultLayout from 'components/layout/DefaultLayout'
import { getKey, getUser } from 'utils'
import { UserIcon, SignOutIcon } from 'components/vectors'
import { toggleTokenRevealModal, addSectors, addCompanies, addReviews } from '@actions'
import { useDispatch, useSelector } from 'react-redux'
import APIClient from '../utils/APIClient'
import PropTypes from 'prop-types'
import socketIOClient from 'socket.io-client'
import axios from 'axios'

export function Home () {
  const dispatch = useDispatch()

  const storeCompanies = (companies) => dispatch(addCompanies(companies)) // add pre-fetched companies
  const storeReviews = (reviews) => dispatch(addReviews(reviews)) // add pre-fetched reviews
  const storeSectors = (sectors) => dispatch(addSectors(sectors)) // add pre-fetched sectors
  // dispatch(addCompanies(companies)) // add pre-fetched companies
  const toggleModal = (value) => dispatch(toggleTokenRevealModal(value))
  const loggedIn = useSelector(state => state.loggedIn)

  const [reviews, reviewsSet] = useState(useSelector( state => state.reviews))
  const [companies, companiesSet] = useState([])
  const [loading, loadingSet] = useState(true)
  const [loadingCompanies, loadingCompaniesSet] = useState(true)
  const [pageNumber, pageNumberSet] = useState(1)
  const [pageSize, pageSizeSet] = useState(10)
  const [isLastPage, isLastPageSet] = useState(false)
  const [filterUrl, setFilterUrl] = useState('reviews')
  const fetchMoreReview = () => {
    loadingSet(true)
    const page = {
      size: pageSize,
      page: pageNumber + 1
    }
    APIClient.get(`${filterUrl}/${page.size}/${page.page}`)
      .then(response => {
        const metadata = response.data.data.metadata
        loadingSet(false)
        pageNumberSet(metadata.page)
        isLastPageSet(metadata.last)
        reviewsSet([...reviews].concat(response.data.data.reviews))
      })
  }
  useEffect(() => {
    const socket = socketIOClient(process.env.NEXT_PUBLIC_SOCKET_ENDPOINT)
    socket.on('new-review', response => {
      // console.log(reviews)
      reviewsSet([response].concat(reviews))
    })

    // CLEAN UP THE EFFECT
    return () => {
      socket.disconnect()
    }
  }, [reviews])
  
  useEffect(() => {
    loadingSet(true)
    const requestOne = APIClient.get('companies/all')
    const page = {
      size: '10',
      page: '1'
    }
    const requestTwo =  APIClient.get(`reviews/${page.size}/${page.page}`)
    const requestThree = APIClient.get('sectors/all')

    axios.all([requestOne, requestTwo, requestThree])
    .then( axios.spread((...responses) => {
      loadingSet(false)
      loadingCompaniesSet(false)
      const responseOne  = responses[0]
      const responseTwo = responses[1]
      const responseThree = responses[2]

      const companies = responseOne.data.data
      companiesSet(companies)
      storeCompanies(companies)

      const reviews = responseTwo.data.data.reviews
      reviewsSet(reviews)
      storeReviews(reviews)

      const sectors = responseThree.data.data
      storeSectors(sectors)
    }))
    .catch(err => {
      notifyError('Contact Admin')
    })
    return () => {
    }
  }, [])

  const handleFilterOption = (filterOption) => {
    switch(filterOption){
      case 'trending':
        setFilterUrl('reviews/trending')
        fetchFilterOptionReviews('reviews/trending')
        break;
      case 'newest':
        setFilterUrl('reviews/newest')
        fetchFilterOptionReviews('reviews/newest');
      break;
      case 'all':
        setFilterUrl('reviews')
        fetchFilterOptionReviews('reviews')
        break;

      default:
        break;
    }

  }

  const fetchFilterOptionReviews = (url) => {
    loadingSet(true)
    const page = {
      size: pageSize,
      page: 1
    }
    APIClient.get(`${url}/${page.size}/${page.page}`)
      .then(response => {
        const metadata = response.data.data.metadata
        loadingSet(false)
        pageNumberSet(metadata.page)
        isLastPageSet(metadata.last)
        reviewsSet(response.data.data.reviews)
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
                
                { (getUser() || loggedIn) ? (
                  <div className="button button--primary ml-3">
                    <div onClick={() => { toggleModal(true) }}>
                      <UserIcon width={18} height={18} fill={'#fff'} />
                      {/* <img src="/assets/images/svg/user.svg" alt="user" /> */}
                    </div>
                  </div>
                ) : (
                  <div className="button button--primary  ml-4">
                      <div>
                        <SignOutIcon width={24} height={24} fill="#fff"/>
                      </div>
                  </div>
                )}
              </div>
              <div className="flex flex-row flex-wrap mb-3 md:hidden space-x-1 space-y-1">
                {
                  companies && companies.slice(0, 6).map(company => <CompanyPill key={getKey()} name={company.name} />)
                }
              </div>
              { reviews && reviews.length > 0 && (
                <Card>
                  <MainCardHeader handleFilterOption={handleFilterOption} />
                  <div className="w-full mt-2">
                    <MainReviews reviews={reviews} />
                  </div>
                </Card>
              ) }
              
              {  !loading && reviews.length < 1 && <ErrorBoundary message="No Reviews yet"/>}
              {
                loading ? <Progress /> : reviews.length > 0 && !isLastPage && <div className="mx-auto w-1/2 md:w-1/3 mt-4"><Button label="Load More" onClick={fetchMoreReview} /></div>
              }
            </div>
            <div className="hidden md:flex flex-col col-span-1">
              <div>
                { (getUser() || loggedIn) && <UserCard/>}
              </div>
              
              {
                !loadingCompanies && companies && (
                  <Card>
                    <div className="">
                      <div className="w-full px-3 py-2 border-b-2 border-gray-700 mb-2 flex flex-row justify-between items-center">
                        <h6 className="text-lg text-white">Popular Companies</h6>
                      </div>
                      <div className="flex flex-row flex-wrap items-center mb-3 px-2 space-x-1 space-y-1">
                        {
                          companies.slice(0, 6).map(company => <CompanyPill key={getKey()} name={company.name} />)
                        }
                      </div>

                    </div>
                  </Card>
                )
              }
              
              { loadingCompanies && <Progress />}
            </div>
          </div>
        </div>
      </main>
    </DefaultLayout>
  )
}

Home.propTypes = {
  // sectors: PropTypes.array.isRequired,
  // // companies: PropTypes.array.isRequired,
  // reviews: PropTypes.array.isRequired
}

export default function DefaultApp (props) {
  return <App Component={Home} pageProps={props} />
}

// export async function getStaticProps () {
//   // pre-fetch reviews
//   const page = {
//     size: '10',
//     page: '1'
//   }
//   // const reviewsResource = await APIClient.get(`reviews/${page.size}/${page.page}`)
//   // const reviews = await reviewsResource.data.data.reviews
//   // pre-fetch sector
//   const sectorResource = await APIClient.get('sectors/all')
//   const sectors = sectorResource.data.data

//   // pre-fetch companies

//   // const companyResource = await APIClient.get('companies/all')
//   // const companies = companyResource.data.data

//   return {
//     props: {
//       // reviews,
//       // sectors,
//       // companies
//     }
//   }
// }
