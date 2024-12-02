import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query'
import { useTranslation } from 'react-i18next'
import { youtubeService } from '../services/youtubeService'
import { useYoutubeStore } from '../stores/youtubeStore'

// 수익 계산 mutation
export const useCalculateIncome = () => {
  const { i18n } = useTranslation()
  const queryClient = useQueryClient()
  const setLastCalculation = useYoutubeStore(state => state.setLastCalculation)
  const resetCalculation = useYoutubeStore(state => state.resetCalculation)
  const setError = useYoutubeStore(state => state.setError)

  return useMutation({
    mutationFn: (channelUrl) => youtubeService.calculateIncome(channelUrl, i18n.language),
    onMutate: () => {
      resetCalculation()
      setError(null)
    },
    onSuccess: (response) => {
      if (!response.success) {
        setError(response.error || "해당 채널이 존재하지 않거나 검색 결과가 없습니다!")
        return
      }
      console.log('성공', response)
      setLastCalculation(response.data)
      queryClient.setQueryData(['channelCalculation', response.data.channelId], response.data)
    },
    onError: (error) => {
      console.log('에러', error.response.data.error)
      setError(error.response?.data?.error || "해당 채널이 존재하지 않거나 검색 결과가 없습니다!")
    }
  })
}

// 채널 순위 조회 query
export const useChannelRankings = (params) => {
  return useQuery({
    queryKey: ['channelRankings', params],
    queryFn: () => youtubeService.getChannelRankings(params),
    staleTime: 5 * 60 * 1000, // 5분 동안 캐시 유지
    cacheTime: 30 * 60 * 1000, // 30분 동안 캐시 보관
  })
} 