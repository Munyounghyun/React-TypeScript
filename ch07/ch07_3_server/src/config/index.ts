import path from 'path'

//process.cwd() -> 프로젝트의 package.json 파일이 있는 디렉터리의 절대 경로를 반환
//path.join -> 매개변수에 나열된 모든 경로를 디렉토리 구분문자를 이용해서 하나의 문자열로 만듬
export const getPublicDirPath = () => path.join(process.cwd(), 'public')
