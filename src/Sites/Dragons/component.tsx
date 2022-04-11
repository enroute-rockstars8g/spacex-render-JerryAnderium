import React, { useEffect, useState } from 'react'
import { Dragons } from '../../components/Dragons/component'
import { getDragons } from '../../services/spacex'
import { LoadMsg } from '../../components/Loading/component'
import { ErrMsg } from '../../components/Error/component'

export const DragonsSite = () => {
  const [dragons, setDragons] = useState<any>([])
  const [isLoading, setIsLoading] = useState(false)
  const [isError, setIsError] = useState(false)

  useEffect(() => {
    async function get() {
      try {
        setIsLoading(true)
        const dataD = await getDragons()
        setDragons(dataD)
        setIsLoading(false)
      } catch (e) {
        console.error(e)
        setIsError(true)
      }
    }
    get()
  }, [])

  const mappedDragons = dragons.map((dragon: any) => (
      <Dragons key={dragon.id} dragon={dragon} />
  ))

  if (isError && !isLoading) {
    return (
      <div>
        <ErrMsg/>
      </div>
    )
  }

  return !isError && isLoading ? (
    <LoadMsg/>
  ) : (
    <div>
      {mappedDragons}
    </div>
  )
}
