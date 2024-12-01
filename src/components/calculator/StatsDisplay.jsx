import { useTranslation } from 'react-i18next'

const StatsDisplay = ({ stats }) => {
  const { t } = useTranslation()
  
  if (!stats) {
    return null
  }

  return (
    <div className="pt-6 border-t">
      <div className="grid grid-cols-3 gap-6 mb-6">
        <div className="text-center space-y-2">
          <h4 className="text-sm font-medium text-muted-foreground">
            {t('calculator.stats.subscribers')}
          </h4>
          <p className="text-2xl font-semibold">
            {stats.subscribers?.toLocaleString() ?? 0}
          </p>
        </div>
        <div className="text-center space-y-2">
          <h4 className="text-sm font-medium text-muted-foreground">
            {t('calculator.stats.totalViews')}
          </h4>
          <p className="text-2xl font-semibold">
            {stats.totalViews?.toLocaleString() ?? 0}
          </p>
        </div>
        <div className="text-center space-y-2">
          <h4 className="text-sm font-medium text-muted-foreground">
            {t('calculator.stats.videoCount')}
          </h4>
          <p className="text-2xl font-semibold">
            {stats.videoCount?.toLocaleString() ?? 0}
          </p>
        </div>
      </div>

      {/* 평균 조회수 섹션 */}
      <div className="bg-muted/30 p-4 rounded-lg">
        <h4 className="text-sm font-medium text-center mb-4">
          {t('calculator.stats.averageViews')}
        </h4>
        <div className="grid grid-cols-3 gap-4">
          <div className="text-center space-y-1">
            <p className="text-xs text-muted-foreground">
              {t('calculator.stats.normal')}
            </p>
            <p className="text-lg font-semibold">
              {stats.averageViews?.normal?.toLocaleString() ?? 0}
            </p>
          </div>
          <div className="text-center space-y-1">
            <p className="text-xs text-muted-foreground">
              {t('calculator.stats.shorts')}
            </p>
            <p className="text-lg font-semibold">
              {stats.averageViews?.shorts?.toLocaleString() ?? 0}
            </p>
          </div>
          <div className="text-center space-y-1">
            <p className="text-xs text-muted-foreground">
              {t('calculator.stats.total')}
            </p>
            <p className="text-lg font-semibold">
              {stats.averageViews?.total?.toLocaleString() ?? 0}
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export { StatsDisplay } 