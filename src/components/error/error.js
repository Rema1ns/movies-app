import './error.css'
import {Alert, Space} from 'antd'

const onClose = (e) => {
  console.log(e, 'I was closed.')
}

const ErrorIndicator = () => {
  return (
    <Space
      direction="vertical"
      style={{
        width: '300px',
        margin: '40px 40%',
      }}
    >
      <Alert message="Error Text" description="НИХУЯ НЕ РАБОТАЕТ!" type="error" closable onClose={onClose} />
    </Space>
  )
}

export default ErrorIndicator
