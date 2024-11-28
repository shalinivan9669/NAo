// store/index.ts
import axios from 'axios';
import jwtDecode from 'jwt-decode';
import type { Procurement } from '../types/types';

interface UserPayload {
  id: string;
  username: string;
  isAdmin: boolean;
  exp: number;
}

interface AuthState {
  token: string;
  user: UserPayload | null;
  procurements: Procurement[];
  total: number;
  page: number;
  limit: number;
}

const storeConfig = {
  state: (): AuthState => ({
    token: typeof window !== 'undefined' ? localStorage.getItem('token') || '' : '',
    user: null,
    procurements: [],
    total: 0,
    page: 1,
    limit: 10,
  }),
  getters: {
    isAuthenticated: (state: AuthState) => !!state.token && !!state.user,
    isAdmin: (state: AuthState) => state.user?.isAdmin || false,
    procurements: (state: AuthState) => state.procurements,
    total: (state: AuthState) => state.total,
    page: (state: AuthState) => state.page,
    limit: (state: AuthState) => state.limit,
  },
  mutations: {
    setToken(state: AuthState, token: string) {
      state.token = token;
      if (typeof window !== 'undefined') {
        localStorage.setItem('token', token);
      }
      console.log('Mutation: setToken', token);
    },
    setUser(state: AuthState, user: UserPayload) {
      state.user = user;
      console.log('Mutation: setUser', user);
    },
    clearAuth(state: AuthState) {
      state.token = '';
      state.user = null;
      if (typeof window !== 'undefined') {
        localStorage.removeItem('token');
      }
      console.log('Mutation: clearAuth');
    },
    setProcurements(state: AuthState, payload: { procurements: Procurement[]; total: number; page: number; limit: number }) {
      state.procurements = payload.procurements;
      state.total = payload.total;
      state.page = payload.page;
      state.limit = payload.limit;
      console.log('Mutation: setProcurements', payload);
    },
    addProcurement(state: AuthState, procurement: Procurement) {
      state.procurements.unshift(procurement);
      state.total += 1;
      console.log('Mutation: addProcurement', procurement);
    },
    updateProcurement(state: AuthState, updatedProcurement: Procurement) {
      const index = state.procurements.findIndex(p => p.id === updatedProcurement.id);
      if (index !== -1) {
        state.procurements.splice(index, 1, updatedProcurement);
        console.log('Mutation: updateProcurement', updatedProcurement);
      }
    },
    deleteProcurement(state: AuthState, id: string) {
      state.procurements = state.procurements.filter(p => p.id !== id);
      state.total -= 1;
      console.log('Mutation: deleteProcurement', id);
    },
  },
  actions: {
    async login({ commit }: any, credentials: { username: string; password: string }) {
      console.log('Action: login called with credentials:', credentials);
      try {
        const response = await axios.post('/api/auth/login', credentials);
        const token: string = response.data.token;
        const decoded: UserPayload = jwtDecode(token);
        console.log('Action: login received token:', token);
        console.log('Action: login decoded token:', decoded);

        commit('setToken', token);
        commit('setUser', decoded);
        console.log('Action: login successful');
      } catch (error: any) {
        console.error('Action: login error:', error);
        throw error;
      }
    },
    logout({ commit }: any) {
      commit('clearAuth');
      console.log('Action: logout called');
    },
    async fetchProcurements({ commit, state }: any, page: number = 1) {
      console.log(`Action: fetchProcurements called for page ${page}`);
      try {
        const response = await axios.get('/api/procurements', {
          params: { page, limit: state.limit },
          headers: {
            Authorization: `Bearer ${state.token}`,
          },
        });

        commit('setProcurements', {
          procurements: response.data.data,
          total: response.data.total,
          page: response.data.page,
          limit: response.data.limit,
        });
        console.log('Action: fetchProcurements successful');
      } catch (error: any) {
        console.error('Action: fetchProcurements error:', error);
        throw error;
      }
    },
    async createProcurement({ commit, state }: any, procurementData: any) {
      console.log('Action: createProcurement called with data:', procurementData);
      try {
        const formData = new FormData();
        formData.append('title', procurementData.title);
        formData.append('description', procurementData.description);
        formData.append('createdAt', procurementData.createdAt);
        formData.append('endDate', procurementData.endDate);

        if (procurementData.files && procurementData.files.length > 0) {
          procurementData.files.forEach((file: File) => {
            formData.append('files', file);
          });
        }

        const response = await axios.post('/api/procurements', formData, {
          headers: {
            Authorization: `Bearer ${state.token}`,
            'Content-Type': 'multipart/form-data',
          },
        });

        commit('addProcurement', response.data);
        console.log('Action: createProcurement successful');
      } catch (error: any) {
        console.error('Action: createProcurement error:', error);
        throw error;
      }
    },
    async updateProcurement({ commit, state }: any, procurementData: any) {
      console.log('Action: updateProcurement called with data:', procurementData);
      try {
        const formData = new FormData();
        formData.append('title', procurementData.title);
        formData.append('description', procurementData.description);
        formData.append('createdAt', procurementData.createdAt);
        formData.append('endDate', procurementData.endDate);

        if (procurementData.files && procurementData.files.length > 0) {
          procurementData.files.forEach((file: File) => {
            formData.append('files', file);
          });
        }

        if (procurementData.fileUrls) {
          formData.append('fileUrls', JSON.stringify(procurementData.fileUrls));
        }

        const response = await axios.put(`/api/procurements/${procurementData.id}`, formData, {
          headers: {
            Authorization: `Bearer ${state.token}`,
            'Content-Type': 'multipart/form-data',
          },
        });

        commit('updateProcurement', response.data);
        console.log('Action: updateProcurement successful');
      } catch (error: any) {
        console.error('Action: updateProcurement error:', error);
        throw error;
      }
    },
    async deleteProcurement({ commit, state }: any, id: string) {
      console.log('Action: deleteProcurement called with id:', id);
      try {
        await axios.delete(`/api/procurements/${id}`, {
          headers: {
            Authorization: `Bearer ${state.token}`,
          },
        });

        commit('deleteProcurement', id);
        console.log('Action: deleteProcurement successful');
      } catch (error: any) {
        console.error('Action: deleteProcurement error:', error);
        throw error;
      }
    },
    initialize({ commit }: any) {
      if (typeof window !== 'undefined') {
        const token = localStorage.getItem('token') || '';
        console.log('Action: initialize called with token:', token);
        if (token) {
          try {
            const decoded: UserPayload = jwtDecode(token);
            if (decoded.exp * 1000 > Date.now()) {
              commit('setUser', decoded);
              console.log('Action: initialize setUser with decoded token');
            } else {
              commit('clearAuth');
              console.log('Action: initialize cleared auth due to expired token');
            }
          } catch (error) {
            commit('clearAuth');
            console.log('Action: initialize cleared auth due to invalid token');
          }
        }
      }
    },
  },
  modules: {
    // Добавьте модули, если необходимо
  },
};

export default storeConfig;
