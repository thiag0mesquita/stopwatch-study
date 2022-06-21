import React, { useState } from "react";
import { ITarefa } from "../../types/tarefa";
import Button from "../Button";
import style from './Form.module.scss';
import {v4 as uuidv4} from 'uuid';

interface Props {
  setTarefas: React.Dispatch<React.SetStateAction<ITarefa[]>>
}

function Form ({setTarefas}: Props) {
  const [tarefa, setTarefa] = useState('')
  const [tempo, setTempo] = useState('00:00')
  function adicionarTarefa(e: React.FocusEvent<HTMLFormElement>) {
    e.preventDefault()
    setTarefas(tarefasAntigas => 
      [
        ...tarefasAntigas,
        {
          tarefa,
          tempo,
          selecionado: false,
          completado: false,
          id: uuidv4()
        }
      ]
    )
    setTarefa('')
    setTempo('00:00')
  }

  return (
    <form action="" className={style.novaTarefa} onSubmit={adicionarTarefa}>
      <div className={style.inputContainer}>
        <label htmlFor="tarefa">
          Adicione um novo estudo
        </label>
        <input
          type="text"
          name="tarefa"
          value={tarefa}
          onChange={(e) => setTarefa(e.target.value)}
          id="tarefa"
          placeholder="O que você vai fazer?"
          required
        />
      </div>
      <div className={style.inputContainer}>
        <label htmlFor="tempo">
          Tempo
        </label>
        <input
          type="time"
          step="1"
          name="tempo"
          value={tempo}
          onChange={(e) => setTempo(e.target.value)}
          id="tempo"
          min="00:00:00"
          max="01:30:00"
          required
        />
      </div>
      <Button type="submit">
        Adicionar
      </Button>
    </form>
  )
}

export default Form;
