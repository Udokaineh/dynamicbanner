
const Banner = ({ bgColor, title, description, image, font }) => {
    const colorMap = {
        "bg-blue-500": "#7DD3FC",
        "bg-green-600": "#86EFAC",
        "bg-red-500": "#FCA5A5",
        "bg-purple-500": "#D8B4FE",
        "bg-gradient-to-r from-green-400 to-blue-500": "#7DD3FC",
        "bg-gradient-to-r from-red-400 to-yellow-500": "#FEF08A"
    };


    return (
        <div className="flex flex-col justify-center items-center py-[1rem] px-[1rem] md:px-0  md:py-[2rem]" style={{ backgroundColor: colorMap[bgColor] }}>
            <div className={`relative w-full md:w-[90%] lg:w-[70%] h-fit ${bgColor} border-[3px] border-white rounded-[8px] grid grid-cols-1 sm:grid-cols-2 justify-between items-center text-white`}>
                <div className={`p-[1rem] md:p-[2.5rem] shrink-0`}>
                    <h1 className={`${font} text-[18px] text-center md:text-2xl font-bold sm:text-left`}>{title}</h1>
                    <p className={`${font} text-[12px] md:text-[16px] text-center sm:text-left mt-2`}>{description}</p>
                </div>

                <div className="py-[1rem] shrink-0 hidden sm:flex flex-row justify-center">
                    <div className="flex flex-row">
                        <div>
                            <img src={image || null} alt="Banner" className="w-[120px] md:w-[200px] h-[120px] md:h-[200px] object-cover object-center rounded-[50%]" />
                            <div className="w-[50px] h-[50px] rounded-[50%] bg-white  border-[4px]" style={{ borderColor: colorMap[bgColor] }}></div>
                        </div>

                        <div className="flex flex-col justify-between ml-[10px]">
                            <div className="w-[50px] h-[50px] rounded-[50%] bg-white  border-[4px]" style={{ borderColor: colorMap[bgColor] }}></div>
                            <img src={image || null} alt="Banner" className="w-[60px] md:w-[80px] h-[60px] md:h-[80px] object-cover object-top rounded-[50%]" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Banner