//Record<키,값> 타입 : 키와 값으로 구성
const cache: Record<string, any> = {}
export const useOrCreate = <T>(key: string, callback: () => T): T => {
  if (!cache[key]) {
    cache[key] = callback()
  }
  return cache[key] as T
}
