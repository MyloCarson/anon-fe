import React from 'react'
import Link from 'next/link'
import { CommentIcon, MoreCommentIcon, VerifiedIcon } from 'components/vectors'
import PropTypes from 'prop-types'
import Slide from 'react-reveal/Slide'
const ReviewItem = ({ comments }) => {
  const isGreater = num => num < 99
  return (
    <div className="border-b-2 last:border-b-0 border-gray-700  py-4 px-3">
      <Slide top>
        <div className="flex flex-row items-center">
          <div className="flex flex-col justify-between items-center h-full">
            {
              isGreater(comments) ? (
                <span className="flex-shrink-0 text-gray-600 text-center my-1">{comments}</span>
              ) : (<div className="my-2">
                <div title="More Comments" className="my-1">
                  <MoreCommentIcon width={14} height={22} fill="#fff"/>
                </div>
              </div>)
            }
            <div title="Comments" className="my-1">
              <CommentIcon width={18} height={14} fill="#1f364d" />
            </div>
            <div title="Verified Review" className="my-1">
              <VerifiedIcon width={18} height={14} fill="#fff" />
            </div>
          </div>
          <div className="flex flex-col ml-4">
            <Link href="/review">
              <a className="text-gray-100 mb-1 hover:font-semibold cursor-pointer visited:text-red-600">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris nibh
          eros, laoreet id nibh ut, iaculis tincidunt massa. Duis interdum pretium
          est vitae dignissi
              </a>
            </Link>
            <div className="flex flex-row items-center justify-between mt-2">
              <p className="text-gray-600">posted by chris_davies</p>
              <span className="text-teal-300">12th Jul, 2020, 12:23pm</span>
            </div>
          </div>
        </div>
      </Slide>
    </div>
  )
}

ReviewItem.propTypes = {
  comments: PropTypes.number.isRequired
}

export default ReviewItem
