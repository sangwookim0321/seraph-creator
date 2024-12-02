import { create } from 'zustand'
import { persist } from 'zustand/middleware'

export const useYoutubeStore = create(
  persist(
    (set, get) => ({
      lastCalculation: null,
      lastSearchedUrl: '',
      error: null,
      // 최근 검색 기록 (최대 3개)
      recentSearches: [],
      
      setLastCalculation: (data) => set({ lastCalculation: data }),
      setLastSearchedUrl: (url) => {
        const currentSearches = get().recentSearches
        const newSearches = [
          url,
          ...currentSearches.filter(item => item !== url)
        ].slice(0, 3)
        
        set({ 
          lastSearchedUrl: url,
          recentSearches: newSearches
        })
      },
      setError: (error) => set({ error }),
      resetCalculation: () => set({ lastCalculation: null, error: null }),
    }),
    {
      name: 'seraph-creator-storage',
      partialize: (state) => ({ recentSearches: state.recentSearches }),
    }
  )
) 