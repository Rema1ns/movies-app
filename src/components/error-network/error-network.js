import './error-network.css'
import {Alert, Space} from 'antd'

const onClose = (e) => {
  console.log(e, 'I was closed.')
}

const ErrorNetwork = () => {
  return (
    <Space
      direction="vertical"
      style={{
        width: '300px',
        margin: '40px 40%',
      }}
    >
      <Alert message="Error Text" description="нет интернета" type="error" closable onClose={onClose} />
    </Space>
  )
}

export default ErrorNetwork
