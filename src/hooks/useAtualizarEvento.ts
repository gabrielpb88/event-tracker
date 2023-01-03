import { useSetRecoilState } from 'recoil';
import { listaDeEventosState } from '../state';
import { IEvento } from '../interfaces/IEvento';

const useAtualizarEvento = () => {
  const setListaDeEventos = useSetRecoilState<IEvento[]>(listaDeEventosState);
  return (evento: IEvento): void => {
    setListaDeEventos((prevState) => {
      const index = prevState.findIndex((e) => e.id === evento.id);
      return [
        ...prevState.slice(0, index),
        evento,
        ...prevState.slice(index + 1),
      ];
    });
  };
};

export default useAtualizarEvento;
