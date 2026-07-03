import Image from "./Img"
import Info from "./Info"

const Card = () => {
    return (
        <div className="bg-white w-100 h-7/10 p-4 rounded-2xl shadow-lg shadow-black">
            <Image />
            <Info />
        </div>
    )
}

export default Card