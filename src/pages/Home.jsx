import { useState } from 'react'
import { useTranslation } from 'react-i18next'
import { CalculatorForm } from '../components/calculator/CalculatorForm'
import { ResultCard } from '../components/calculator/ResultCard'
import { Skeleton } from '../components/ui/skeleton'
import { useCalculateIncome } from '../hooks/useYoutubeQuery'
import { useYoutubeStore } from '../stores/youtubeStore'

export function Home() {
  const { t } = useTranslation()
  const [url, setUrl] = useState('')
  const { mutate: calculateIncome, isPending: loading } = useCalculateIncome()
  const lastCalculation = useYoutubeStore(state => state.lastCalculation)
  const error = useYoutubeStore(state => state.error)
  const setLastSearchedUrl = useYoutubeStore(state => state.setLastSearchedUrl)

  const handleCalculate = () => {
    if (!url) return
    setLastSearchedUrl(url)
    calculateIncome(url)
  }

  return (
    <main className="container mx-auto px-4 py-8 flex-1">
      <div className="text-center space-y-4 mb-12">
        <img 
          src="/seraph-creator-logo.svg" 
          alt="SeraphCreator Logo" 
          className="w-24 h-24 mx-auto mb-6"
        />
        <h1 className="text-4xl font-bold">
          {t('calculator.title')}
        </h1>
        <p className="text-muted-foreground max-w-lg mx-auto">
          {t('calculator.description')}
        </p>
      </div>
      
      <div className="max-w-xl mx-auto space-y-8">
        <CalculatorForm 
          url={url}
          setUrl={setUrl}
          loading={loading}
          onCalculate={handleCalculate}
        />

        {error && (
          <div className="p-4 bg-destructive/10 text-destructive rounded-lg text-center">
            {t('calculator.error.notFound')}
          </div>
        )}

        {lastCalculation && <ResultCard result={lastCalculation} />}

        {loading && (
          <div className="space-y-6 bg-card p-8 rounded-xl shadow-lg border">
            <div className="grid grid-cols-2 gap-6">
              <Skeleton className="h-28" />
              <Skeleton className="h-28" />
            </div>
            <div className="grid grid-cols-3 gap-6 pt-4">
              <Skeleton className="h-20" />
              <Skeleton className="h-20" />
              <Skeleton className="h-20" />
            </div>
          </div>
        )}
      </div>
    </main>
  )
} 