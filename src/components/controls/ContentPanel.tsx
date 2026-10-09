
"use client"

import { useState } from "react"
import { ChevronDown, ChevronRight, Plus, Trash2 } from "lucide-react"

import type { ContentState } from "@/types/content"
import type { Project } from "@/types/project"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Separator } from "@/components/ui/separator"

type ContentPanelProps = {
    project: Project
    onProjectChange?: (project: Project) => void
}

type ContentGroup = "navbar" | "hero" | "services" | "cta" | "footer"

export function ContentPanel({
    project,
    onProjectChange,
}: ContentPanelProps) {
    const [expandedGroup, setExpandedGroup] =
        useState<ContentGroup | null>("hero")

    const content = project.content
    const services = content.services

    function updateContent(nextContent: ContentState) {
        onProjectChange?.({
            ...project,
            content: nextContent,
        })
    }

    function updateHero(
        field: "eyebrow" | "heading" | "description",
        value: string,
    ) {
        if (!content.hero) return

        updateContent({
            ...content,
            hero: {
                ...content.hero,
                [field]: value,
            },
        })
    }

    function updateNavbarBrand(value: string) {
        if (!content.navbar) return

        updateContent({
            ...content,
            navbar: {
                ...content.navbar,
                brand: value,
            },
        })
    }



    function updateServicesEyebrow(value: string) {
        const services = content.services
        if (!services) return

        updateContent({
            ...content,
            services: {
                ...services,
                eyebrow: value,
            },
        })
    }

    function updateService(
        index: number,
        field: "title" | "description",
        value: string,
    ) {
        const services = content.services
        if (!services) return

        updateContent({
            ...content,
            services: {
                ...services,
                items: services.items.map((service, serviceIndex) =>
                    serviceIndex === index
                        ? { ...service, [field]: value }
                        : service,
                ),
            },
        })
    }

    function addService() {
        const services = content.services
        if (!services) return

        updateContent({
            ...content,
            services: {
                ...services,
                items: [
                    ...services.items,
                    {
                        id: crypto.randomUUID(),
                        title: "New service",
                        description: "Describe this service.",
                    },
                ],
            },
        })
    }

    function removeService(index: number) {
        const services = content.services
        if (!services) return

        updateContent({
            ...content,
            services: {
                ...services,
                items: services.items.filter(
                    (_, serviceIndex) => serviceIndex !== index,
                ),
            },
        })
    }



    function updateCTA(
        field: "eyebrow" | "heading" | "buttonLabel",
        value: string,
    ) {
        if (!content.cta) return

        updateContent({
            ...content,
            cta: {
                ...content.cta,
                [field]: value,
            },
        })
    }

    function updateFooter(
        field: "brand" | "copyright",
        value: string,
    ) {
        if (!content.footer) return

        updateContent({
            ...content,
            footer: {
                ...content.footer,
                [field]: value,
            },
        })
    }

    function toggleGroup(group: ContentGroup) {
        setExpandedGroup((current) =>
            current === group ? null : group,
        )
    }

    return (
        <div className="space-y-1">
            <div className="mb-5">
                <p className="text-sm font-medium">Website content</p>
                <p className="mt-1 text-xs text-muted-foreground">
                    Edit text shared across your section variants.
                    Changes update the preview immediately.
                </p>
            </div>

            {content.navbar && (
                <ContentGroupHeader
                    title="Navbar"
                    subtitle={content.navbar.brand}
                    expanded={expandedGroup === "navbar"}
                    onClick={() => toggleGroup("navbar")}
                >
                    <Field label="Brand name">
                        <Input
                            value={content.navbar.brand}
                            onChange={(event) =>
                                updateNavbarBrand(event.target.value)
                            }
                            placeholder="Brand name"
                        />
                    </Field>
                </ContentGroupHeader>
            )}

            {content.hero && (
                <ContentGroupHeader
                    title="Hero"
                    subtitle="Main heading and introduction"
                    expanded={expandedGroup === "hero"}
                    onClick={() => toggleGroup("hero")}
                >
                    <div className="space-y-4">
                        <Field label="Eyebrow">
                            <Input
                                value={content.hero.eyebrow}
                                onChange={(event) =>
                                    updateHero("eyebrow", event.target.value)
                                }
                                placeholder="Short introductory label"
                            />
                        </Field>

                        <Field label="Heading">
                            <Textarea
                                value={content.hero.heading}
                                onChange={(event) =>
                                    updateHero("heading", event.target.value)
                                }
                                rows={3}
                                placeholder="Main website heading"
                            />
                        </Field>

                        <Field label="Description">
                            <Textarea
                                value={content.hero.description}
                                onChange={(event) =>
                                    updateHero("description", event.target.value)
                                }
                                rows={4}
                                placeholder="Describe the project"
                            />
                        </Field>
                    </div>
                </ContentGroupHeader>
            )}

            {services && (
                <ContentGroupHeader
                    title="Services"
                    subtitle={`${services.items.length} items`}
                    expanded={expandedGroup === "services"}
                    onClick={() => toggleGroup("services")}
                >
                    <div className="space-y-5">
                        <Field label="Section label">
                            <Input
                                value={services.eyebrow}
                                onChange={(event) =>
                                    updateServicesEyebrow(event.target.value)
                                }
                                placeholder="Section label"
                            />
                        </Field>
                        {services.items.map((service, index) => (
                            <div
                                key={service.id ?? `service-${index}`}
                                className="space-y-3"
                            >
                                <div className="flex items-center justify-between">
                                    <p className="text-xs font-medium text-muted-foreground">
                                        Service {index + 1}
                                    </p>

                                    <Button
                                        type="button"
                                        variant="ghost"
                                        size="icon-sm"
                                        aria-label={`Remove service ${index + 1}`}
                                        onClick={() => removeService(index)}
                                    >
                                        <Trash2 />
                                    </Button>
                                </div>

                                <Field label="Title">
                                    <Input
                                        value={service.title}
                                        onChange={(event) =>
                                            updateService(
                                                index,
                                                "title",
                                                event.target.value,
                                            )
                                        }
                                        placeholder="Service title"
                                    />
                                </Field>

                                <Field label="Description">
                                    <Textarea
                                        value={service.description ?? ""}
                                        onChange={(event) =>
                                            updateService(
                                                index,
                                                "description",
                                                event.target.value,
                                            )
                                        }
                                        rows={2}
                                        placeholder="Service description"
                                    />
                                </Field>

                                {index < services.items.length - 1 && (
                                    <Separator />
                                )}
                            </div>
                        ))}

                        <Button
                            type="button"
                            variant="outline"
                            className="w-full"
                            onClick={addService}
                        >
                            <Plus />
                            Add service
                        </Button>
                    </div>
                </ContentGroupHeader>
            )}

            {content.cta && (
                <ContentGroupHeader
                    title="Call to action"
                    subtitle="Closing message and button"
                    expanded={expandedGroup === "cta"}
                    onClick={() => toggleGroup("cta")}
                >
                    <div className="space-y-4">
                        <Field label="Eyebrow">
                            <Input
                                value={content.cta.eyebrow}
                                onChange={(event) =>
                                    updateCTA("eyebrow", event.target.value)
                                }
                                placeholder="Short label"
                            />
                        </Field>

                        <Field label="Heading">
                            <Textarea
                                value={content.cta.heading}
                                onChange={(event) =>
                                    updateCTA("heading", event.target.value)
                                }
                                rows={3}
                                placeholder="Call-to-action heading"
                            />
                        </Field>

                        <Field label="Button label">
                            <Input
                                value={content.cta.buttonLabel}
                                onChange={(event) =>
                                    updateCTA("buttonLabel", event.target.value)
                                }
                                placeholder="Button text"
                            />
                        </Field>
                    </div>
                </ContentGroupHeader>
            )}

            {content.footer && (
                <ContentGroupHeader
                    title="Footer"
                    subtitle="Brand and copyright"
                    expanded={expandedGroup === "footer"}
                    onClick={() => toggleGroup("footer")}
                >
                    <div className="space-y-4">
                        <Field label="Brand name">
                            <Input
                                value={content.footer.brand}
                                onChange={(event) =>
                                    updateFooter("brand", event.target.value)
                                }
                                placeholder="Brand name"
                            />
                        </Field>

                        <Field label="Copyright">
                            <Input
                                value={content.footer.copyright}
                                onChange={(event) =>
                                    updateFooter("copyright", event.target.value)
                                }
                                placeholder="Copyright text"
                            />
                        </Field>
                    </div>
                </ContentGroupHeader>
            )}
        </div>
    )
}

