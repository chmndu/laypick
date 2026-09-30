export type ControlPanel =
    | "design"
    | "sections"
    | "content"
    | "responsive"

export type ControlState = {
    activePanel: ControlPanel | null
}