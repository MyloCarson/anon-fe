import React from 'react'
import Fade from 'react-reveal/Fade'
import Link from 'next/link'

const OtherReviewItem = () => (
  <Fade top cascade>
    <li className="text-white text-sm my-2">
      <Link href="/review">
        <a className="text-gray-300">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris nibh
                        eros, laoreet id nibh ut, iaculis tincidunt massa. Duis interdum pretium
                        est vitae dignissi</a>
      </Link>
      <span className="block text-right text-gray-600">by charles</span>
    </li>
  </Fade>
)

export default OtherReviewItem
