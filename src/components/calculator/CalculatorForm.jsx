import { useState } from "react"
import { useTranslation } from 'react-i18next'
import { Button } from "../ui/button"
import { Input } from "../ui/input"
import { Spinner } from "../ui/spinner"
import { X } from "lucide-react"

const CalculatorForm = ({ url, setUrl, loading, onCalculate }) => {
  const { t } = useTranslation()
  const [isError, setIsError] = useState(false)

  const handleCalculate = () => {
    if (!url) {
      setIsError(true)
      return
    }
    setIsError(false)
    onCalculate()
  }

  const handleChange = (e) => {
    setUrl(e.target.value)
    if (isError) setIsError(false)
  }

  const handleClear = () => {
    setUrl('')
    if (isError) setIsError(false)
  }

  return (
    <div className="flex gap-2">
      <div className="relative flex-1">
        <Input 
          placeholder={t('calculator.input.placeholder')}
          value={url}
          onChange={handleChange}
          className={`h-12 pr-10 ${isError ? 'border-destructive focus-visible:ring-destructive' : ''}`}
        />
        {url && (
          <button
            onClick={handleClear}
            className="absolute right-3 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-foreground"
          >
            <X className="h-4 w-4" />
            <span className="sr-only">입력 내용 지우기</span>
          </button>
        )}
      </div>
      <Button 
        onClick={handleCalculate} 
        disabled={loading}
        size="lg"
        className="px-8"
      >
        {loading ? <Spinner className="mr-2" /> : null}
        {t('calculator.input.search')}
      </Button>
    </div>
  )
}

export { CalculatorForm } 