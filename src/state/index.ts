import { atom } from 'recoil';
import { IEvento } from '../interfaces/IEvento';
import { IFiltroDeEvento } from '../interfaces/IFiltroDeEvento';

export const listaDeEventosState = atom<IEvento[]>({
  key: 'listaDeEventosState',
  default: [
    {
      descricao: 'Estudar React',
      inicio: new Date('2023-01-15T09:00'),
      fim: new Date('2023-01-15T13:00'),
      completo: false,
      id: 1642342747,
    },
    {
      descricao: 'Estudar Recoil',
      inicio: new Date('2023-01-16T09:00'),
      fim: new Date('2023-01-16T11:00'),
      completo: false,
      id: 1642342959,
    },
  ],
});

export const filtroDeEventos = atom<IFiltroDeEvento>({
  key: 'filtroDeEventos',
  default: {},
});
