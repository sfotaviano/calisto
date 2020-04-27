import React from 'react'

import { Container, TitleLogon } from './styles'

export default function Login () {
  return (
    <Container>
      <section>
        <form onSubmit={() => {}} style={{ boxShadow: '0 0 14px 0 rgba(53,64,82,.05)', position: 'relative', background: '#fff', height: '300px', borderRadius: '5px', padding: '15px' }}>
          <TitleLogon>Faca seu logon</TitleLogon>

          <input
            placeholder="E-mail"
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
