import { TbGitFork } from "react-icons/tb"
function ForkMe() {
  return (
    <a href="https://github.com/Deveesh-Shetty/Razer-Clone" target="_blank">
      <div className="fork-me flex items-center lg:absolute bg-razer-green text-primary-900 font-bold p-2 lg:top-8 lg:rotate-45 lg:-right-4 hover:bg-primary-100 hover:text-razer-green transition-colors text-center">
        <TbGitFork />
        <p>Fork me on Github</p>
      </div>
    </a>
  )
}

export default ForkMe
