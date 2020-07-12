import React from 'react'
import { ReviewItem } from 'components/blocks'
import { getKey, getDocHeight, getScrollXY, debouncer } from 'utils'
import APIClient from 'utils/APIClient'
import PropTypes from 'prop-types'
import * as _ from 'lodash'
const MainReviews = ({ reviews }) => {
  // useEffect(() => {
  //   console.log(_reviews)
  // }, [_reviews])
  // const dispatch = useDispatch()
  // const startLoader = (value) => dispatch(toggleLoadingReviews(true))
  // let isLoading = false
  // const fetchMoreReview = (oldReviews) => {
  //   const page = {
  //     size: '3',
  //     page: '1'
  //   }
  //   APIClient.get(`reviews/${page.size}/${page.page}`)
  //     .then(response => {
  //       window.scrollTo(0, (window.scrollY - 200))
  //       const newUpdates = oldReviews.concat(response.data.data.reviews)
  //       reviewsSet(newUpdates)
  //       isLoading = false
  //     })
  // }

  // const CheckIfScrollBottom = debouncer(function () {
  //   if (getDocHeight() === getScrollXY()[1] + window.innerHeight) {
  //     isLoading = true
  //     if (!isLoading) {
  //       fetchMoreReview(_reviews)
  //     }
  //   }
  // }, 500)

  // useEffect(() => {
  //   document.addEventListener('scroll', CheckIfScrollBottom)
  // })

  // useEffect(() => {
  //   const CheckIfScrollBottom = debouncer(function () {
  //     if (getDocHeight() === getScrollXY()[1] + window.innerHeight) {
  //       const timeout = setTimeout(() => {
  //         fetchMoreReview(_reviews)
  //         clearTimeout(timeout)
  //       }, 2000)
  //     }
  //   }, 500)

  //   document.addEventListener('scroll', CheckIfScrollBottom)
  //   return () => {
  //     document.removeEventListener('scroll', function () {})
  //   }
  // }, [_reviews])
  return (
    <>
      {
        reviews && reviews.length > 0 && reviews.map((review, index) => (<ReviewItem key={getKey()} review={review} />))
      }
    </>
  )
}

MainReviews.propTypes = {
  reviews: PropTypes.arrayOf(
    PropTypes.shape(
      {
        _id: PropTypes.string.isRequired,
        review: PropTypes.arrayOf(PropTypes.string.isRequired),
        verifiedByUser: PropTypes.bool.isRequired,
        verifiedByAdmin: PropTypes.bool.isRequired,
        company: {
          name: PropTypes.string.isRequired
        },
        user: {
          verified: PropTypes.bool.isRequired,
          name: PropTypes.string.isRequired,
          public_id: PropTypes.string.isRequired,
          __v: PropTypes.number
        },
        createdAt: PropTypes.string.isRequired,
        __v: PropTypes.number
      }
    ).isRequired
  ).isRequired
}

export default MainReviews
