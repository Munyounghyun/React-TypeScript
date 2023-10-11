function getAge(age: any) {
  age.toFixed() //age의 타입이 any라서 숫자 관련된 API를 무리하게 적용 - 에러발생
  return age
}

//union 타입을 사용하는 경우
function getAge2(age: number | string) {
  if (typeof age === 'number') {
    age.toFixed() // 고정 소수점을 표기할 때
    return age
  }
  if (typeof age === 'string') {
    return age
  }

  return new TypeError('age must be number or string')
}

type Marvel = 'IronMan' | 'Hulk'
type Dc = 'SuperMan' | 'BatMan'
type Hero = Marvel | Dc

const hero1: Hero = 'Hulk'
const hero2: Hero = 'BatMan'

// intersection 타입을 사용하는 경우
type FavoriteSports = 'swimming' | 'football'
type BallSports = 'football' | 'baseball'
type FavoriteBallSports = FavoriteSports & BallSports
const likeSport: FavoriteBallSports = 'football' //o
// const likeSport2: FavoriteBallSports = 'swimming' //x

// (*주의*) interface는 다름
interface Person {
  name: string
  age: number
}

interface Developer {
  name: string
  skill: string
}

type intersect1 = Person & Developer
//name: string; age: number; skill: string

type union1 = Person | Developer
//name만 사용 가능
