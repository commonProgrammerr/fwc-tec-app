
import * as Yup from 'yup'

interface Errors {
  [key: string]: string
}

interface Schema {
  [key: string]: Yup.BaseSchema
}

export default function getValidationErrors(err: Yup.ValidationError): Errors {
  const validationErrors: Errors = {}

  err.inner.forEach(error => {
    console.error(error)
    validationErrors[error.path!] = error.message
  })

  return validationErrors
}

export async function validateFields<T extends any>(data: T, schema: Schema) {
  try {
    
    await Yup
    .object()
    .shape(schema)
    .validate(data, { abortEarly: false })

    return new Promise<T>((resolve, reject) => resolve(data))

  } catch (err) {
    return new Promise<T>((resolve, reject) => reject(err))
  }
}