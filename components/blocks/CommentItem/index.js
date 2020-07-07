import React from 'react'
import Fade from 'react-reveal/Fade'

const CommentItem = () => (
  <Fade top cascade>
    <li className="text-white text-sm my-2">
      <p className="text-gray-300">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris nibh
                        eros, laoreet id nibh ut, iaculis tincidunt massa. Duis interdum pretium
                        est vitae dignissi</p>
      <div className="mt-2">
        <span className="block text-left text-gray-600">by charles</span>
        <span className="block text-left text-gray-600">12th July, 20200, 12:23pm</span>
      </div>
    </li>
  </Fade>
)

export default CommentItem
