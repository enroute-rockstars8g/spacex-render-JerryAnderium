import React, { useEffect, useState } from 'react'
import { Ships } from '../../components/Ships/component'
import { LoadMsg } from '../../components/Loading/component'
import { ErrMsg } from '../../components/Error/component'
import { getShips } from '../../services/spacex'

export const ShipsSite = () => {
  const [ships, setShips] = useState<any>([])
  const [Load, setIsLoading] = useState(false)
  const [Err, setIsError] = useState(false)

  useEffect(() => {
    async function get() {
      try {
        setIsLoading(true)
        const DataS = await getShips()
        setShips(DataS)
        setIsLoading(false)
      } catch (e) {
        console.error(e)
        setIsError(true)
      }
    }
    get()
  }, [])

  console.log(ships)

  const mappedShips = ships.map((ship: any) => (
    <Ships key={ship.id} ship={ship} />
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
    <div>{mappedShips}</div>
  )
}
