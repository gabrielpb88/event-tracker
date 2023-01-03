import { useSetRecoilState } from 'recoil';
import { IEvento } from '../interfaces/IEvento';
import { listaDeEventosState } from '../state';
import { obterId } from '../util';

const useAdicionarEvento = () => {
  const setListaDeEventos = useSetRecoilState<IEvento[]>(listaDeEventosState);
  return (evento: IEvento): void => {
    const hoje = new Date();
    if (evento.inicio < hoje) {
      throw new Error(
        'Eventos não podem ser cadastrados com data menor que a atual.',
      );
    }
    evento.id = obterId();
    setListaDeEventos((prevState) => [...prevState, evento]);
  };
};

export default useAdicionarEvento;