type ContentGroupHeaderProps = {
    title: string
    subtitle: string
    expanded: boolean
    onClick: () => void
    children: React.ReactNode
}

function ContentGroupHeader({
    title,
    subtitle,
    expanded,
    onClick,
    children,
}: ContentGroupHeaderProps) {
    return (
        <section className="border-b border-border">
            <button
                type="button"
                className="flex w-full items-center gap-3 py-4 text-left"
                aria-expanded={expanded}
                onClick={onClick}
            >
                {expanded ? (
                    <ChevronDown className="size-4 shrink-0" />
                ) : (
                    <ChevronRight className="size-4 shrink-0" />
                )}

                <span className="min-w-0 flex-1">
                    <span className="block text-sm font-medium">
                        {title}
                    </span>
                    <span className="mt-0.5 block truncate text-xs text-muted-foreground">
                        {subtitle}
                    </span>
                </span>
            </button>

            {expanded && (
                <div className="pb-5">
                    {children}
                </div>
            )}
        </section>
    )
}

type FieldProps = {
    label: string
    children: React.ReactNode
}

function Field({ label, children }: FieldProps) {
    return (
        <label className="block space-y-2">
            <span className="text-xs font-medium text-muted-foreground">
                {label}
            </span>
            {children}
        </label>
    )
}
