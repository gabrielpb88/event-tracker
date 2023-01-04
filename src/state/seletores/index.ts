import { selector } from 'recoil';
import { filtroDeEventos, listaDeEventosState } from '../index';

export const eventosFiltradosState = selector({
  key: 'eventosFiltradosState',
  get: ({ get }) => {
    const filtro = get(filtroDeEventos);
    const todosOsEventos = get(listaDeEventosState);
    const eventos = todosOsEventos.filter((evento) => {
      if (filtro.data) {
        return (
          evento.inicio.toISOString().slice(0, 10) ===
          filtro.data?.toISOString().slice(0, 10)
        );
      }
      return true;
    });
    return eventos;
  },
});
