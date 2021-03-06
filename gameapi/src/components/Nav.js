import React, { useState } from 'react'
import styled from 'styled-components'
import { motion } from 'framer-motion'
import logo from '../img/logo.svg'

import { fetchSearch } from '../actions/gameAction'
import { useDispatch } from 'react-redux'

import { fadeIn } from '../animation'

const Nav = () => {
  const dispatch = useDispatch()
  const [TextInput, setTextInput] = useState('')
  const inputHandler = (e) => {
    setTextInput(e.target.value)
  }
  const submitSearch = (e) => {
    e.preventDefault()
    dispatch(fetchSearch(TextInput))
    setTextInput('')
  }
  const clearSearched = () => {
    dispatch({ type: 'CLEAR_SEARCH' })
  }
  return (
    <SyledNav variants={fadeIn} initial='hidden' animate='show'>
      <Logo onClick={clearSearched}>
        <img src={logo} alt='' />
        <h1>Ignite</h1>
      </Logo>
      <form className='search'>
        <input value={TextInput} onChange={inputHandler} type='text' />
        <button onClick={submitSearch} type='submit'>
          Search
        </button>
      </form>
    </SyledNav>
  )
}

const SyledNav = styled(motion.nav)`
  padding: 3rem 5rem;
  text-align: center;
  input {
    width: 30%;
    font-style: 1.5rem;
    padding: 0.5rem;
    border: none;
    margin-top: 1rem;
    box-shadow: 0px 0px 30px rgba(0, 0, 0, 0.2);
    outline: none;
  }
  button {
    font-size: 1.5rem;
    border: none;
    padding: 0.5rem 2rem;
    margin: 1rem;
    cursor: pointer;
    background: #ff7675;
    color: white;
  }
`
const Logo = styled(motion.div)`
  display: flex;
  justify-content: center;
  padding: 1rem;
  cursor: pointer;
  img {
    width: 2rem;
    height: 2rem;
  }
`

export default Nav
