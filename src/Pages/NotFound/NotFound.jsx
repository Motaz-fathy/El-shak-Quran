import notFoundImage from "../../assets/images/notFound/notFound.svg"
const NotFound = () => {
    return (
        <div className="h-[550px] flex flex-col items-center justify-center gap-3">
            <img src={notFoundImage} alt="Error 404 Not Found page" className="w-[350px]" />
            <h2 className="font-bold text-3xl w-[80%] text-center text-[#7cb98e]" dir="ltr">Page Not Found Please use the navigation bar <br /> to visit an available page.</h2>
        </div>
    )
}

export default NotFound