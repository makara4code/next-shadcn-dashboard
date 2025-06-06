"use client"

import { useState, useEffect, type ReactNode, JSX } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { ArrowRight, MoreHorizontal, Clock, CheckCircle, AlertTriangle } from "lucide-react"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"

// Define TypeScript interfaces for our data structures
interface Assignee {
  name: string
  avatar: string
}

interface LifecycleItem {
  id: number
  title: string
  description: string
  dueDate: string
  assignee: Assignee
  priority: "high" | "medium" | "low"
}

interface LifecycleItems {
  [stage: string]: LifecycleItem[]
}

// Type for priority colors mapping
type PriorityColorMap = {
  [key in LifecycleItem["priority"]]: string
}

// Sample data for lifecycle items
const lifecycleItems: LifecycleItems = {
  planning: [
    {
      id: 1,
      title: "Market Research",
      description: "Analyze market trends and competition",
      dueDate: "2025-04-15",
      assignee: {
        name: "Alex Kim",
        avatar: "/placeholder.svg?height=32&width=32",
      },
      priority: "high",
    },
    {
      id: 2,
      title: "Requirements Gathering",
      description: "Collect stakeholder requirements",
      dueDate: "2025-04-10",
      assignee: {
        name: "Jamie Lee",
        avatar: "/placeholder.svg?height=32&width=32",
      },
      priority: "medium",
    },
    {
      id: 3,
      title: "Budget Approval",
      description: "Get budget approval from finance",
      dueDate: "2025-04-05",
      assignee: {
        name: "Taylor Swift",
        avatar: "/placeholder.svg?height=32&width=32",
      },
      priority: "high",
    },
  ],
  development: [
    {
      id: 4,
      title: "UI Design",
      description: "Create wireframes and mockups",
      dueDate: "2025-04-20",
      assignee: {
        name: "Morgan Chen",
        avatar: "/placeholder.svg?height=32&width=32",
      },
      priority: "medium",
    },
    {
      id: 5,
      title: "Backend Development",
      description: "Implement API endpoints",
      dueDate: "2025-04-25",
      assignee: {
        name: "Jordan Patel",
        avatar: "/placeholder.svg?height=32&width=32",
      },
      priority: "high",
    },
  ],
  testing: [
    {
      id: 6,
      title: "Unit Testing",
      description: "Write and run unit tests",
      dueDate: "2025-05-01",
      assignee: {
        name: "Casey Jones",
        avatar: "/placeholder.svg?height=32&width=32",
      },
      priority: "medium",
    },
    {
      id: 7,
      title: "Integration Testing",
      description: "Test component integration",
      dueDate: "2025-05-05",
      assignee: {
        name: "Riley Smith",
        avatar: "/placeholder.svg?height=32&width=32",
      },
      priority: "high",
    },
  ],
  deployment: [
    {
      id: 8,
      title: "Staging Deployment",
      description: "Deploy to staging environment",
      dueDate: "2025-05-10",
      assignee: {
        name: "Quinn Davis",
        avatar: "/placeholder.svg?height=32&width=32",
      },
      priority: "high",
    },
  ],
  maintenance: [
    {
      id: 9,
      title: "Performance Monitoring",
      description: "Set up monitoring tools",
      dueDate: "2025-05-15",
      assignee: {
        name: "Avery Wilson",
        avatar: "/placeholder.svg?height=32&width=32",
      },
      priority: "medium",
    },
  ],
}

// Props interface for LifecycleItem component
interface LifecycleItemProps {
  item: LifecycleItem
  onMoveNext: (targetStage?: string) => void
  showMoveOptions?: boolean
  stages?: string[]
}

