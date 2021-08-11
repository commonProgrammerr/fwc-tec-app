import { useCallback, useRef } from 'react'
import { useToasts } from 'react-toast-notifications'
import { Form } from '@unform/web'
import { FormHandles, SubmitHandler, } from '@unform/core'
import {
  string as YupString,
  boolean as YupBoolean,
  ValidationError as YupValidationError
} from 'yup'

import { useHistory } from "react-router-dom"

import Input from "../components/input"

import restaurantIcon from '../assets/restaurant-dark.svg'
import CheckBox from "../components/check-box"
import getValidationErrors, { validateFields } from '../utils/validationErrors'

interface formDataInteface {
  email: string
  senha: string
  salvar: string
}

const loginFieldsSchemas = {
  email: YupString()
  .required()
  .email(),
  password: YupString()
  .required()
  .min(8),
  save: YupBoolean()
}


function LoginPage() {
  const { push: goTo } = useHistory()
  const { addToast } = useToasts()
  const formRef = useRef<FormHandles>(null)

  const handleSubmit = useCallback<SubmitHandler<formDataInteface>>(data => {
    formRef.current?.setErrors({})

    validateFields(data, loginFieldsSchemas)
      .then(data => {
        console.log(data)
        goTo('/pedidos')
      })
      .catch(err => {
        if (err instanceof YupValidationError) {
          const erros = getValidationErrors(err)

          Object.keys(erros).forEach(errKey => addToast(erros[errKey], {
            appearance: 'error',
            autoDismiss: true
          }))

          formRef.current?.setErrors(erros)
        } else {
          addToast('Parece algo deu errado 😕', {
            appearance: 'error',
            autoDismiss: true
          })
        }
      })
  }, [addToast, goTo])

  const formClassNames = `
  flex 
  flex-col 
  pt-10 p-6 
  bg-white 
  w-1/4 
  rounded 
  shadow-md
  `



  return (
    <div className="
      h-screen 
      w-screen 
      flex 
      items-center 
      justify-center 
      bg-indigo-300
    ">
      <Form
        ref={formRef}
        className={formClassNames}
        onSubmit={handleSubmit}
      >

        <div className="self-center w-full flex flex-col items-center">
          <img src={restaurantIcon} alt="restaurant" className="w-20" />
          <span className="text-gray-600 text-2xl font-semibold">Login</span>
        </div>

        <Input name="email" label="Email" />
        <Input name="password" label="Password" type="password" />
        <CheckBox name="save" />
        <button
          type="submit"
          className="
            mt-10 
            bg-blue-500 
            py-2 px-4 
            rounded 
            text-white 
            font-medium 
            hover:bg-blue-600 
            delay-200
          "
        >
          Login
        </button>
      </Form>
    </div>
  )
}

export default LoginPage
