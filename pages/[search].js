import React, { useState, useEffect } from 'react'
import { Card, MainReviews, ReviewButton, Progress } from 'components/blocks'
import DefaultLayout from 'components/layout/DefaultLayout'
import { useRouter } from 'next/router'
import APIClient from 'utils/APIClient'

const Search = () => {
  const { query } = useRouter()
  const [loading, loadingSet] = useState(true)
  const [reviews, reviewsSet] = useState([])

  useEffect(() => {
    if (query.company) {
      APIClient.post('reviews/search', { search: query.company })
        .then(response => {
          loadingSet(false)
          if (response.data.statusCode === 200) {
            reviewsSet(response.data.data)
          }
        })
        .catch(_error => {
          loadingSet(false)
        })
    } else {
      loadingSet(false)
    }

    return () => {
    }
  }, [query.company])

  return (
    <DefaultLayout>
      <main className="w-screen pt-5 pb-16 px-4 xl:px-0">
        <div className="sm:max-w-full mx-auto md:max-w-screen-lg">
          { !loading && reviews && reviews.length > 0 &&
          (
            <div className="grid grid-cols-1 md:grid-cols-3 md:gap-4">
              <div className="col-span-2">
                <div className="flex flex-row md:hidden mb-3">
                  <div className="flex-grow">
                    <ReviewButton />
                  </div>
                </div>

                <Card>
                  <div className="w-full mt-2">
                    <MainReviews reviews={reviews} />
                  </div>
                </Card>

              </div>
            </div>
          )}
          { !loading && (!reviews || reviews.length < 1) &&
            <p className="text-3xl text-white text-center mt-32">
              <span>😬😬</span>
              <br/> No review found {query.company && 'for'} {query.company}</p>}
          { loading && <Progress />}
        </div>
      </main>
    </DefaultLayout>
  )
}

export default Search
