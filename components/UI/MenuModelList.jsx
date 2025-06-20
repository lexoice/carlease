import React, { useEffect, useState } from 'react'
import { useRouter } from 'next/router'
import { getMakes } from '../../lib/api/getMakes'
import { getModels } from '../../lib/api/getModels'

const MenuModelList = () => {
  const [makes, setMakes] = useState([])
  const [models, setModels] = useState([])
  const [selectedMake, setSelectedMake] = useState('')
  const [selectedModel, setSelectedModel] = useState('')
  const [loadingMakes, setLoadingMakes] = useState(true)
  const [loadingModels, setLoadingModels] = useState(false)
  const [error, setError] = useState('')
  const router = useRouter()

  useEffect(() => {
    let isMounted = true
    const fetchMakes = async () => {
      try {
        const data = await getMakes()
        if (isMounted) setMakes(data)
      } catch (e) {
        console.error(e)
        if (isMounted) setError('Failed to load makes.')
      } finally {
        if (isMounted) setLoadingMakes(false)
      }
    }
    fetchMakes()
    return () => { isMounted = false }
  }, [])

  useEffect(() => {
    if (!selectedMake) {
      setModels([])
      setSelectedModel('')
      return
    }
    let isMounted = true
    const fetchModels = async () => {
      try {
        setLoadingModels(true)
        const data = await getModels(selectedMake)
        if (isMounted) setModels(data)
      } catch (e) {
        console.error(e)
        if (isMounted) setError('Failed to load models.')
      } finally {
        if (isMounted) setLoadingModels(false)
      }
    }
    fetchModels()
    return () => { isMounted = false }
  }, [selectedMake])

  const onSearch = () => {

    const cleanMake = selectedMake.replace(/-lease-specials/g, "")
    const path = `/car-lease-deals/${cleanMake}-lease-specials/${cleanMake}-${selectedModel}/`
    router.push(path)
  }

  if (loadingMakes) return <p>Loading manufacturers...</p>
  if (error)       return <p className="error">{error}</p>

  return (
    <div className="model-select">
      <div className="arrow">
        <select
          className="sa-make-select"
          value={selectedMake}
          disabled={loadingMakes}
          onChange={e => setSelectedMake(e.target.value)}
        >
          <option value="" disabled>
            Select Make
          </option>
          {makes.map(({ name, slug }) => (
            <option key={slug} value={slug}>
              {name}
            </option>
          ))}
        </select>
      </div>

      <div className="arrow">
        <select
          className="sa-model-select"
          value={selectedModel}
          disabled={!selectedMake || loadingModels}
          onChange={e => setSelectedModel(e.target.value)}
        >
          <option value="" disabled>
            {loadingModels ? 'Loading models...' : 'Select Model'}
          </option>
          {models.map(({ name, slug }) => (
            <option key={slug} value={slug}>
              {name}
            </option>
          ))}
        </select>
      </div>

      <button
        className="search-lease sa-search-lease"
        onClick={onSearch}
        disabled={!selectedMake || !selectedModel}
      >
        Search Lease Deals
      </button>
    </div>
  )
}

export default MenuModelList
