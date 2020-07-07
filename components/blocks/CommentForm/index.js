import React, { useState } from 'react'
import { Card, Button } from 'components/blocks'
import { countText } from 'utils'
import HeadShake from 'react-reveal/HeadShake'

const CommentForm = () => {
  const [value, valueSet] = useState('')
  const [error, errorSet] = useState(false)

  const handleChange = (event) => {
    valueSet(event.target.value)
  }

  const handleSubmit = () => {
    errorSet(true)
    const timeout = setTimeout(() => { // resets error so animation can play
      errorSet(false)
      clearTimeout(timeout)
    }, 800)
  }

  return (
    <Card>
      <div className="p-4">
        <HeadShake when={error}>
          <form>
            <textarea className="resize-none w-full p-2 bg-transparent outline-none focus:shadow-outline rounded-sm text-white h-20"
              placeholder="Comment" maxLength="160" value={value} onChange={handleChange}></textarea>
            <span className="block text-right"><span className="text-green-600">{countText(value)}</span><span className="text-white">/160</span></span>
          </form>
        </HeadShake>
        <div className="ml-auto md:w-1/3 mt-3">
          <Button label="ADD COMMENT" onClick={handleSubmit} />
        </div>
      </div>
    </Card>
  )
}

export default CommentForm
