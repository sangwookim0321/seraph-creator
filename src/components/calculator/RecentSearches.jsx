import { useYoutubeStore } from '../../stores/youtubeStore'

export function RecentSearches({ onSelect }) {
  const recentSearches = useYoutubeStore(state => state.recentSearches)

  if (recentSearches.length === 0) return null

  return (
    <div className="mt-2 space-y-1">
      {recentSearches.map((url, index) => (
        <button
          key={index}
          onClick={() => onSelect(url)}
          className="w-full text-left px-3 py-2 text-sm text-muted-foreground hover:bg-accent hover:text-accent-foreground rounded-md transition-colors truncate"
          title={url}
        >
          {url}
        </button>
      ))}
    </div>
  )
} 