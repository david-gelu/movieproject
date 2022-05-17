import React from 'react'

export default function Language({ setLang }) {
  const langArr = ['ro', 'en', 'fr', 'es']

  const filterLanguages = (id) => {
    setLang([id])
  }
  return (
    <div style={{ marginTop: '1rem', display: 'flex', flexWrap: 'wrap', gap: '0.5em' }}>
      {langArr.map(a =>
        <button key={a} onClick={() => filterLanguages(a)}>{a}</button>
      )}
    </div>
  )
}
