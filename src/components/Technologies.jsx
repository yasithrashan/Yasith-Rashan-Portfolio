import { RiReactjsLine } from "react-icons/ri"
import { 
  TbBrandTailwind, 
  TbBrandJavascript, 
  TbBrandPython, 
  TbBrandPhp,
  TbBrandHtml5, 
  TbBrandCss3, 
  TbBrandMysql,
  TbBrandGit,
  TbBrandFigma,
  TbBrandDocker
} from "react-icons/tb"
import { 
  SiMongodb, 
  SiNodedotjs, 
  SiExpress, 
  SiFirebase, 
  SiSpring,
  SiKubernetes
} from "react-icons/si"

const Technologies = () => {
  return (
    <div className="pb-24">
        <h2 className="mb-12 text-center text-4xl font-bold tracking-tighter lg:text-5xl">
          <span className="bg-gradient-to-r from-stone-300 to-stone-600 bg-clip-text text-transparent">
            Technologies
          </span>
        </h2>

        <div className="flex flex-wrap items-center justify-center gap-4">
            <div className="p-4">
                <RiReactjsLine className="text-7xl text-cyan-400" />
            </div>
            <div className="p-4">
                <TbBrandJavascript className="text-7xl text-yellow-400" />
            </div>
            <div className="p-4">
                <TbBrandTailwind className="text-7xl text-cyan-500" />
            </div>
            <div className="p-4">
                <SiMongodb className="text-7xl text-green-500" />
            </div>
            <div className="p-4">
                <SiNodedotjs className="text-7xl text-green-600" />
            </div>
            <div className="p-4">
                <SiExpress className="text-7xl" />
            </div>
            <div className="p-4">
                <TbBrandPython className="text-7xl text-yellow-500" />
            </div>
            {/* New technologies */}
            <div className="p-4">
                <TbBrandPhp className="text-7xl text-purple-500" />
            </div>
            <div className="p-4">
                <TbBrandHtml5 className="text-7xl text-orange-500" />
            </div>
            <div className="p-4">
                <TbBrandCss3 className="text-7xl text-blue-500" />
            </div>
            <div className="p-4">
                <SiSpring className="text-7xl text-green-400" />
            </div>
            <div className="p-4">
                <TbBrandMysql className="text-7xl text-blue-600" />
            </div>
            <div className="p-4">
                <SiFirebase className="text-7xl text-yellow-600" />
            </div>
            <div className="p-4">
                <TbBrandGit className="text-7xl text-red-500" />
            </div>
            <div className="p-4">
                <TbBrandFigma className="text-7xl text-purple-400" />
            </div>
            {/* Added Docker and Kubernetes */}
            <div className="p-4">
                <TbBrandDocker className="text-7xl text-blue-400" />
            </div>
            <div className="p-4">
                <SiKubernetes className="text-7xl text-blue-500" />
            </div>
        </div>
    </div>
  )
}

export default Technologies