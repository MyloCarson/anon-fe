import React from 'react'
import { SearchIcon } from 'components/vectors/index'
import Link from 'next/link'
import { ReviewButton } from 'components/blocks'
import { Formik } from 'formik'
import * as Yup from 'yup'
import * as _ from 'lodash'
import Router from 'next/router'
import HeadShake from 'react-reveal/HeadShake'


const Header = () => {
  const schema = Yup.object().shape({
    search: Yup.string()
      .min(1, 'Ohh, thats too short')
      .required('Oh, empty comment??')
  })
  return (
    <header className="max-container">
      <div className="header-wrapper">
        <div className="main-container">
          <div className="header px-4 md:px-1 xl:px-0  ">
            <Link href="/">
              <a className="header-title mr-4">ANON</a>
            </Link>
            <nav className="nav">
              <Formik
                initialValues={{
                  search: ''
                }}
                validationSchema={schema}
                onSubmit={(values, { setSubmitting, resetForm }) => {
                  console.log(values)
                  Router.push('/search?company=' + values.search)
                }}>
                {({
                  values,
                  errors,
                  touched,
                  handleChange,
                  handleBlur,
                  handleSubmit,
                  isSubmitting
                }) => (
                  <form className="flex flex-row" role="form" onSubmit={handleSubmit}>
                    <div className="nav-item">
                      <label htmlFor="search" className="sr-only">Search:</label>
                      <HeadShake when={_.has(touched, 'search') && _.has(errors, 'search') }>
                        <input type="text" name="search" className={`md:w-56 px-2 nav-search-input ${_.has(touched, 'search') && _.has(errors, 'search') && 'form--error'}`} 
                          placeholder="Search for company" value={values.search} onChange={handleChange}/>
                      </HeadShake>
                    </div>
                    <button type="submit" role="button" className="nav-item cursor-pointer">
                      <SearchIcon />
                    </button>
                  </form>
                )}

              </Formik>

              <div className="nav-item hidden md:block">
                <ReviewButton />
              </div>
            </nav>

          </div>
        </div>
      </div>
    </header>
  )
}

export default Header
