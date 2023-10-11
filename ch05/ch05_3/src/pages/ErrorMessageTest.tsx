import React, {useCallback, useEffect} from 'react'
import {useDispatch, useSelector} from 'react-redux'
import {Title} from '../components'
import * as E from '../store/errorMessage'
import * as D from '../data'
import {Appstate} from '../store'
import {Button} from '../theme/daisyui'

type ErrorMessageTestProps = {}

const ErrorMessageTest: React.FC<ErrorMessageTestProps> = ({}) => {
  const dispatch = useDispatch()
  const errorMessage = useSelector<Appstate, E.State>(({errorMessage}) => errorMessage)
  const generateErrorMessage = useCallback(() => {
    dispatch<any>(E.generateErrorMessate())
  }, [dispatch])
  return (
    <section className="mt-4">
      <Title>LoadingTest</Title>
      <div className="mt-4">
        <div className="flex justify-center">
          <Button className="btn-sm btn-primary" onClick={generateErrorMessage}>
            Generate Error Message
          </Button>
        </div>
        {errorMessage.length && (
          <div className="flex items-center justify-center bg-red-200">
            <p className="text-2xl text-red-600 text-bold">{errorMessage}</p>
          </div>
        )}
      </div>
    </section>
  )
}

export default ErrorMessageTest
