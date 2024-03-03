import { AppDispatch } from '@/types/reduxTypes';
import { useDispatch } from 'react-redux';
// import { DispatchFunc } from '../types/reduxTypes';

// export const useAppDispatch: DispatchFunc = useDispatch;

export const useAppDispatch: () => AppDispatch = useDispatch;
