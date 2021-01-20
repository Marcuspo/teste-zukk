import React, { useState } from "react"
import { Link } from "react-router-dom"
import { FiArrowLeft } from "react-icons/fi"
import api from "../../../services/api"
import Modal from "../../../components/Modal"

import "./styles.css"

export default function ClienteNew() {
  const [nome, setNome] = useState("")
  const [endereco, setEndereco] = useState("")
  const [bairro, setBairro] = useState("")
  const [cidade, setCidade] = useState("")
  const [uf, setUf] = useState("")
  const [telefone, setTelefone] = useState("")
  const [email, setEmail] = useState("")

  const [modalVisible, setModalVisible] = useState(false)
  const [mensagemModal, setmensagemModal] = useState("")

  async function newCliente(e) {
    e.preventDefault()

    if (nome === null || nome === "") {
      setmensagemModal("Preencha o nome do Cliente")
      setModalVisible(true)
      return
    }
    if (endereco === null || endereco === "") {
      setmensagemModal("Preencha o endereço corretamente")
      setModalVisible(true)
      return
    }
    if (bairro === null || bairro === "") {
      setmensagemModal("Preencha o endereço corretamente")
      setModalVisible(true)
      return
    }
    if (cidade === null || cidade === "") {
      setmensagemModal("Preencha o endereço corretamente")
      setModalVisible(true)
      return
    }
    if (uf === null || uf === "") {
      setmensagemModal("Preencha o endereço corretamente")
      setModalVisible(true)
      return
    }
    if (telefone === null || telefone === "") {
      setmensagemModal("Preencha o endereço corretamente")
      setModalVisible(true)
      return
    }
    if (email === null || email === "") {
      setmensagemModal("Preencha o endereço corretamente")
      setModalVisible(true)
      return
    }

    const data = {
      nome,
      endereco,
      bairro,
      cidade,
      uf,
      telefone,
      email,
    }

    try {
      await api.post("clientes", data, {})

      this.props.history.push("/app")
    } catch (error) {
      alert("Erro ao cadastrar Cliente")
    }
  }

  return (
    <div>
      {modalVisible ? (
        <Modal onClose={() => setModalVisible(false)} title={mensagemModal} />
      ) : null}
      <div className="new-vaga-container">
        <div className="conteiner">
          <section>
            <img src={logoImg} alt="Be The Hero" />
            <h1>Cadastrar Cliente</h1>
            <p>Cadastre o cliente e torneu membro da nossa equipe.</p>
            <Link className="back-link" to="/clientes">
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
              value={endereco}
              onChange={(e) => setEndereco(e.target.value)}
              placeholder="Endereço do Cliente"
            />
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
