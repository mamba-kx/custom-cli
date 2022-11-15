import api from '.'

type ValueOf<T> = T[keyof T]
type TypeAxiosRequest = ReturnType<ValueOf<typeof api>>

const handleRequest = (axiosRequest: TypeAxiosRequest) => {
  return axiosRequest
    .then((res) => {
      if (res?.data?.code === 200) {
        return Promise.resolve([res, null])
      } else {
        if (res?.data?.message) {
          console.log(res.data.message)
        }
        return Promise.resolve([res?.data, null])
      }
    })
    .catch((err: any) => {
      return Promise.resolve([null, err])
    })
}

export default handleRequest
