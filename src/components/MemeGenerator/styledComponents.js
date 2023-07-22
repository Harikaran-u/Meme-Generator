import styled from 'styled-components'

export const MainContainer = styled.div`
  padding: 50px;
  display: flex;
  justify-content: space-around;
  align-items: center;
  min-height: 100vh;
`
export const Container = styled.div`
  padding: 20px;
  display: flex;
  flex-direction: column;
`

export const Heading = styled.h1`
  font-family: 'Open Sans';
  font-size: 36px;
  font-weight: bold;
  color: #35469c;
`
export const Form = styled.form`
  margin-top: 20px;
  display: flex;
  flex-direction: column;
`

export const Label = styled.label`
  font-family: 'Open Sans';
  font-size: 13px;
  font-weight: 500;
  color: #7e858e;
`
export const Input = styled.input`
  font-family: 'Open Sans';
  font-size: 14px;
  width: 100%;
  border: 1px solid #5a7184;
  border-radius: 4px;
  padding: 5px;
  color: #1e293b;
  outline: none;
  background-color: transparent;
  margin-top: 5px;
  margin-bottom: 20px;
`

export const Select = styled.select`
  font-family: 'Open Sans';
  font-size: 14px;
  width: 100%;
  border: 1px solid #5a7184;
  border-radius: 4px;
  padding: 5px;
  color: #1e293b;
`

export const Button = styled.button`
  border: 0px solid;
  border-radius: 4px;
  background-color: #0b69ff;
  font-family: 'Open Sans';
  font-size: 14px;
  color: #fff;
  height: 42px;
  width: 112px;
  margin-top: 20px;
  outline: none;
  cursor: pointer;
`
export const MemeContainer = styled(Container)`
  text-align: center;
  display: ${props => props.display};
  background-image: url(${props => props.bg});
  background-size: cover;
  justify-content: space-between;
  height: 400px;
  width: 400px;
`

export const Text = styled.p`
  font-family: 'Open Sans';
  font-size: ${props => props.fz};
  color: #fff;
`
