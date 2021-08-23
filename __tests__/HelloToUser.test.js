import { render } from "@testing-library/react"
import HelloToUser from '../components/HelloToUser'

test('HelloToUser name test', () => {

    localStorage.setItem('username', 'Daniele')

    const component = render(<HelloToUser />)
    const co = component.getByTestId('hellomessagetouser')
    expect(co.textContent).toBe(`Hi ${localStorage.getItem('username')} !`)
})

test('HelloToUser render test', () => {
    localStorage.setItem('username', 'testName')
    const component = render(<HelloToUser />)
    expect(component).toBeTruthy()
})
