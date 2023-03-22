import React, { useEffect, useState } from 'react'
import { language } from '../../utils'

export default function Language(props: { setLang: (id: string[]) => void }) {
  const [lang, setLang] = useState('en')
  const langArr = ['ro', 'en', 'fr', 'es']

  useEffect(() => {
    language(lang)
  }, [lang])

  return (
    <div style={{ marginTop: '1rem', display: 'flex', flexWrap: 'wrap', gap: '0.5em' }}>
      {langArr.map(lang =>
        <button key={lang} onClick={() => {
          setLang(lang)
        }}>{lang}</button>
      )}
    </div>
  )
}
