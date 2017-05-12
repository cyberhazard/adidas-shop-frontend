import styled from 'styled-components';

export const Wrapper = styled.div`
  display: flex;
  align-items: center;
  padding: 12px 22px;
`

export const Image = styled.img`
  width: 55px;
  height: 55px;
  margin-right: 30px;
`

export const Button = styled.button`
  font-family: "Avenir Next";
  font-size: 24px;
  font-weight: 700;
  text-transform: uppercase;
  color: #d6d6d6;
  ${p=>p.isSelected && 'color: #4d42f8;'}
  background-color: transparent;
  border: none;
  margin-right: 20px;
  cursor: pointer;
  transition: .3s;
  ${p=>p.mini && 'margin-right: 6px;'}
  &:hover {
    color: #4d42f8;
  }
`

export const Label = styled.span`
  font-family: "Avenir Next";
  font-size: 24px;
  font-weight: 700;
  text-transform: uppercase;
  color: #4d42f8;
  margin: 0 20px 0 52px;
`
