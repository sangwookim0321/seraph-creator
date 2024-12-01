import * as React from "react"
import { ChevronDown } from "lucide-react"
import { Button } from "./button"
import { cn } from "../../lib/utils"

const Dropdown = React.forwardRef(({ className, children, items, onSelect, ...props }, ref) => {
  const [open, setOpen] = React.useState(false)

  return (
    <div className="relative" ref={ref} {...props}>
      <Button
        variant="ghost"
        size="sm"
        className={cn("gap-1", className)}
        onClick={() => setOpen(!open)}
      >
        {children}
        <ChevronDown className="h-4 w-4" />
      </Button>
      
      {open && (
        <>
          <div
            className="fixed inset-0 z-40"
            onClick={() => setOpen(false)}
          />
          <div className="absolute right-0 top-full z-50 mt-1 min-w-[8rem] overflow-hidden rounded-md border bg-background shadow-md">
            <div className="py-1">
              {items?.map((item) => (
                <button
                  key={item.code}
                  className="relative flex w-full cursor-default select-none items-center px-3 py-2 text-sm outline-none hover:bg-accent hover:text-accent-foreground"
                  onClick={() => {
                    onSelect(item.code)
                    setOpen(false)
                  }}
                >
                  {item.label}
                </button>
              ))}
            </div>
          </div>
        </>
      )}
    </div>
  )
})
Dropdown.displayName = "Dropdown"

export { Dropdown } 