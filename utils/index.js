import {v4 as uuidv4 } from 'uuid'

export const getKey = () => uuidv4()

export const countText = (_value) => _value.length < 10 ? '0' + _value.length : _value.length
