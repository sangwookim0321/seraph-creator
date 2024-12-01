import { apiClient } from '../lib/axios'

export const youtubeService = {
  calculateIncome: async (channelUrl, language) => {
    const response = await apiClient.post('/youtube/calculate', { 
      channelUrl,
      language 
    })
    return response.data
  },

  getChannelRankings: async (params) => {
    const response = await apiClient.get('/youtube/rankings', { params })
    return response.data
  }
} 