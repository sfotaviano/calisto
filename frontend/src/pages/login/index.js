import React from 'react'

import { Container, TitleLogon } from './styles'

export default function Login () {
  return (
    <Container>
      <section>
        <form onSubmit={() => {}}>
          <TitleLogon>Faca seu logon</TitleLogon>

          <input
            placeholder="Sua ID"
            onChange={() => {}}
          />
          <button className="button" type="submit">Entrar</button>

          {/* <Link className="back-link" to="/register">
            <FiLogIn size={24} color="#e02041" />
                        Nao tenho cadastro
          </Link> */}
        </form>
      </section>

    </Container>
  )
}
