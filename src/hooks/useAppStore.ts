import { AppStore } from '@/types/reduxTypes';
import { useStore } from 'react-redux';

export const useAppStore: () => AppStore = useStore;
