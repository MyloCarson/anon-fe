/* eslint-disable no-unused-expressions */
/* eslint-disable no-sequences */
/* eslint-disable no-return-assign */
import { v4 as uuidv4 } from 'uuid'
import { USER_DATA } from '@constants'

export const getKey = () => uuidv4()

export const countText = (_value) => _value.length < 10 ? '0' + _value.length : _value.length

export const storeUser = (user) => (process.browser) ? localStorage.setItem(USER_DATA, JSON.stringify(user)) : null

export const getUser = () => (process.browser) ? JSON.parse(localStorage.getItem(USER_DATA)) : null

export const toastConfig = {
  position: 'top-right',
  autoClose: 5000,
  hideProgressBar: true,
  closeOnClick: true,
  pauseOnHover: true,
  draggable: true,
  progress: undefined
}

export const getIdForNameInArray = (_array, name) => {
  const elem = _array.find(item => item.name === name)
  return elem ? elem._id : name
}

export const checkIfCompany = (_array, name) => {
  const exits = !!_array.find(company => company.name === name)
  return exits
}

// https://stackoverflow.com/a/33754031
export function debouncer (a, b, c) { var d; return function () { var e = this; var f = arguments; var g = function () { d = null, c || a.apply(e, f) }; var h = c && !d; clearTimeout(d), d = setTimeout(g, b), h && a.apply(e, f) } }
export function getScrollXY () { var a = 0; var b = 0; return typeof window.pageYOffset === 'number' ? (b = window.pageYOffset, a = window.pageXOffset) : document.body && (document.body.scrollLeft || document.body.scrollTop) ? (b = document.body.scrollTop, a = document.body.scrollLeft) : document.documentElement && (document.documentElement.scrollLeft || document.documentElement.scrollTop) && (b = document.documentElement.scrollTop, a = document.documentElement.scrollLeft), [a, b] }
export function getDocHeight () { var a = document; return Math.max(a.body.scrollHeight, a.documentElement.scrollHeight, a.body.offsetHeight, a.documentElement.offsetHeight, a.body.clientHeight, a.documentElement.clientHeight) }

export function urlify (text) {
  const urlRegex = /(((https?:\/\/)|(www\.))[^\s]+)/g
  // var urlRegex = /(https?:\/\/[^\s]+)/g;
  return text.replace(urlRegex, function (url, b, c) {
    var url2 = (c === 'www.') ? 'http://' + url : url
    // return '<a href="' + url2 + '" target="_blank">' + url + '</a>'
    return `<a href="${url2}" target="_blank" style="white-space:nowrap;">${url}</a>`
  })
}

export const removeUrl = (text) => {
  const urlRegex = /(((https?:\/\/)|(www\.))[^\s]+)/g
  // var urlRegex = /(https?:\/\/[^\s]+)/g;
  return text.replace(urlRegex, function (url, b, c) {
    // var url2 = (c === 'www.') ? 'http://' + url : url
    // return '<a href="' + url2 + '" target="_blank">' + url + '</a>'
    return '';
  })
}

export function getUrlFromText (text) {
  const urlRegex = /(((https?:\/\/)|(www\.))[^\s]+)/g
  const url = text.match(urlRegex)
  return url
}
