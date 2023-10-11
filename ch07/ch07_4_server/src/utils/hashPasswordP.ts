import bcrypt from 'bcrypt'
const saltRounds = 10 //genSalt의 자리수 , 클수록 생성과 검증이 까다롭다.

//비밀번호 bcrypt 활용하여 해시값으로 바꿈
export const hashPasswordP = (password: string) =>
  new Promise<string>(async (resolve, reject) => {
    try {
      const salt = await bcrypt.genSalt(saltRounds)
      const hash = await bcrypt.hash(password, salt)
      resolve(hash)
    } catch (e) {
      reject(e)
    }
  })

//비교
export const comparePasswordP = (password: string, hashedPassword: string) =>
  new Promise<boolean>(async (resolve, reject) => {
    try {
      const result = await bcrypt.compare(password, hashedPassword)
      resolve(result) // true if same password
    } catch (e) {
      reject(e)
    }
  })
