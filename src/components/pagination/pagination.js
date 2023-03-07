import {Pagination} from 'antd'
import {useState} from 'react'

const Paginati0n = ({pageNumber}) => {
  const [current, setCurrent] = useState(1)
  const onChange = (page) => {
    setCurrent(page)
    pageNumber(page)
  }
  return <Pagination style={{marginBottom: '25px'}} current={current} onChange={onChange} total={50} />
}
export default Paginati0n
