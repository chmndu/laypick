"use client"

import { Sheet, SheetContent } from "@/components/ui/sheet"
import type { ReactNode } from "react"
import type { ControlPanel } from "@/types/controls"

type ControlDrawerProps = {
    activePanel: ControlPanel | null
    onClose: () => void
    children: ReactNode
}

const panelTitles: Record<ControlPanel, string> = {
    design: "Design System",
    sections: "Sections",
    content: "Content",
    responsive: "Responsive",
}

export function ControlDrawer({
    activePanel,
    onClose,
    children,
}: ControlDrawerProps) {
    return (
        <Sheet
            open={activePanel !== null}
            onOpenChange={(open) => {
                if (!open) onClose()
            }}
        >
            <SheetContent
                side="right"
                className="w-[min(90vw,24rem)] sm:max-w-[24rem]"
            >
                {activePanel ? (
                    <>
                        <div className="border-b pb-4">
                            <h2 className="text-sm font-medium">
                                {panelTitles[activePanel]}
                            </h2>
                        </div>

                        <div className="overflow-y-auto py-5">
                            {children}
                        </div>
                    </>
                ) : null}
            </SheetContent>
        </Sheet>
    )
}