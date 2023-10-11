import type {AppState} from '../store'
import type {Card as CardType} from '../store/commonTypes'
import * as CE from '../store/cardEntities'
import {useCallback, useState, useEffect} from 'react'
import {useLocation, useNavigate, useParams, useSearchParams} from 'react-router-dom'
import {Avatar, Div} from '../components'
import {useSelector} from 'react-redux'

export default function Card() {
  const params = useParams()
  const [search] = useSearchParams()

  const location = useLocation()
  const navigate = useNavigate()

  const goBack = useCallback(() => {
    navigate(-1)
  }, [navigate])

  const [card, setCard] = useState<CardType | null>(null)
  const {cardid} = params
  const cardEntities = useSelector<AppState, CE.State>(({cardEntities}) => cardEntities)

  useEffect(() => {
    if (!cardEntities || !cardid) return
    cardEntities[cardid] && setCard(() => cardEntities[cardid])
  }, [cardEntities, cardid])

  //라우트 경로가 주소창에서 임의로 변경될 수 있으므로 if문을 방어적으로 생성함
  if (!card) {
    return (
      <div>
        <p>location:{JSON.stringify(location, null, 2)}</p>
        <p>params:{JSON.stringify(params, null, 2)}</p>
        <p>cardid:{params['cardid']}</p>
        <p>
          from:{search.get('from')}, to :{search.get('to')}
        </p>
        <button className="mt-4 btn btn-primary btn-xs" onClick={goBack}>
          Go Back
        </button>
      </div>
    )
  }
  return (
    <div className="p-4">
      <Div src={card?.image} className="w-full" minHeight="10rem" height="10rem" />
      <Div className="flex flex-row items-center mt-4">
        <Avatar src={card?.writer.avatar} size-2rem />
        <Div className="ml-2">
          <p className="text-xs font-bold">{card?.writer.name}</p>
          <p className="text-xs text-gray-500">{card?.writer.jobTitle}</p>
        </Div>
      </Div>
      <h2 className="font-bold text-5xl text-center">Card</h2>
      <button className="mt-4 btn btn-primary btn-xs" onClick={goBack}>
        Go Back
      </button>
    </div>
  )
}
