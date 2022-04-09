import React, { useEffect, useState } from 'react'
import { Rockets } from '../../components/Rockets/component'
import { LoadMsg } from '../../components/Loading/component'
import { ErrMsg } from '../../components/Error/component'
import { getRockets } from '../../services/spacex'

export const RocketsSite = () => {
  const [rockets, setRockets] = useState<any>([])
  const [Load, setIsLoading] = useState(false)
  const [Err, setIsError] = useState(false)

  useEffect(() => {
    async function get() {
      try {
        setIsLoading(true)
        const DataR = await getRockets()
        setRockets(DataR)
        setIsLoading(false)
      } catch (e) {
        console.error(e)
        setIsError(true)
      }
    }
    get()
  }, [])

  console.log(rockets)

  const mappedRockets = rockets.map((rocket: any) => (
    <Rockets key={rocket.id} rocket={rocket} />
  ))

  if (Err && !Load) {
    return (
      <div>
        <ErrMsg />
      </div>
    )
  }

  return !Err && Load ? (
    <LoadMsg />
  ) : (
    <div>{mappedRockets}</div>
  )
}
