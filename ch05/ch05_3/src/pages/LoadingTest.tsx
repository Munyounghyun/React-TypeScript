import React, {useCallback} from 'react'
import {useDispatch, useSelector} from 'react-redux'
import * as L from '../store/loading'
import {Appstate} from '../store'
import {Button} from '../theme/daisyui'
import { Title } from '../components'

type LoadingTestProps = {}

const LoadingTest: React.FC<LoadingTestProps> = ({}) => {
  const dispatch = useDispatch()
  const loading = useSelector<Appstate, L.State>(({loading}) => loading)
  const doTimeLoading = useCallback(() => {
    dispatch<any>(L.doTimeLoading(1000))
  }, [dispatch])
  return (
    <section className="mt-4">
      <Title>LoadingTest</Title>
      <div className="mt-4">
        <div className="flex justify-center">
          <Button
            className="btn-sm btn-primary"
            onClick={doTimeLoading}
            disabled={loading}>
            do Time Loading
          </Button>
        </div>
        {loading && (
          <div className="flex items-center justify-center">
            <Button className="btn btn-circle loading"></Button>
          </div>
        )}
      </div>
    </section>
  )
}

export default LoadingTest
