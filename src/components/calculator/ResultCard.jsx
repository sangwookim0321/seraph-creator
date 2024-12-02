import { useTranslation } from 'react-i18next'
import { StatsDisplay } from './StatsDisplay'

const EarningsCard = ({ title, earnings, period, titleColor = "text-muted-foreground" }) => {
  const { t } = useTranslation()
  
  const formatMoney = (amount) => {
    return `$${amount?.toLocaleString() ?? 0} USD`
  }
  
  return (
    <div className="space-y-2 p-4 bg-primary/5 rounded-lg">
      <div className="flex items-center justify-between mb-2">
        <h3 className={`text-lg font-bold ${titleColor}`}>{title}</h3>
        {period && (
          <span className="text-xs text-muted-foreground">
            {t('calculator.earnings.period')}
          </span>
        )}
      </div>
      <p className="text-3xl font-bold text-primary">
        {formatMoney(earnings?.monthly?.average)}
      </p>
      <p className="text-sm text-muted-foreground">
        {formatMoney(earnings?.monthly?.min)} - {formatMoney(earnings?.monthly?.max)}
      </p>
      <div className="pt-2 border-t mt-2">
        <p className="text-sm text-muted-foreground">{t('calculator.earnings.yearly')}</p>
        <p className="text-lg font-semibold">
          {formatMoney(earnings?.yearly?.average)}
        </p>
        <p className="text-xs text-muted-foreground">
          {formatMoney(earnings?.yearly?.min)} - {formatMoney(earnings?.yearly?.max)}
        </p>
      </div>
    </div>
  )
}

const ResultCard = ({ result }) => {
  const { t } = useTranslation()
  
  if (!result || !result.earnings) {
    return null
  }

  const { channelTitle, earnings, period } = result

  return (
    <div className="space-y-6 bg-card p-8 rounded-xl shadow-lg border">
      <h2 className="text-2xl font-bold text-center mb-6">{channelTitle}</h2>
      
      {/* 총 수익 */}
      <div className="mb-8">
        <EarningsCard 
          title={t('calculator.earnings.total')}
          earnings={earnings.total}
          period={period}
        />
      </div>

      {/* 일반 영상과 쇼츠 수익 */}
      <div className="grid grid-cols-2 gap-6">
        <EarningsCard 
          title={t('calculator.earnings.normal')}
          earnings={earnings.normal}
          titleColor="text-[#173C6B]"
        />
        <EarningsCard 
          title={t('calculator.earnings.shorts')}
          earnings={earnings.shorts}
          titleColor="text-[#2A6CC0]"
        />
      </div>

      <StatsDisplay stats={result.statistics} />
    </div>
  )
}

export { ResultCard } 