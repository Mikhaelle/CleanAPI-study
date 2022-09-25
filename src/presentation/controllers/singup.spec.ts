import { SingUpController } from './singup'

describe('SingUP Controller', () => {
  test('Should return 400 if no name is provider', () => {
    const sut = new SingUpController()

    const httpRequest = {
      body: {
        email: 'any_email@mail.com',
        password: 'anyPassword',
        passwordConfirmation: 'anyPassword'
      }
    }
    const httpResponse = sut.handle(httpRequest)
    expect(httpResponse.statusCode).toBe(400)
    expect(httpResponse.body).toEqual(new Error('Missing param: name'))
  })
})
