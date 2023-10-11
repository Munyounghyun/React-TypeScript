import DeleteTest from './DeleteTest'
import GetTest from './GetTest'
import PostTest from './PostTest'
import PutTest from './PutTest'

export default function RestTest() {
  return (
    <div>
      <p className="text-3xl text-center text-bold">RestTest</p>
      <DeleteTest />
      <GetTest />
      <PostTest />
      <PutTest />
    </div>
  )
}
