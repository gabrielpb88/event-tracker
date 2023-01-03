import React from 'react';
import { IEvento } from '../../../interfaces/IEvento';
import { useSetRecoilState } from 'recoil';
import { listaDeEventosState } from '../../../state';

const EventoCheckbox: React.FC<{ evento: IEvento }> = ({ evento }) => {
  const setListaDeEventos = useSetRecoilState(listaDeEventosState);
  const alterarStatus = () => {
    const eventoAlterado = {
      ...evento,
      completo: !evento.completo,
    };

    setListaDeEventos((prevState) => {
      const index = prevState.findIndex((e) => e.id === evento.id);
      return [
        ...prevState.slice(0, index),
        eventoAlterado,
        ...prevState.slice(index + 1),
      ];
    });
  };
  const estilos = [
    'far',
    'fa-2x',
    evento.completo ? 'fa-check-square' : 'fa-square',
  ];

  return <i className={estilos.join(' ')} onClick={alterarStatus}></i>;
};

export default EventoCheckbox;
