import styled from 'styled-components'

export const MainLoginPage = styled.div`
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`
export const InputSection = styled.div`
  width: 500px;
  height: 500px;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 15px;
  background-color: #ffffff;
  box-shadow: 0px 4px 16px 0px #bfbfbf;
`
export const FormSection = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
`

export const LogoInput = styled.img`
  width: 100px;
  text-align: center;
  margin-top: 10px;
`
export const TwoSections = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 10px;
`
export const TextValueInput = styled.label`
  font-size: 15px;
  font-weight: 500;
  font-family: 'Roboto';
  color: ${props => (props.textColor ? '#f9f9f9' : '#475569')};
`
export const InputValueLogin = styled.input`
  width: 100%;
`

export const CheckBoxSection = styled.div`
  display: flex;
  flex-direction: row;
  margin-top: 10px;
`
export const LabelCheckbox = styled.label`
  font-size: 15px;
  font-weight: 500;
  font-family: 'Roboto';
  color: #475569;
`
export const LoginButton = styled.button`
  font-size: 15px;
  font-weight: 500;
  font-family: 'Roboto';
  color: #ffffff;
  background-color: #4f46e5;
  padding: 10px;
  border: none;
  border-radius: 4px;
`
export const CheckBoxInput = styled.input`
  width: 10px;
`
