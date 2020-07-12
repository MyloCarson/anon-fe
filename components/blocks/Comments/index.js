import React, { useState, useEffect } from 'react'
import APIClient from '../../../utils/APIClient'
import PropTypes from 'prop-types'
import { Card, CommentItem, ErrorBoundary, Progress } from 'components/blocks'
import { getKey } from 'utils'
import socketIOClient from 'socket.io-client'
const Comments = ({ reviewId }) => {
  const [comments, commentsSet] = useState([])
  const [loadingComment, loadingCommentSet] = useState(true)

  useEffect(() => {
    const socket = socketIOClient(process.env.NEXT_PUBLIC_SOCKET_ENDPOINT)
    socket.on('new-comment', response => {
      if (response.data._id === reviewId) { // if the reviews are the same
        commentsSet([response.data].concat(comments))
      }
    })

    // CLEAN UP THE EFFECT
    return () => socket.disconnect()
  }, [comments])

  useEffect(() => {
    // fetch comments
    APIClient.get(`comments/review/${reviewId}`)
      .then(response => {
        loadingCommentSet(false)
        if (response.data.statusCode === 200) {
          commentsSet(response.data.data)
        }
      })
    // eslint-disable-next-line handle-callback-err
      .catch(error => {
        loadingCommentSet(false)
      })
  }, [])

  return (
    <Card>
      <div className="p-4">
        <h3 className="text-lg text-white px-3 underline">Comments</h3>
        <div className="px-3 py-3">
          { loadingComment && <Progress />}
          { !loadingComment && !comments && <ErrorBoundary message="Problem establishing connection" />}
          { !loadingComment && comments && comments.length < 1 && <ErrorBoundary message="No Comments yet" />}
          <ul className="space-y-3">
            { !loadingComment && comments && comments.length > 0 && (
              comments.map(comment => <CommentItem key={getKey()} comment={comment} />)
            )}
          </ul>
        </div>
      </div>
    </Card>
  )
}

Comments.propTypes = {
  reviewId: PropTypes.string.isRequired
}

export default Comments
