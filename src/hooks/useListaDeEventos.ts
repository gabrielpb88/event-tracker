import { useRecoilValue } from 'recoil';
import { listaDeEventosState } from '../state';

const useListaDeEventos = () => {
  return useRecoilValue(listaDeEventosState);
};

export default useListaDeEventos;
