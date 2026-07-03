import Footer from "./Footer"

const Info = () => {
    return (
        <div className="p-2">
            <button className="bg-amber-300 text-black rounded-md w-25 h-8 rounded-1.5xl font-bold">Learning</button>
            <h4 className="m-1">Published 21 Dec 2023</h4>
            <h1 className="text-2xl text-amber-300 m-0.5 font-bold">HTML & CSS foundation</h1>
            <p className="m-0.5">These languages are the backbone of every website, defining structure, content and presentation.</p>
            <Footer />
        </div>
    )
}

export default Info