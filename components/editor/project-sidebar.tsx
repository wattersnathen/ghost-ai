"use client"

import { Plus, X } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { cn } from "@/lib/utils"

interface ProjectSidebarProps {
  isOpen: boolean
  onClose: () => void
}

export function ProjectSidebar({ isOpen, onClose }: ProjectSidebarProps) {
  return (
    <aside
      inert={!isOpen}
      className={cn(
        "fixed top-14 bottom-0 left-0 z-40 flex w-72 flex-col border-r border-surface-border-subtle bg-surface/95 backdrop-blur-sm transition-transform duration-200",
        isOpen ? "translate-x-0" : "-translate-x-full"
      )}
    >
      <div className="flex items-center justify-between border-b border-surface-border-subtle px-4 py-3">
        <h2 className="text-sm font-medium text-copy-primary">Projects</h2>
        <Button variant="ghost" size="icon-sm" onClick={onClose}>
          <X />
          <span className="sr-only">Close</span>
        </Button>
      </div>

      <Tabs
        defaultValue="my-projects"
        className="flex flex-1 flex-col overflow-hidden px-4 py-3"
      >
        <TabsList className="w-full">
          <TabsTrigger value="my-projects" className="flex-1">
            My Projects
          </TabsTrigger>
          <TabsTrigger value="shared" className="flex-1">
            Shared
          </TabsTrigger>
        </TabsList>
        <TabsContent
          value="my-projects"
          className="flex flex-1 items-center justify-center text-sm text-copy-muted"
        >
          No projects yet
        </TabsContent>
        <TabsContent
          value="shared"
          className="flex flex-1 items-center justify-center text-sm text-copy-muted"
        >
          No shared projects yet
        </TabsContent>
      </Tabs>

      <div className="border-t border-surface-border-subtle p-4">
        <Button className="w-full">
          <Plus />
          New Project
        </Button>
      </div>
    </aside>
  )
}
