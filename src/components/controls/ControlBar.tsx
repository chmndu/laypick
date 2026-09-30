"use client"

import {
    LayoutPanelTop,
    Palette,
    Smartphone,
} from "lucide-react"

import { Button } from "@/components/ui/button"
import type { ControlPanel } from "@/types/controls"

type ControlBarProps = {
    activePanel: ControlPanel | null
    onPanelChange: (panel: ControlPanel) => void
}

const controls: {
    id: ControlPanel
    label: string
    icon: typeof Palette
}[] = [
        {
            id: "design",
            label: "Design",
            icon: Palette,
        },
        {
            id: "sections",
            label: "Sections",
            icon: LayoutPanelTop,
        },
        {
            id: "responsive",
            label: "Preview",
            icon: Smartphone,
        },
    ]

export function ControlBar({
    activePanel,
    onPanelChange,
}: ControlBarProps) {
    return (
        <div className="fixed bottom-6 left-1/2 z-40 -translate-x-1/2">
            <div className="flex items-center gap-1 rounded-xl border bg-white p-1.5 shadow-lg">
                {controls.map((control) => {
                    const Icon = control.icon
                    const active = activePanel === control.id

                    return (
                        <Button
                            key={control.id}
                            variant={active ? "secondary" : "ghost"}
                            size="sm"
                            onClick={() => onPanelChange(control.id)}
                        >
                            <Icon />
                            <span className="hidden sm:inline">
                                {control.label}
                            </span>
                        </Button>
                    )
                })}
            </div>
        </div>
    )
}