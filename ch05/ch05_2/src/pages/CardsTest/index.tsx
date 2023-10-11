import * as D from '../../data'
import * as C from '../../store/cards'
import Card from './Cards'
import type {Appstate} from '../../store'
import {Icon, Title} from '../../components'
import {useDispatch, useSelector} from 'react-redux'
import {useCallback, useMemo} from 'react'

const makeCard = () =>
  D.makeCard(D.randomUUID(), D.makeRandomUser(), D.randomImage(200, 200), '', '', '', '')
export default function CardsTest() {
  const dispatch = useDispatch()
  const cards = useSelector<Appstate, C.State>(({cards}) => cards)
  const addCard = useCallback(() => {
    dispatch(C.addCard(makeCard()))
  }, [dispatch])

  const removeCard = useCallback(
    (id: string) => () => dispatch(C.removeCard(id)),
    [dispatch]
  )
  const children = useMemo(
    () =>
      cards.map((card) => (
        <Card key={card.uuid} card={card} onRemove={removeCard(card.uuid)} />
      )),
    [cards, removeCard]
  )
  return (
    <section>
      <Title>CardsTest</Title>
      <div>
        <Icon name="add" className="btn-primary" onClick={addCard} />
      </div>
      <div className="flex flex-wrap mt-4">{children}</div>
    </section>
  )
}
