import { create } from 'zustand'

export const useYoutubeStore = create((set) => ({
  // 상태
  channelUrl: '',
  lastCalculation: null,
  error: null,
  lastSearchedUrl: null,

  // 액션
  setChannelUrl: (url) => set({ channelUrl: url }),
  setLastCalculation: (data) => set({ lastCalculation: data }),
  resetCalculation: () => set({ lastCalculation: null }),
  setError: (error) => set({ error }),
  setLastSearchedUrl: (url) => set({ lastSearchedUrl: url }),
})) 