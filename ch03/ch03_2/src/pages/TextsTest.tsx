import * as D from '../data'
import {Title, Subtitle, Summary, Paragraph} from '../components'

type TextsTestProps = {}

const TextsTest: React.FC<TextsTestProps> = ({}) => {
  const paragraphs = D.makeArray(2).map(D.randomParagraphs).join('\n\n')
  const summary = D.makeArray(3).map(D.randomsentence).join('\n')
  return (
    <div>
      <Title>TextsTest</Title>
      <div>
        <Title className="text-blue-600">{D.randomTitleText()}</Title>
        <Subtitle className="text-blue-400">{D.randomsentence()}</Subtitle>
        <p className="text-xl italic text-center text-gray-900 text-bold">
          {D.randomName()}
        </p>
        <Paragraph numberOfLines={5}>{paragraphs}</Paragraph>
        <Summary className="text-center text-gray-500">{summary}</Summary>
        <p className="text-center text-pink-400">
          {D.randomDayMonthYear()}({D.randomRelativeDate()})
        </p>
      </div>
    </div>
  )
}

export default TextsTest
