import {Alert, Space} from 'antd'

const SearchNotResult = () => (
  <Space
    direction="vertical"
    style={{
      width: '300px',
    }}
  >
    <Alert message="По данному запросу, фильмов не нашлось" type="info" />
  </Space>
)

export default SearchNotResult