// Component for individual lifecycle item card
function LifecycleItem({ item, onMoveNext, showMoveOptions = false, stages = [] }: LifecycleItemProps): JSX.Element {
  const priorityColors: PriorityColorMap = {
    high: "bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-300",
    medium: "bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-300",
    low: "bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-300",
  }

  return (
    <Card className="mb-3 w-full">
      <CardHeader className="p-4 pb-2">
        <div className="flex justify-between items-start">
          <CardTitle className="text-base font-medium">{item.title}</CardTitle>
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="ghost" size="icon" className="h-8 w-8">
                <MoreHorizontal className="h-4 w-4" />
                <span className="sr-only">Open menu</span>
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end">
              <DropdownMenuLabel>Actions</DropdownMenuLabel>
              <DropdownMenuItem>Edit item</DropdownMenuItem>
              <DropdownMenuItem>View details</DropdownMenuItem>
              <DropdownMenuSeparator />
              {showMoveOptions ? (
                <>
                  {stages.map((stage) => (
                    <DropdownMenuItem key={stage} onClick={() => onMoveNext(stage)}>
                      Move to {stage}
                    </DropdownMenuItem>
                  ))}
                </>
              ) : (
                <DropdownMenuItem onClick={() => onMoveNext()}>Move to next stage</DropdownMenuItem>
              )}
              <DropdownMenuItem className="text-red-600">Delete item</DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
        <CardDescription className="text-xs mt-1">{item.description}</CardDescription>
      </CardHeader>
      <CardContent className="p-4 pt-0">
        <div className="flex justify-between items-center mt-2">
          <div className="flex items-center gap-2">
            <Avatar className="h-6 w-6">
              <AvatarImage src={item.assignee.avatar} alt={item.assignee.name} />
              <AvatarFallback>{item.assignee.name.charAt(0)}</AvatarFallback>
            </Avatar>
            <span className="text-xs text-muted-foreground">{item.assignee.name}</span>
          </div>
          <div className="flex items-center gap-2">
            <Badge variant="outline" className={`text-xs ${priorityColors[item.priority]}`}>
              {item.priority}
            </Badge>
            <div className="flex items-center text-xs text-muted-foreground">
              <Clock className="h-3 w-3 mr-1" />
              {new Date(item.dueDate).toLocaleDateString()}
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}

// Props interface for view components
interface LifecycleViewProps {
  items: LifecycleItems
  moveToNextStage: (currentStage: string, itemId: number, targetStage?: string | null) => void
  getStageIcon: (stage: string) => ReactNode
}

// Mobile view for lifecycle stages
function MobileLifecycleView({ items, moveToNextStage, getStageIcon }: LifecycleViewProps): JSX.Element {
  const [selectedStage, setSelectedStage] = useState<string>(Object.keys(items)[0])
  const stages = Object.keys(items)

  // Filter out the current stage from move options
  const moveOptions = stages.filter((stage) => stage !== selectedStage)

  return (
    <div className="space-y-4">
      <div className="flex items-center gap-2">
        <Select value={selectedStage} onValueChange={setSelectedStage}>
          <SelectTrigger className="w-full">
            <SelectValue placeholder="Select stage" />
          </SelectTrigger>
          <SelectContent>
            {stages.map((stage) => (
              <SelectItem key={stage} value={stage}>
                <div className="flex items-center gap-2">
                  <div className="bg-muted rounded-full p-1">{getStageIcon(stage)}</div>
                  <span className="capitalize">{stage}</span>
                  <Badge variant="secondary" className="ml-1">
                    {items[stage].length}
                  </Badge>
                </div>
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
      </div>

      <div className="bg-muted/40 rounded-lg p-3 max-h-[calc(100vh-180px)] overflow-y-auto">
        {items[selectedStage].length > 0 ? (
          items[selectedStage].map((item) => (
            <LifecycleItem
              key={item.id}
              item={item}
              onMoveNext={(targetStage) => moveToNextStage(selectedStage, item.id, targetStage)}
              showMoveOptions={true}
              stages={moveOptions}
            />
          ))
        ) : (
          <div className="text-center py-8 text-muted-foreground text-sm">No items in this stage</div>
        )}
      </div>
    </div>
  )
}

// Tablet view for lifecycle stages
function TabletLifecycleView({ items, moveToNextStage, getStageIcon }: LifecycleViewProps): JSX.Element {
  return (
    <Accordion type="multiple" defaultValue={Object.keys(items)} className="space-y-2">
      {Object.entries(items).map(([stage, stageItems]) => (
        <AccordionItem key={stage} value={stage} className="border rounded-lg">
          <AccordionTrigger className="px-4 py-2 hover:no-underline">
            <div className="flex items-center gap-2 w-full">
              <div className="bg-muted rounded-full p-1">{getStageIcon(stage)}</div>
              <h3 className="font-semibold capitalize">{stage}</h3>
              <Badge variant="secondary" className="ml-auto mr-2">
                {stageItems.length}
              </Badge>
            </div>
          </AccordionTrigger>
          <AccordionContent className="px-4 pb-4 pt-2">
            <div className="bg-muted/40 rounded-lg p-3 max-h-[300px] overflow-y-auto">
              {stageItems.length > 0 ? (
                stageItems.map((item) => (
                  <LifecycleItem key={item.id} item={item} onMoveNext={() => moveToNextStage(stage, item.id)} />
                ))
              ) : (
                <div className="text-center py-8 text-muted-foreground text-sm">No items in this stage</div>
              )}
            </div>
          </AccordionContent>
        </AccordionItem>
      ))}
    </Accordion>
  )
}

// Desktop view for lifecycle stages
function DesktopLifecycleView({ items, moveToNextStage, getStageIcon }: LifecycleViewProps): JSX.Element {
  return (
    <div className="overflow-x-auto pb-4 -mx-4 px-4">
      <div className="flex gap-4 min-w-max">
        {Object.entries(items).map(([stage, stageItems]) => (
          <div key={stage} className="flex flex-col w-80">
            <div className="flex items-center gap-2 mb-3">
              <div className="bg-muted rounded-full p-1">{getStageIcon(stage)}</div>
              <h3 className="font-semibold capitalize">{stage}</h3>
              <Badge variant="secondary" className="ml-auto">
                {stageItems.length}
              </Badge>
            </div>
            <div className="bg-muted/40 rounded-lg p-3 flex-1 max-h-[calc(100vh-220px)]">
              <div className="overflow-y-auto pr-1 max-h-[calc(100vh-250px)]">
                {stageItems.map((item) => (
                  <LifecycleItem key={item.id} item={item} onMoveNext={() => moveToNextStage(stage, item.id)} />
                ))}
                {stageItems.length === 0 && (
                  <div className="text-center py-8 text-muted-foreground text-sm">No items in this stage</div>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

// Main lifecycle stages component
export function LifecycleStages(): JSX.Element {
  const [items, setItems] = useState<LifecycleItems>(lifecycleItems)
  const [viewportWidth, setViewportWidth] = useState<number>(0)

  // Update viewport width on resize
  useEffect(() => {
    const handleResize = (): void => {
      setViewportWidth(window.innerWidth)
    }

    // Set initial width
    handleResize()

    window.addEventListener("resize", handleResize)
    return () => window.removeEventListener("resize", handleResize)
  }, [])

  // Function to move an item to the next stage
  const moveToNextStage = (currentStage: string, itemId: number, targetStage: string | null = null): void => {
    const stages = Object.keys(items)

    // If targetStage is provided, use it, otherwise calculate next stage
    const nextStage: string | null =
      targetStage ||
      (() => {
        const currentIndex = stages.indexOf(currentStage)
        return currentIndex < stages.length - 1 ? stages[currentIndex + 1] : null
      })()

    if (nextStage) {
      setItems((prev) => {
        // Create a copy of the previous state
        const newItems = { ...prev }

        // Find the item to move
        const itemToMove = newItems[currentStage].find((item) => item.id === itemId)

        if (!itemToMove) return prev // Safety check

        // Remove the item from the current stage
        newItems[currentStage] = newItems[currentStage].filter((item) => item.id !== itemId)

        // Add the item to the next stage
        newItems[nextStage] = [...newItems[nextStage], itemToMove]

        return newItems
      })
    }
  }

  // Get stage icon based on stage name
  const getStageIcon = (stage: string): ReactNode => {
    switch (stage) {
      case "planning":
        return <Clock className="h-5 w-5" />
      case "development":
        return <Clock className="h-5 w-5" />
      case "testing":
        return <AlertTriangle className="h-5 w-5" />
      case "deployment":
        return <ArrowRight className="h-5 w-5" />
      case "maintenance":
        return <CheckCircle className="h-5 w-5" />
      default:
        return <Clock className="h-5 w-5" />
    }
  }

  // Render appropriate view based on viewport width
  if (viewportWidth < 640) {
    return <MobileLifecycleView items={items} moveToNextStage={moveToNextStage} getStageIcon={getStageIcon} />
  } else if (viewportWidth < 1024) {
    return <TabletLifecycleView items={items} moveToNextStage={moveToNextStage} getStageIcon={getStageIcon} />
  } else {
    return <DesktopLifecycleView items={items} moveToNextStage={moveToNextStage} getStageIcon={getStageIcon} />
  }
}

