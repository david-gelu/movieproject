import React from 'react'

export default function Language(props: { setLang: (id: string[]) => void }) {
  const langArr = ['ro', 'en', 'fr', 'es']
  const { setLang } = props

  const filterLanguages = (id: string) => {
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
