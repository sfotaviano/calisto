import styled from 'styled-components'
import DividerMi from '@material-ui/core/Divider'

export const Root = styled.div`
  display: flex;
  flex-direction: column;
  width: 100;
`
export const Container = styled.div`
  display: flex;
  align-items: flex-end;
  justify-content: space-between;
`
export const Divider = styled(DividerMi)`
  margin-top: 24px;
  margin-bottom: 24px;
`
