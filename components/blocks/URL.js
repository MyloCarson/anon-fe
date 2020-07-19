/* eslint-disable no-undef */
import React, { useState, useEffect } from 'react'
import { getUrlFromText } from 'utils'
import { getMetadata } from 'page-metadata-parser'
import domino from 'domino'
import * as $ from 'jquery'
const URLTAG = ({ text }) => {
  const [metadata, metadataSet] = useState({})
  const [url, urlSet] = useState(null)
  useEffect(() => {
    // const _url = getUrlFromText(text)[0] ? getUrlFromText(text)[0] : getUrlFromText(text)
    const _url =  getUrlFromText(text)
    urlSet(_url)
    if (url) {
      const url = 'https://cors-anywhere.herokuapp.com/' + _url
      fetch(url)
        .then(response => response.text())
        .then(response => {
          const html = response
          const doc = domino.createWindow(html).document
          const metadata = getMetadata(doc, url)
          metadataSet(metadata)
        })
    }
    return () => {

    }
  }, [url])

  return url && metadata && metadata.description && metadata.image ? (<a href={url} target="_blank" rel="noreferrer">
    <div className="md:w-1/2 mr-auto mt-4">
      <img src={metadata.image || ''} />
      <div className="overflow-hidden" style={{ height: '100px' }}>
        <span className="text-sm text-indigo-500 underline">{metadata.description}</span>
      </div>
    </div>

  </a>) : null
}

export default URLTAG
