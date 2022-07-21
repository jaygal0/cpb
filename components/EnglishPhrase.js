import React from 'react'
import styles from '../styles/components/EnglishPhrase.module.scss'

const EnglishPhrase = ({ text }) => {
  return <div className={`${styles.container} body-lg`}>{text}</div>
}

export default EnglishPhrase
