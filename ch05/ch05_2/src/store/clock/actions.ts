import type * as T from './types'
//payload는 리덕스커뮤니티에서 관행으로 사용하는 타입과 변수 이름
export const setClock = (payload: T.State): T.setClockAction => ({
  type: '@clock/setClock',
  payload
})
