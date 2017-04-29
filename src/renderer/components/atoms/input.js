import React from 'react'
import styled from 'styled-components'

const Field = styled.div`
  display: block;
`

const Label = styled.label`
  display: block;
  font-size: 14px;
`

const Input = styled.input`
  display: block;
  width: 100%;
  padding: 10px;
  background: transparent;
  border-top: 0;
  border-left: 0;
  border-right: 0;
  border-bottom: 1px solid rgba(255, 255, 255, 0.5);
  box-sizing: border-box;
  outline: 0;
  font-size: 16px;
  color: var(--text-primary);
  transition: all 0.2s ease-in-out;
  &:hover,
  &:active,
  &:focus {
    border-bottom: 1px solid rgba(255, 255, 255, 1);
  }
`

export default ({ label = '', id = '', type = 'text', value = '', placeholder = '', onChange }) => (
  <Field>
    <Label htmlFor={id}>{label}</Label>
    <Input type={type} id={id} value={value} placeholder={placeholder} onChange={onChange} />
  </Field>
)
