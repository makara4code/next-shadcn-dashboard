import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { ArrowUpRight, ArrowDownRight, Clock, CheckCircle2, AlertCircle } from "lucide-react"

export function LifecycleStats() {
  return (
    <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
      <Card>
        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
          <CardTitle className="text-sm font-medium">Total Items</CardTitle>
          <div className="h-4 w-4 text-muted-foreground">
            <Clock className="h-4 w-4" />
          </div>
        </CardHeader>
        <CardContent>
          <div className="text-2xl font-bold">142</div>
          <p className="text-xs text-muted-foreground">
            <span className="text-emerald-500 flex items-center gap-1">
              <ArrowUpRight className="h-3 w-3" />
              +12.5%
            </span>{" "}
            from last month
          </p>
        </CardContent>
      </Card>
      <Card>
        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
          <CardTitle className="text-sm font-medium">In Progress</CardTitle>
          <div className="h-4 w-4 text-muted-foreground">
            <Clock className="h-4 w-4" />
          </div>
        </CardHeader>
        <CardContent>
          <div className="text-2xl font-bold">78</div>
          <p className="text-xs text-muted-foreground">
            <span className="text-emerald-500 flex items-center gap-1">
              <ArrowUpRight className="h-3 w-3" />
              +8.2%
            </span>{" "}
            from last month
          </p>
        </CardContent>
      </Card>
      <Card>
        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
          <CardTitle className="text-sm font-medium">Completed</CardTitle>
          <div className="h-4 w-4 text-muted-foreground">
            <CheckCircle2 className="h-4 w-4" />
          </div>
        </CardHeader>
        <CardContent>
          <div className="text-2xl font-bold">56</div>
          <p className="text-xs text-muted-foreground">
            <span className="text-emerald-500 flex items-center gap-1">
              <ArrowUpRight className="h-3 w-3" />
              +19.4%
            </span>{" "}
            from last month
          </p>
        </CardContent>
      </Card>
      <Card>
        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
          <CardTitle className="text-sm font-medium">At Risk</CardTitle>
          <div className="h-4 w-4 text-muted-foreground">
            <AlertCircle className="h-4 w-4" />
          </div>
        </CardHeader>
        <CardContent>
          <div className="text-2xl font-bold">8</div>
          <p className="text-xs text-muted-foreground">
            <span className="text-rose-500 flex items-center gap-1">
              <ArrowDownRight className="h-3 w-3" />
              -3.1%
            </span>{" "}
            from last month
          </p>
        </CardContent>
      </Card>
    </div>
  )
}

