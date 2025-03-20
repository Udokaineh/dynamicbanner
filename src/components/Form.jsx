

const Form = ({ setTitle, setBgColor, setDescription, setImage, setFont }) => {

    const handleImageChange = (e) => {
        const file = e.target.files[0];
        if (file) {
            setImage(URL.createObjectURL(file)); // Converts file to a URL
        }
    };


    return (
        <div className="mt-8 flex flex-col items-center">
            <p className="text-center text-[16px] md:text-[18px] font-medium">Customize Your Banner</p>
            <form className="mt-5 p-[1rem] md:p-[2rem] rounded-[8px] space-y-4 w-full md:w-[90%] lg:w-[70%] bg-[#FAFAF9]">
                <div className="flex flex-col gap-[6px]">
                    <label htmlFor="title" className="text-[14px]">Banner Title</label>
                    <input
                        id="title"
                        name="title"
                        type="text"
                        placeholder="Change title"
                        className="border border-[#e3e3e3] rounded-[0.5rem] text-[14px] p-3 w-full"
                        onChange={(e) => setTitle(e.target.value)}
                    />
                </div>

                <div className="flex flex-col gap-[6px]">
                    <label htmlFor="description" className="text-[14px]">Description</label>
                    <textarea
                        id="description"
                        name="description"
                        type="text"
                        placeholder="Change description"
                        className="border border-[#e3e3e3] rounded-[0.5rem] text-[14px] p-3 w-full"
                        onChange={(e) => setDescription(e.target.value)}
                    />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 w-full gap-[16px]">
                    <div className="flex flex-col gap-[6px] shrink-0">
                        <label htmlFor="bgColor" className="text-[14px]">Background Colour</label>
                        <select
                            id="bgColor"
                            name="bgColor"
                            className="border border-[#e3e3e3] rounded-[0.5rem] text-[14px] p-3 w-full" onChange={(e) => setBgColor(e.target.value)}>
                            <option value="">Select</option>
                            <option value="bg-blue-500">Blue</option>
                            <option value="bg-green-600">Green</option>
                            <option value="bg-red-500">Red</option>
                            <option value="bg-purple-500">Purple</option>
                            <option value="bg-gradient-to-r from-green-400 to-blue-500">Green to Blue</option>
                            <option value="bg-gradient-to-r from-red-400 to-yellow-500">Red to Yellow</option>
                        </select>
                    </div>

                    <div className="flex flex-col gap-[6px] shrink-0">
                        <label htmlFor="font" className="text-[14px]">Banner Font</label>

                        <select
                            id="font"
                            name="font"
                            className="border border-[#e3e3e3] rounded-[0.5rem] text-[14px] p-3 w-full" onChange={(e) => setFont(e.target.value)}>
                            <option value="">Select</option>
                            <option value="font-sans">Sans Serif</option>
                            <option value="font-serif">Serif</option>
                            <option value="font-mono">Monospace</option>
                        </select>
                    </div>
                </div>

                <div className="sm:flex flex-col gap-[6px] hidden">
                    <label htmlFor="image" className="text-[14px]">Banner Image</label>
                    <input
                        id="image"
                        name="image"
                        type="file"
                        accept="image/*"
                        className="border border-[#e3e3e3] rounded-[0.5rem] text-[14px] p-3 w-full"
                        onChange={handleImageChange}
                    />
                </div>
            </form>
        </div>
    );
}

export default Form

