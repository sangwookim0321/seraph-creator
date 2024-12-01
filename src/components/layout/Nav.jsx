import { Globe } from "lucide-react"
import { Dropdown } from "../ui/dropdown"
import { useTranslation } from 'react-i18next'
import { useYoutubeStore } from '../../stores/youtubeStore'
import { useCalculateIncome } from '../../hooks/useYoutubeQuery'

const LANGUAGES = [
  { code: 'ko', label: '한국어' },
  { code: 'en', label: 'English' },
  { code: 'ja', label: '日本語' }
]

const Nav = () => {
  const { t, i18n } = useTranslation()
  const lastSearchedUrl = useYoutubeStore(state => state.lastSearchedUrl)
  const { mutate: calculateIncome } = useCalculateIncome()
  
  const handleLanguageChange = (code) => {
    i18n.changeLanguage(code)
    // 마지막 검색 URL이 있으면 재검색
    if (lastSearchedUrl) {
      calculateIncome(lastSearchedUrl)
    }
  }

  const currentLang = LANGUAGES.find(lang => lang.code === i18n.language) || LANGUAGES[0]

  return (
    <nav className="border-b">
      <div className="container mx-auto px-4 h-16 flex items-center justify-between">
        <div className="flex items-center gap-8">
          {/* 로고 영역 */}
          <div className="flex items-center gap-2">
            <a href="/" className="flex items-center gap-2">
              <img 
                src="/seraph-creator-logo.svg" 
                alt="SeraphCreator Logo" 
                className="w-8 h-8"
              />
              <span className="text-xl font-bold">SeraphCreator</span>
            </a>
          </div>
          
          {/* 메뉴 영역 */}
          <div className="hidden md:flex items-center gap-4">
            <a 
              href="/"
              className="text-muted-foreground hover:text-foreground px-4 py-2 rounded-md transition-colors"
            >
              {t('nav.home')}
            </a>
            <a 
              href="/rankings"
              className="text-muted-foreground hover:text-foreground px-4 py-2 rounded-md transition-colors"
            >
              {t('nav.rankings')}
            </a>
          </div>
        </div>
        
        <div className="flex items-center">
          <Dropdown
            items={LANGUAGES}
            onSelect={handleLanguageChange}
          >
            <Globe className="h-4 w-4" />
            <span>{currentLang.label}</span>
          </Dropdown>
        </div>
      </div>
      
      {/* 모바일 메뉴 */}
      <div className="md:hidden border-t">
        <div className="container mx-auto px-4 py-2 flex items-center gap-2">
          <a 
            href="/"
            className="flex-1 text-center text-muted-foreground hover:text-foreground px-4 py-2 rounded-md transition-colors"
          >
            {t('nav.home')}
          </a>
          <a 
            href="/rankings"
            className="flex-1 text-center text-muted-foreground hover:text-foreground px-4 py-2 rounded-md transition-colors"
          >
            {t('nav.rankings')}
          </a>
        </div>
      </div>
    </nav>
  )
}

export { Nav }