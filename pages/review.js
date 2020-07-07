import { Card, CommentItem, OtherReviewItem, CommentForm } from 'components/blocks/index'
import DefaultLayout from 'components/layout/DefaultLayout'
import { getKey } from 'utils'
import HeadShake from 'react-reveal/HeadShake'
import Slide from 'react-reveal/Slide'

const Review = () => {
  return (
    <DefaultLayout>
      <main className="w-screen pt-5 pb-16 px-4 xl:px-0">
        <div className="sm:max-w-full mx-auto md:max-w-screen-lg">
          <div className="grid grid-cols-1 md:grid-cols-3 md:gap-4">
            <div className="col-span-2">
              <div>
                <Card>
                  <div className="p-4">
                    <Slide top>
                      <p className="text-white text-base">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris nibh
                          eros, laoreet id nibh ut, iaculis tincidunt massa. Duis interdum pretium
                          est vitae dignissi</p>
                    </Slide>
                    <Slide top>
                      <div className="h-6 w-px bg-green-600"></div>
                    </Slide>
                    <Slide top>
                      <p className="text-white text-base">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris nibh
                          eros, laoreet id nibh ut, iaculis tincidunt massa. Duis interdum pretium
                          est vitae dignissi</p>
                    </Slide>
                    <Slide top>
                      <div className="h-6 w-px bg-green-600"></div>
                    </Slide>
                    <Slide top>
                      <p className="text-white text-base">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris nibh
                          eros, laoreet id nibh ut, iaculis tincidunt massa. Duis interdum pretium
                          est vitae dignissi</p>
                    </Slide>

                  </div>
                </Card>
                <div className="flex flex-row justify-between mt-2">
                  <div>
                    <Slide top>
                      <p className="text-white text-sm ">by charles avalon</p>
                    </Slide>
                    <Slide bottom>
                      <p className="text-white text-xl">Konga Inc.</p>
                    </Slide>
                  </div>
                  <div>
                    <Slide bottom>
                      <span className="block text-white text-sm">12th July, 2020, 12:23pm</span>
                    </Slide>
                  </div>
                </div>
              </div>
              <div className="mt-6">
                <CommentForm />
              </div>

              <div className="mt-6">
                <Card>
                  <div className="p-4">
                    <h3 className="text-lg text-white px-3 underline">Comments</h3>
                    <ul className="px-3 py-3">
                      {[1, 2, 3, 4, 5, 6, 7, 8, 9].map(num => <CommentItem key={getKey()} />)}
                    </ul>
                  </div>
                </Card>
              </div>
            </div>
            <div className="col-span-1">
              <Card>
                <div className="">
                  <div className="w-full px-3 py-2 border-b-2 border-gray-700 mb-2 flex flex-row justify-between items-center">
                    <HeadShake>
                      <h6 className="text-lg text-white">Other Reviews</h6>
                    </HeadShake>
                  </div>
                  <ul className="px-3 py-3">
                    {[1, 2, 3, 4, 5, 6, 7, 8, 9].map(num => <OtherReviewItem key={getKey()} />)}
                  </ul>

                </div>
              </Card>
            </div>
          </div>
        </div>
      </main>
    </DefaultLayout>
  )
}

export default Review
