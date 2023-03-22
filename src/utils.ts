export const language = (selectedLang?: string) => { return selectedLang || 'en' }

export const handleSearch = (searchValue?: string | null) => {
  console.log("searchValue:", searchValue)
  return searchValue
}
