import { create } from 'zustand'

interface ComponentInfo {
  id: string
  name: string
  filePath: string
  props: Record<string, unknown>
}

interface DevToolsState {
  selectedComponent: ComponentInfo | null
  componentTree: ComponentInfo[]
  codeContent: string
  setSelectedComponent: (component: ComponentInfo | null) => void
  setComponentTree: (tree: ComponentInfo[]) => void
  setCodeContent: (content: string) => void
}

export const useDevToolsStore = create<DevToolsState>((set) => ({
  selectedComponent: null,
  componentTree: [],
  codeContent: '',
  setSelectedComponent: (component) => set({ selectedComponent: component }),
  setComponentTree: (tree) => set({ componentTree: tree }),
  setCodeContent: (content) => set({ codeContent: content }),
})) 