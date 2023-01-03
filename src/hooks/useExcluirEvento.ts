import { useSetRecoilState } from 'recoil';
import { listaDeEventosState } from '../state';
import { IEvento } from '../interfaces/IEvento';

const useExcluirEvento = () => {
  const setListaDeEventos = useSetRecoilState<IEvento[]>(listaDeEventosState);
  return (evento: IEvento) => {
    setListaDeEventos((listaAntiga) =>
      listaAntiga.filter((item) => item.id !== evento.id),
    );
  };
};
export default useExcluirEvento;
