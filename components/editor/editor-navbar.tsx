"use client"

import { UserButton } from "@clerk/nextjs"
import { PanelLeftClose, PanelLeftOpen } from "lucide-react"

import { Button } from "@/components/ui/button"

interface EditorNavbarProps {
  isSidebarOpen: boolean
  onToggleSidebar: () => void
}

export function EditorNavbar({
  isSidebarOpen,
  onToggleSidebar,
}: EditorNavbarProps) {
  return (
    <nav className="flex h-14 shrink-0 items-center justify-between border-b border-surface-border-subtle bg-surface px-4">
      <div className="flex items-center gap-2">
        <Button variant="ghost" size="icon-sm" onClick={onToggleSidebar}>
          {isSidebarOpen ? <PanelLeftClose /> : <PanelLeftOpen />}
          <span className="sr-only">Toggle sidebar</span>
        </Button>
      </div>

      <div className="flex items-center gap-2" />

      <div className="flex items-center gap-2">
        <UserButton />
      </div>
    </nav>
  )
}
