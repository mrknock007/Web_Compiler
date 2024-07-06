import {
  ResizableHandle,
  ResizablePanel,
  ResizablePanelGroup,
} from "@/components/ui/resizable"

import CodeEditor from "@/components/CodeEditor"
import HelperHeader from "@/components/HelperHeader"
import RenderCode from "@/components/RenderCode"
import { useParams } from "react-router-dom"
import { useEffect } from "react"
import axios from "axios"
import { useDispatch } from "react-redux"
import { updateFullCode } from "@/redux/slices/compilerSlice"
import toast from "react-hot-toast"

const Compiler = () => {
  const { urlId } = useParams()
  const dispatch = useDispatch()

  const loadCode = async () => {
    try {
      const response = await axios.get(`http://localhost:3000/compiler/load/${urlId}`)
      dispatch(updateFullCode(response.data.fullCode))
    } catch (error) {
      if (axios.isAxiosError(error)) {
        if(error?.response?.status === 500) {
          toast.error("Invalid URL, Default Code Loaded")
        }
      }
      console.log(error)
    }
  }

  useEffect(() => {
    if (urlId) {
      loadCode()
    }
  }, [urlId])

  return (
    <main>
      <ResizablePanelGroup direction="horizontal" className="min-h-[calc(100dvh-56px)]">
        <ResizablePanel className="min-w-[350px]" defaultSize={65}>
          <HelperHeader />
          <CodeEditor />
        </ResizablePanel>
        <ResizableHandle withHandle />
        <ResizablePanel className="min-w-[350px]" defaultSize={35}>
          <RenderCode />
        </ResizablePanel>
    </ResizablePanelGroup>
    </main>
  )
}

export default Compiler