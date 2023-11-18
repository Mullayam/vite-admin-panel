import { useToast } from "@/hooks/use-toast";
import React from "react";
import { createContext } from "react";
type LayoutOptions = "default" | "root"

export interface LayoutContextType  {
    currentLayout: LayoutOptions
    setActiveLayout: (layout: LayoutOptions) => void
}
export const LayoutContext = createContext<LayoutContextType>({
    currentLayout: "default",
    setActiveLayout: (): void => {}
})
export const LayoutContextProvider = ({ children }: { children: React.ReactNode }) => {
    const { toast } = useToast()
    const activeLayout = window.localStorage.getItem("activeLayout") as LayoutOptions || "root" 
    const [currentLayout, setCurrentLayout] = React.useState<LayoutOptions>(activeLayout)
    const setActiveLayout = (layout: LayoutOptions) => {
        window.localStorage.setItem("activeLayout", layout)
        setCurrentLayout(layout)
        toast({
            title: `Layout Changed to ${layout}`,
            description: "Please Refresh the page to apply Changes",
        })
    }
    return (
        <LayoutContext.Provider value={{ currentLayout, setActiveLayout }}>
            {children}
        </LayoutContext.Provider>
    )
}