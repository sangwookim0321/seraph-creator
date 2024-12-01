const Footer = () => {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="border-t py-6">
      <div className="container flex flex-col items-center gap-2">
        <p className="text-sm text-muted-foreground">
          © {currentYear} SeraphCreator. All rights reserved.
        </p>
        <a
          href="mailto:pointjumpit@gmail.com"
          className="text-sm text-muted-foreground hover:text-primary transition-colors"
        >
          pointjumpit@gmail.com
        </a>
      </div>
    </footer>
  )
}

export { Footer } 