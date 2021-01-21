import React, { useState } from "react"
import { Link } from "react-router-dom"
import { FiArrowLeft } from "react-icons/fi"
import api from "../services/api"
import "./styles.css"

export default function ClienteNew() {
  const [nome, setNome] = useState("")
  const [cep, setCep] = useState("")
  const [bairro, setBairro] = useState("")
  const [cidade, setCidade] = useState("")
  const [uf, setUf] = useState("")
  const [telefone, setTelefone] = useState("")
  const [email, setEmail] = useState("")

  async function newCliente(e) {
    e.preventDefault()

    if (nome === null || nome === "") {
      alert("Preencha o nome do Cliente")

      return
    }
    if (cep === null || cep === "") {
      alert("Preencha o endereço corretamente")

      return
    }
    if (bairro === null || bairro === "") {
      alert("Preencha o endereço corretamente")

      return
    }
    if (cidade === null || cidade === "") {
      alert("Preencha o endereço corretamente")
      return
    }
    if (uf === null || uf === "") {
      alert("Preencha o endereço corretamente")
      return
    }
    if (telefone === null || telefone === "") {
      alert("Preencha o endereço corretamente")
      return
    }
    if (email === null || email === "") {
      alert("Preencha o endereço corretamente")
      return
    }

    const data = {
      nome,
      cep,
      bairro,
      cidade,
      uf,
      telefone,
      email,
    }

    try {
      await api.post("clientes", data)
      this.props.history.push("/app")
    } catch (error) {
      alert("Erro ao cadastrar Cliente")
    }
  }

  return (
    <div>
      <div className="new-vaga-container">
        <div className="conteiner">
          <section>
            <h1>Cadastrar Cliente</h1>
            <p>Cadastre o cliente</p>
            <Link className="back-link" to="/app">
              <FiArrowLeft size={16} color="#E02041" />
              Voltar para Home
            </Link>
          </section>
          <form onSubmit={newCliente}>
            <input
              value={nome}
              onChange={(e) => setNome(e.target.value)}
              placeholder="Nome do Cliente"
            />
            <input
              value={cep}
              onChange={(e) => setCep(e.target.value)}
              placeholder="Cep do Cliente"
            />
            <button className="button-cep" type="submit">
              Buscar Cep
            </button>
            <input
              value={bairro}
              onChange={(e) => setBairro(e.target.value)}
              placeholder="Bairro do Cliente"
            />
            <input
              value={cidade}
              onChange={(e) => setCidade(e.target.value)}
              placeholder="Cidade do Cliente"
            />
            <input
              value={uf}
              onChange={(e) => setUf(e.target.value)}
              placeholder="Uf do Cliente"
            />
            <input
              value={telefone}
              onChange={(e) => setTelefone(e.target.value)}
              placeholder="Telefone do Cliente"
            />
            <input
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="E-mail do Cliente"
            />
            <button className="button" type="submit">
              Cadastrar
            </button>
          </form>
        </div>
      </div>
    </div>
  )
}
