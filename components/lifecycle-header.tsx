import { Button } from "@/components/ui/button"
import { PlusCircle, Filter, Download } from "lucide-react"

export function LifecycleHeader() {
  return (
    <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
      <div>
        <h1 className="text-3xl font-bold tracking-tight">Lifecycle Management</h1>
        <p className="text-muted-foreground">Track and manage items through their complete lifecycle</p>
      </div>
      <div className="flex items-center gap-2">
        <Button variant="outline" size="sm">
          <Filter className="h-4 w-4 mr-2" />
          Filter
        </Button>
        <Button variant="outline" size="sm">
          <Download className="h-4 w-4 mr-2" />
          Export
        </Button>
        <Button size="sm">
          <PlusCircle className="h-4 w-4 mr-2" />
          New Item
        </Button>
      </div>
    </div>
  )
}

